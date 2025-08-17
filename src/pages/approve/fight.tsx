/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import PocketBase from "pocketbase";
import { fluxgore, gothampro } from "@/utils/fonts";

const pb = new PocketBase("https://base.mossport.info");

interface FormData {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  citizenship: string;
  phone: string;
  email: string;
  carBrand: string;
  carModel: string;
  engine: string;
  power: string;
  additionalInfo: string;
}

interface Application {
  id: string;
  data: FormData;
  images: string[];
  type: string;
  status?: string;
  approved?: boolean;
  created: string;
}

function FightApplicationsPage() {
  const [pendingApplications, setPendingApplications] = useState<Application[]>(
    []
  );
  const [approvedApplications, setApprovedApplications] = useState<
    Application[]
  >([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "approved">("pending");

  useEffect(() => {
    // Проверяем, авторизован ли пользователь
    if (pb.authStore.isValid) {
      setIsAuthenticated(true);
      fetchApplications();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    try {
      await pb.admins.authWithPassword(credentials.email, credentials.password);
      setIsAuthenticated(true);
      setLoading(true);
      await fetchApplications();
    } catch (error) {
      console.error("Auth error:", error);
      setAuthError("Неверный email или пароль");
    }
  };

  const handleLogout = () => {
    pb.authStore.clear();
    setIsAuthenticated(false);
    setPendingApplications([]);
    setApprovedApplications([]);
  };

  const fetchApplications = async () => {
    try {
      // Fetch pending applications - exclude both approved and rejected
      const pendingRecords = await pb.collection("forms").getFullList({
        filter: 'type = "fight" && approved != true && status != "rejected"',
        sort: "-created",
      });

      // Fetch approved applications
      const approvedRecords = await pb.collection("forms").getFullList({
        filter: 'type = "fight" && approved = true',
        sort: "-created",
      });

      const formatApplications = (records: any[]) =>
        records.map((record: any) => ({
          id: record.id,
          data:
            typeof record.data === "string"
              ? JSON.parse(record.data)
              : record.data,
          images: record.images || [],
          type: record.type,
          status: record.status || "pending",
          approved: record.approved || false,
          created: record.created,
        }));

      setPendingApplications(formatApplications(pendingRecords));
      setApprovedApplications(formatApplications(approvedRecords));
    } catch (error) {
      console.error("Error fetching applications:", error);

      // Detailed error logging
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response === "object"
      ) {
        console.error("Response status:", (error as any).response.status);
        console.error("Response data:", (error as any).response.data);
      }

      if (typeof error === "object" && error !== null && "data" in error) {
        console.error("Error data:", (error as any).data);
      }

      // Add more detailed error logging
      if (typeof error === "object" && error !== null && "data" in error) {
        console.error("Error details:", (error as any).data);
      }
      if (error instanceof Error && error.message.includes("403")) {
        setAuthError("Недостаточно прав доступа");
        handleLogout();
      }
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    setProcessingId(id);
    try {
      await pb.collection("forms").update(id, {
        status: "approved",
        approved: true,
      });

      // Move from pending to approved
      const approvedApp = pendingApplications.find((app) => app.id === id);
      if (approvedApp) {
        approvedApp.status = "approved";
        approvedApp.approved = true;
        setApprovedApplications((prev) => [approvedApp, ...prev]);
        setPendingApplications((prev) => prev.filter((app) => app.id !== id));
      }

      alert("Заявка одобрена!");
    } catch (error) {
      console.error("Error approving application:", error);
      alert("Ошибка при одобрении заявки");
    } finally {
      setProcessingId(null);
    }
  };

  const handleReject = async (id: string) => {
    setProcessingId(id);
    try {
      await pb.collection("forms").update(id, {
        status: "rejected",
        approved: false,
      });
      setPendingApplications((prev) => prev.filter((app) => app.id !== id));
      alert("Заявка отклонена!");
    } catch (error) {
      console.error("Error rejecting application:", error);
      alert("Ошибка при отклонении заявки");
    } finally {
      setProcessingId(null);
    }
  };

  const getImageUrl = (record: Application, filename: string) => {
    // Manual URL construction with proper token handling
    const url = `${pb.baseUrl}/api/files/forms/${record.id}/${filename}`;

    // Add auth token if available
    if (pb.authStore.token) {
      const separator = url.includes("?") ? "&" : "?";
      return `${url}${separator}token=${pb.authStore.token}`;
    }

    return url;
  };

  const renderApplicationCard = (
    application: Application,
    showActions = true
  ) => (
    <div
      key={application.id}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
    >
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Личная информация */}
          <div className="space-y-4">
            <h3
              className={`${fluxgore.className} text-xl text-[#1068B0] border-b border-gray-200 pb-2`}
            >
              Личная информация
            </h3>
            <div className={`${gothampro.className} space-y-3`}>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-32">ФИО:</span>
                <span className="text-gray-900">
                  {application.data.lastName} {application.data.firstName}{" "}
                  {application.data.middleName}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-32">
                  Дата рождения:
                </span>
                <span className="text-gray-900">
                  {application.data.birthDate}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-32">
                  Гражданство:
                </span>
                <span className="text-gray-900">
                  {application.data.citizenship}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-32">
                  Телефон:
                </span>
                <span className="text-gray-900">{application.data.phone}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-32">Email:</span>
                <span className="text-gray-900">{application.data.email}</span>
              </div>
            </div>
          </div>

          {/* Информация об автомобиле */}
          <div className="space-y-4">
            <h3
              className={`${fluxgore.className} text-xl text-[#1068B0] border-b border-gray-200 pb-2`}
            >
              Автомобиль
            </h3>
            <div className={`${gothampro.className} space-y-3`}>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-24">Марка:</span>
                <span className="text-gray-900">
                  {application.data.carBrand}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-24">
                  Модель:
                </span>
                <span className="text-gray-900">
                  {application.data.carModel}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-24">
                  Двигатель:
                </span>
                <span className="text-gray-900">{application.data.engine}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-semibold text-gray-700 w-24">
                  Мощность:
                </span>
                <span className="text-gray-900">{application.data.power}</span>
              </div>
              {application.data.additionalInfo && (
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700 mb-1">
                    Доп. информация:
                  </span>
                  <span className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                    {application.data.additionalInfo}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Фотографии */}
        {application.images.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className={`${fluxgore.className} text-xl text-[#1068B0] mb-6`}>
              Фотографии автомобиля ({application.images.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {application.images.map((image, index) => {
                const imageUrl = getImageUrl(application, image);
                return (
                  <div
                    key={index}
                    className="relative cursor-pointer group aspect-square overflow-hidden rounded-lg bg-gray-100"
                    onClick={() => setSelectedImage(imageUrl)}
                  >
                    <Image
                      src={imageUrl}
                      alt={`Фото автомобиля ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Увеличить
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Дата подачи заявки и статус */}
        <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
          <div className={`${gothampro.className} text-sm text-gray-500`}>
            Заявка подана:{" "}
            {new Date(application.created).toLocaleString("ru-RU")}
          </div>
          {application.approved && (
            <div className="flex items-center">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Одобрено
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Кнопки действий */}
      {showActions && (
        <div className="bg-gray-50 px-8 py-4 flex gap-4 justify-end">
          <button
            onClick={() => handleReject(application.id)}
            disabled={processingId === application.id}
            className={`${fluxgore.className} bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-6 py-2 text-sm font-medium uppercase tracking-wide rounded-lg transition-colors duration-200`}
          >
            {processingId === application.id ? "Обработка..." : "Отклонить"}
          </button>
          <button
            onClick={() => handleApprove(application.id)}
            disabled={processingId === application.id}
            className={`${fluxgore.className} bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 text-sm font-medium uppercase tracking-wide rounded-lg transition-colors duration-200`}
          >
            {processingId === application.id ? "Обработка..." : "Принять"}
          </button>
        </div>
      )}
    </div>
  );

  // Форма авторизации
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
            <div className="text-center">
              <h2
                className={`${fluxgore.className} text-3xl text-gray-900 mb-2`}
              >
                Панель администратора
              </h2>
              <p className={`${gothampro.className} text-gray-600`}>
                Войдите для доступа к заявкам
              </p>
            </div>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className={`${gothampro.className} block text-sm font-medium text-gray-700 mb-2`}
                  >
                    Email администратора
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`${gothampro.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="admin@example.com"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className={`${gothampro.className} block text-sm font-medium text-gray-700 mb-2`}
                  >
                    Пароль
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={`${gothampro.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                    placeholder="••••••••"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              {authError && (
                <div
                  className={`${gothampro.className} text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg`}
                >
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className={`${fluxgore.className} w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className={`${gothampro.className} text-xl text-gray-600`}>
            Загрузка...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Заявки на Битву за Москву - Модерация</title>
      </Head>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1
              className={`${fluxgore.className} text-2xl md:text-4xl text-[#060606] uppercase`}
            >
              Заявки на Битву за Москву
            </h1>
            <button
              onClick={handleLogout}
              className={`${fluxgore.className} bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 text-sm font-medium uppercase tracking-wide transition-colors rounded-lg`}
            >
              Выйти
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("pending")}
            className={`${
              fluxgore.className
            } px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
              activeTab === "pending"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Ожидающие ({pendingApplications.length})
          </button>
          <button
            onClick={() => setActiveTab("approved")}
            className={`${
              fluxgore.className
            } px-6 py-3 font-medium text-sm transition-colors duration-200 border-b-2 ${
              activeTab === "approved"
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Одобренные ({approvedApplications.length})
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === "pending" ? (
          pendingApplications.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3
                className={`${fluxgore.className} text-xl text-gray-900 mb-2`}
              >
                Нет ожидающих заявок
              </h3>
              <p className={`${gothampro.className} text-gray-500`}>
                Все заявки обработаны
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {pendingApplications.map((application) =>
                renderApplicationCard(application, true)
              )}
            </div>
          )
        ) : approvedApplications.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className={`${fluxgore.className} text-xl text-gray-900 mb-2`}>
              Нет одобренных заявок
            </h3>
            <p className={`${gothampro.className} text-gray-500`}>
              Пока нет одобренных заявок
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {approvedApplications.map((application) =>
              renderApplicationCard(application, false)
            )}
          </div>
        )}
      </div>

      {/* Улучшенное модальное окно для увеличенного изображения */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl max-h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={selectedImage}
                alt="Увеличенное фото"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain"
                onError={() => {
                  console.error("Modal image failed to load:", selectedImage);
                  setSelectedImage(null);
                }}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black bg-opacity-70 hover:bg-opacity-90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-10"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="text-center mt-4">
              <p
                className={`${gothampro.className} text-white text-sm opacity-75`}
              >
                Нажмите вне изображения или на × чтобы закрыть
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FightApplicationsPage;

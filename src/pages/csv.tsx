import React, { useState, useEffect } from 'react';
import PocketBase from "pocketbase";
import { fluxgore, gothampro } from "@/utils/fonts";

const pb = new PocketBase("https://base.mossport.info");

interface CSVExporterProps {
  className?: string;
}

const CSVExporter: React.FC<CSVExporterProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCollection, setSelectedCollection] = useState('forms');
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);

  const exportTypes = [
    { value: '', label: 'Все типы' },
    { value: 'exhibition', label: 'Выставка' },
    { value: 'fight', label: 'Дрифт-битва' },
  ];

  const collections = [
    { value: 'forms', label: 'Формы' },
    // Add other collections if needed
  ];

  useEffect(() => {
    // Check if user is already authenticated
    if (pb.authStore.isValid) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");

    try {
      await pb.admins.authWithPassword(credentials.email, credentials.password);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Auth error:", error);
      setAuthError("Неверный email или пароль");
    }
  };

  const handleLogout = () => {
    pb.authStore.clear();
    setIsAuthenticated(false);
    setCredentials({ email: "", password: "" });
  };

  const handleExport = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Build query parameters
      const params = new URLSearchParams({
        collection: selectedCollection,
      });

      if (selectedType) {
        params.append('type', selectedType);
      }

      // Add auth token if available
      if (pb.authStore.token) {
        params.append('token', pb.authStore.token);
      }

      // Make the request
      const response = await fetch(`/api/csv?${params.toString()}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при экспорте данных');
      }

      // Get the filename from response headers
      const contentDisposition = response.headers.get('Content-Disposition');
      let filename = 'export.csv';
      
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="(.+)"/);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
      }

      // Create blob and download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
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

  // Authentication form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-xl shadow-xl p-8 space-y-8">
            <div className="text-center">
              <h2 className={`${fluxgore.className} text-3xl text-gray-900 mb-2`}>
                Экспорт данных CSV
              </h2>
              <p className={`${gothampro.className} text-gray-600`}>
                Войдите для доступа к экспорту данных
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
                <div className={`${gothampro.className} text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg`}>
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

  // Main CSV exporter interface
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <h1 className={`${fluxgore.className} text-2xl md:text-4xl text-[#060606] uppercase`}>
              Экспорт данных в CSV
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

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className={`csv-exporter ${className} bg-white border border-gray-200 rounded-xl shadow-sm p-8`}>
          <div className="csv-exporter__content space-y-6">
            <h3 className={`${fluxgore.className} text-xl text-[#1068B0] border-b border-gray-200 pb-2`}>
              Настройки экспорта
            </h3>
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-3">
                <span className="text-lg">⚠️</span>
                <span className={gothampro.className}>{error}</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="collection" className={`${gothampro.className} block text-sm font-medium text-gray-700`}>
                  Коллекция:
                </label>
                <select
                  id="collection"
                  value={selectedCollection}
                  onChange={(e) => setSelectedCollection(e.target.value)}
                  className={`${gothampro.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white`}
                  disabled={isLoading}
                >
                  {collections.map((collection) => (
                    <option key={collection.value} value={collection.value}>
                      {collection.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className={`${gothampro.className} block text-sm font-medium text-gray-700`}>
                  Тип данных:
                </label>
                <select
                  id="type"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className={`${gothampro.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white`}
                  disabled={isLoading}
                >
                  {exportTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleExport}
                disabled={isLoading}
                className={`${fluxgore.className} w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-4 rounded-lg font-medium uppercase tracking-wide transition-colors duration-200 flex items-center justify-center gap-3`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Экспорт...
                  </>
                ) : (
                  <>
                    <span className="text-lg">📥</span>
                    Экспортировать CSV
                  </>
                )}
              </button>
            </div>

            <div className={`${gothampro.className} text-sm text-gray-500 bg-gray-50 p-4 rounded-lg`}>
              <h4 className="font-medium text-gray-700 mb-2">Информация:</h4>
              <ul className="space-y-1 text-xs">
                <li>• Экспорт включает все поля в зависимости от выбранного типа</li>
                <li>• Файл сохраняется в формате CSV с поддержкой UTF-8</li>
                <li>• Имя файла содержит коллекцию, тип и дату экспорта</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSVExporter;
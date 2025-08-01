import Checkbox from "@/components/form/Checkbox";
import Fileupload from "@/components/form/Fileupload";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import { fluxgore, gothampro } from "@/utils/fonts";
import Head from "next/head";
import { useState } from "react";

import PocketBase from "pocketbase";
import { useRouter } from "next/router";

const pb = new PocketBase(
  "http://pocketbase-nkg4scskc4okw4w0cw4w88gk.176.114.67.63.sslip.io"
);

function FightFormPage() {
  const router = useRouter();
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    middleName: "",
    birthDate: "",
    citizenship: "",
    email: "",
    carBrand: "",
    carModel: "",
    engine: "",
    power: "",
    additionalInfo: "",
  });
  const [carPhotos, setCarPhotos] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Add a key to force re-render of Fileupload component
  const [fileUploadKey, setFileUploadKey] = useState(0);

  const { value: phoneValue, handleChange: handlePhoneChange } = usePhoneMask();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!checkboxValues.includes("terms")) {
      alert("Необходимо согласие на обработку персональных данных");
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataObject = {
        lastName: formData.lastName,
        firstName: formData.firstName,
        middleName: formData.middleName,
        birthDate: formData.birthDate,
        citizenship: formData.citizenship,
        phone: phoneValue,
        email: formData.email,
        carBrand: formData.carBrand,
        carModel: formData.carModel,
        engine: formData.engine,
        power: formData.power,
        additionalInfo: formData.additionalInfo,
      };

      const data = new FormData();

      // Store all form data as JSON in the data field
      data.append("data", JSON.stringify(formDataObject));
      data.append("type", "fight");

      // Add car photos to the images field (PocketBase will handle multiple files)
      carPhotos.forEach((file) => {
        data.append("images", file);
      });

      const record = await pb.collection("forms").create(data);

      console.log("Form submitted successfully:", record);
      console.log("Uploaded images:", record.images);
      alert("Форма успешно отправлена!");

      // Reset form
      setFormData({
        lastName: "",
        firstName: "",
        middleName: "",
        birthDate: "",
        citizenship: "",
        email: "",
        carBrand: "",
        carModel: "",
        engine: "",
        power: "",
        additionalInfo: "",
      });
      setCheckboxValues([]);
      setCarPhotos([]);
      // Force re-render of Fileupload component
      setFileUploadKey((prev) => prev + 1);
      handlePhoneChange(""); // Reset phone value
      router.push("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Ошибка при отправке формы. Попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center">
      <Head>
        <title>Фестиваль технических видов спорта</title>
      </Head>
      <h1
        className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative mb-8 md:mb-12`}
      >
        Регистрация на Битву за Москву
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl w-full">
        <Input
          label="Фамилия"
          placeholder="Введите вашу фамилию"
          type="text"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          required
        />

        <Input
          label="Имя"
          placeholder="Введите ваше имя"
          type="text"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          required
        />

        <Input
          label="Отчество"
          placeholder="Введите ваше отчество"
          type="text"
          value={formData.middleName}
          onChange={(e) => handleInputChange("middleName", e.target.value)}
          required
        />

        <Input
          label="Дата рождения"
          placeholder="дд.мм.гггг"
          type="date"
          value={formData.birthDate}
          onChange={(e) => handleInputChange("birthDate", e.target.value)}
          required
        />

        <Input
          label="Гражданство"
          placeholder="Введите ваше гражданство"
          type="text"
          value={formData.citizenship}
          onChange={(e) => handleInputChange("citizenship", e.target.value)}
          required
        />

        <Input
          label="Телефон"
          placeholder="+7 (___) ___-__-__"
          type="tel"
          value={phoneValue}
          onChange={(e) => handlePhoneChange(e.target.value)}
          required
        />

        <Input
          label="Почта"
          placeholder="example@email.com"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />

        <Input
          label="Марка автомобиля"
          placeholder="Введите марку автомобиля"
          type="text"
          value={formData.carBrand}
          onChange={(e) => handleInputChange("carBrand", e.target.value)}
          required
        />

        <Input
          label="Модель"
          placeholder="Введите модель автомобиля"
          type="text"
          value={formData.carModel}
          onChange={(e) => handleInputChange("carModel", e.target.value)}
          required
        />

        <Input
          label="Двигатель"
          placeholder="Введите тип двигателя"
          type="text"
          value={formData.engine}
          onChange={(e) => handleInputChange("engine", e.target.value)}
          required
        />

        <Input
          label="Мощность"
          placeholder="Введите мощность (л.с.)"
          type="text"
          value={formData.power}
          onChange={(e) => handleInputChange("power", e.target.value)}
          required
        />

        <Fileupload
          key={fileUploadKey} // Force component re-render on reset
          label="Фото автомобиля (до 3 файлов)"
          onFileSelect={(files) => setCarPhotos(files)}
          acceptedTypes={["image/*"]}
          maxFileSize={5}
          multiple={true}
          maxFiles={3}
        />

        <Textarea
          label="Дополнительная информация"
          placeholder="Дополнительная информация об автомобиле"
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
          rows={4}
          cols={50}
        />

        <Checkbox
          value={checkboxValues}
          onChange={(values) => setCheckboxValues(values)}
          options={[
            {
              value: "terms",
              label: (
                <label
                  className={`${gothampro.className} text-base text-black`}
                >
                  Согласие на{" "}
                  <a
                    href="/privacy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1068B0] underline hover:text-[#0d5a96]"
                  >
                    обработку персональных данных
                  </a>
                </label>
              ),
            },
          ]}
          required
          direction="vertical"
          name="termsAgreement"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${fluxgore.className} bg-[#1068B0] hover:bg-[#0d5a96] text-white px-9 py-4 text-base font-medium uppercase tracking-wide disabled:opacity-50 w-full`}
        >
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </div>
  );
}

export default FightFormPage;

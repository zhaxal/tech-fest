import Checkbox from "@/components/form/Checkbox";
import Fileupload from "@/components/form/Fileupload";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { usePhoneMask } from "@/hooks/usePhoneMask";
import { fluxgore, gothampro } from "@/utils/fonts";
import { useState } from "react";

import PocketBase from "pocketbase";
import Head from "next/head";
import { useRouter } from "next/router";

const pb = new PocketBase(
  "https://base.mossport.info"
);

function ExhibtionFormPage() {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    carBrand: "",
    carModel: "",
    description: "",
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
        name: formData.name,
        phone: phoneValue,
        email: formData.email,
        carBrand: formData.carBrand,
        carModel: formData.carModel,
        description: formData.description,
      };

      const data = new FormData();

      // Store all form data as JSON in the data field
      data.append("data", JSON.stringify(formDataObject));
      data.append("type", "exhibition");

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
        name: "",
        email: "",
        carBrand: "",
        carModel: "",
        description: "",
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
    <div className="relative p-6 md:p-8 lg:p-12 flex flex-col items-center">
      <Head>
        <title>Фестиваль технических видов спорта</title>
      </Head>
      <h1
        className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative mb-8 md:mb-12 uppercase`}
      >
        Регистрация на выставку
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl w-full">
        <Input
          label="Имя"
          placeholder="Введите ваше имя"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
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
          label="Интересное об автомобиле"
          placeholder="Расскажите что-то интересное о вашем автомобиле"
          value={formData.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
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

export default ExhibtionFormPage;

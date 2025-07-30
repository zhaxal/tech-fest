import Checkbox from "@/components/form/Checkbox";
import Fileupload from "@/components/form/Fileupload";
import Input from "@/components/form/Input";
import Textarea from "@/components/form/Textarea";
import { fluxgore, gothampro } from "@/utils/fonts";
import { useState } from "react";

function FightFormPage() {
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

  return (
    <div className="bg-[#ffffff] relative p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center">
      <h1
        className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative mb-8 md:mb-12`}
      >
        Регистрация на Битву за Москву
      </h1>

      <div className="space-y-6 max-w-2xl w-full">
        <Input
          label="Фамилия"
          placeholder="Введите вашу фамилию"
          type="text"
          required
        />

        <Input
          label="Имя"
          placeholder="Введите ваше имя"
          type="text"
          required
        />

        <Input
          label="Отчество"
          placeholder="Введите ваше отчество"
          type="text"
          required
        />

        <Input
          label="Дата рождения"
          placeholder="дд.мм.гггг"
          type="text"
          required
        />

        <Input
          label="Гражданство"
          placeholder="Введите ваше гражданство"
          type="text"
          required
        />

        <Input
          label="Телефон"
          placeholder="+7 (___) ___-__-__"
          type="tel"
          required
        />

        <Input
          label="Почта"
          placeholder="example@email.com"
          type="email"
          required
        />

        <Input
          label="Марка автомобиля"
          placeholder="Введите марку автомобиля"
          type="text"
          required
        />

        <Input
          label="Модель"
          placeholder="Введите модель автомобиля"
          type="text"
          required
        />

        <Input
          label="Двигатель"
          placeholder="Введите тип двигателя"
          type="text"
          required
        />

        <Input
          label="Мощность"
          placeholder="Введите мощность (л.с.)"
          type="text"
          required
        />

        <Fileupload
          label="Фото автомобиля (до 3 файлов)"
          onFileSelect={(files) => console.log("Selected files:", files)}
          acceptedTypes={["image/*"]}
          maxFileSize={5}
          multiple={true}
          maxFiles={3}
        />

        <Textarea
          label="Дополнительная информация"
          placeholder="Дополнительная информация об автомобиле"
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
                  Согласие на обработку персональных данных
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
          className={`${fluxgore.className} bg-[#1068B0] hover:bg-[#0d5a96] text-white px-9 py-4 text-base font-medium uppercase tracking-wide disabled:opacity-50 w-full`}
        >
          Отправить
        </button>
      </div>
    </div>
  );
}

export default FightFormPage;

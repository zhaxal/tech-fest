import Checkbox from "@/components/form/Checkbox";
import Fileupload from "@/components/form/Fileupload";
import Input from "@/components/form/Input";
import Radio from "@/components/form/Radio";
import Select from "@/components/form/Select";
import Textarea from "@/components/form/Textarea";
import { fluxgore, gothampro } from "@/utils/fonts";
import { useState } from "react";

function ExhibtionFormPage() {
  const [selectedOption, setSelectedOption] = useState("online");
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

  return (
    <div className="bg-[#ffffff] relative h-full">
      <h1
        className={`${fluxgore.className} text-4xl md:text-7xl text-[#060606] relative`}
      >
        Регистрация участника
      </h1>

      <Input
        label="Имя"
        placeholder="Введите ваше имя"
        type="text"
        required
        className="mt-4"
      />

      <Select
        label="Выберите тип участия"
        options={[
          { value: "speaker", label: "Спикер" },
          { value: "attendee", label: "Посетитель" },
          { value: "sponsor", label: "Спонсор" },
        ]}
        required
        className="mt-4"
      />

      <Radio
        value={selectedOption}
        onChange={setSelectedOption}
        label="Выберите формат участия"
        options={[
          { value: "online", label: "Онлайн" },
          { value: "offline", label: "Офлайн" },
          { value: "hybrid", label: "Гибридный" },
        ]}
        required
        className="mt-4"
        direction="vertical"
        name="participationFormat"
      />

      <Textarea
        label="Дополнительная информация"
        placeholder="Введите дополнительную информацию"
        rows={4}
        cols={50}
        className="mt-4"
      />

      <Checkbox
        value={checkboxValues}
        onChange={(values) => setCheckboxValues(values)}
        options={[
          {
            value: "terms",
            label: (
              <label className={`${gothampro.className} text-base text-black`}>
                Согласие на обработку персональных данных
              </label>
            ),
          },
        ]}
        required
        className="mt-4"
        direction="vertical"
        name="termsAgreement"
      />

      <Fileupload
        label="Загрузите файлы"
        onFileSelect={(files) => console.log("Selected files:", files)}
        acceptedTypes={["image/*", "application/pdf"]}
        maxFileSize={5}
        multiple={true}
      />
    </div>
  );
}

export default ExhibtionFormPage;

import { gothampro } from "@/utils/fonts";
import React, { useState, useRef, DragEvent, ChangeEvent } from "react";

interface FileUploadProps {
  label?: string;
  onFileSelect?: (files: File[]) => void;
  acceptedTypes?: string[];
  maxFileSize?: number; // in MB
  multiple?: boolean;
  disabled?: boolean;
  placeholder?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

function Fileupload({
  label,
  onFileSelect,
  acceptedTypes = ["image/*", "application/pdf", ".doc", ".docx"],
  maxFileSize = 10,
  multiple = false,
  disabled = false,
  placeholder = "Файл в формате jpg или png до N мб",
  id,
  name,
  required = false,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFiles = (
    files: File[]
  ): { valid: File[]; errors: string[] } => {
    const validFiles: File[] = [];
    const fileErrors: string[] = [];

    files.forEach((file) => {
      // Check file size
      if (file.size > maxFileSize * 1024 * 1024) {
        fileErrors.push(`${file.name} is too large (max ${maxFileSize}MB)`);
        return;
      }

      // Check file type
      const isValidType = acceptedTypes.some((type) => {
        if (type.includes("*")) {
          return file.type.startsWith(type.split("*")[0]);
        }
        return file.type === type || file.name.toLowerCase().endsWith(type);
      });

      if (!isValidType) {
        fileErrors.push(`${file.name} is not a supported file type`);
        return;
      }

      validFiles.push(file);
    });

    return { valid: validFiles, errors: fileErrors };
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const { valid, errors } = validateFiles(fileArray);

    setErrors(errors);

    if (valid.length > 0) {
      const newFiles = multiple ? [...selectedFiles, ...valid] : valid;
      setSelectedFiles(newFiles);
      onFileSelect?.(newFiles);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (disabled) return;

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFileSelect?.(updatedFiles);
  };

  const openFileDialog = () => {
    if (!disabled && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id || name}
          className={`${gothampro.className} text-base font-bold text-black`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Upload Area */}
      <div
        className={`
          flex items-center border rounded-md overflow-hidden transition-colors
          ${dragActive ? "border-blue-400 bg-blue-50" : "border-gray-300"}
          ${
            disabled ? "opacity-50 cursor-not-allowed" : "hover:border-blue-400"
          }
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          multiple={multiple}
          accept={acceptedTypes.join(",")}
          onChange={handleInputChange}
          disabled={disabled}
          id={id}
          name={name}
        />

        {/* Upload Button */}
        <button
          type="button"
          onClick={openFileDialog}
          disabled={disabled}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium uppercase tracking-wide disabled:opacity-50"
        >
          ПРИКРЕПИТЬ
        </button>

        {/* File Display Area */}
        <div className="flex-1 px-3 py-2 min-h-[40px] flex items-center">
          {selectedFiles.length > 0 ? (
            <div className="flex items-center justify-between w-full">
              <span className="text-sm text-gray-900 truncate">
                {selectedFiles[0].name}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(0);
                }}
                className="ml-2 p-1 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <span className="text-sm text-gray-500">
              {placeholder.replace("N", maxFileSize.toString())}
            </span>
          )}
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mt-2 text-sm text-red-600">
          {errors.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </div>
      )}

      {/* Additional Files (if multiple) */}
      {multiple && selectedFiles.length > 1 && (
        <div className="mt-2 space-y-1">
          {selectedFiles.slice(1).map((file, index) => (
            <div
              key={index + 1}
              className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm"
            >
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={() => removeFile(index + 1)}
                className="ml-2 p-1 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-3 h-3"
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Fileupload;

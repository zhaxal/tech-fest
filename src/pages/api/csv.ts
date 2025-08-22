/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://base.mossport.info");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get query parameters
    const { collection = "forms", type, token } = req.query;

    // Authenticate if token is provided
    if (token && typeof token === "string") {
      try {
        pb.authStore.save(token, null);
      } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
      }
    }

    // Build filter based on type
    let filter = "";
    if (type && typeof type === "string") {
      filter = `type = "${type}"`;
    }

    // Fetch records from PocketBase
    const records = await pb.collection(collection as string).getFullList({
      filter: filter || undefined,
      sort: "-created",
    });

    if (records.length === 0) {
      return res
        .status(200)
        .setHeader("Content-Type", "text/csv")
        .send("No data found");
    }

    // Convert to CSV
    const csvData = convertToCSV(records, type as string);

    // Set headers for CSV download
    const filename = `${collection}_${type || "all"}_${
      new Date().toISOString().split("T")[0]
    }.csv`;
    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);

    // Add BOM for proper UTF-8 encoding in Excel
    res.send("\uFEFF" + csvData);
  } catch (error) {
    console.error("CSV export error:", error);
    res.status(500).json({
      message: "Failed to export data",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}

function convertToCSV(records: any[], type?: string): string {
  if (records.length === 0) return "";

  // Define headers based on type
  let headers: string[] = [];

  if (type === "exhibition") {
    headers = [
      "ID",
      "Дата создания",
      "Статус",
      "Одобрено",
      "Имя",
      "Телефон",
      "Email",
      "Марка автомобиля",
      "Модель автомобиля",
      "Описание",
      "Количество фотографий",
    ];
  } else if (type === "fight") {
    headers = [
      "ID",
      "Дата создания",
      "Статус",
      "Одобрено",
      "Фамилия",
      "Имя",
      "Отчество",
      "Дата рождения",
      "Гражданство",
      "Телефон",
      "Email",
      "Марка автомобиля",
      "Модель автомобиля",
      "Двигатель",
      "Мощность",
      "Дополнительная информация",
      "Количество фотографий",
    ];
  } else {
    // Generic headers for other types
    headers = ["ID", "Дата создания", "Тип", "Статус", "Одобрено", "Данные"];
  }

  // Helper function to properly escape CSV fields
  const escapeCSVField = (field: any): string => {
    if (field === null || field === undefined) {
      return "";
    }

    let str = String(field);

    // Remove any control characters and normalize whitespace
    str = str.replace(/[\r\n\t]/g, " ").replace(/\s+/g, " ").trim();

    // If field contains comma, quote, or starts/ends with whitespace, wrap in quotes
    if (
      str.includes(",") ||
      str.includes('"') ||
      str.includes("\n") ||
      str !== str.trim()
    ) {
      // Escape existing quotes by doubling them
      str = str.replace(/"/g, '""');
      return `"${str}"`;
    }

    return str;
  };

  // Create CSV content
  const csvRows: string[] = [];

  // Add header row
  csvRows.push(headers.map((header) => escapeCSVField(header)).join(","));

  // Add data rows
  records.forEach((record) => {
    const data =
      typeof record.data === "string" ? JSON.parse(record.data) : record.data;

    let row: any[] = [];

    if (type === "exhibition") {
      row = [
        record.id || "",
        new Date(record.created).toLocaleDateString("ru-RU") +
          " " +
          new Date(record.created).toLocaleTimeString("ru-RU"),
        record.status || "pending",
        record.approved ? "Да" : "Нет",
        data?.name || "",
        data?.phone || "",
        data?.email || "",
        data?.carBrand || "",
        data?.carModel || "",
        data?.description || "",
        (record.images?.length || 0),
      ];
    } else if (type === "fight") {
      row = [
        record.id || "",
        new Date(record.created).toLocaleDateString("ru-RU") +
          " " +
          new Date(record.created).toLocaleTimeString("ru-RU"),
        record.status || "pending",
        record.approved ? "Да" : "Нет",
        data?.lastName || "",
        data?.firstName || "",
        data?.middleName || "",
        data?.birthDate || "",
        data?.citizenship || "",
        data?.phone || "",
        data?.email || "",
        data?.carBrand || "",
        data?.carModel || "",
        data?.engine || "",
        data?.power || "",
        data?.additionalInfo || "",
        (record.images?.length || 0),
      ];
    } else {
      // For generic data, flatten the JSON properly
      const flattenedData = data
        ? Object.entries(data)
            .map(([key, value]) => `${key}: ${value}`)
            .join("; ")
        : "";

      row = [
        record.id || "",
        new Date(record.created).toLocaleDateString("ru-RU") +
          " " +
          new Date(record.created).toLocaleTimeString("ru-RU"),
        record.type || "",
        record.status || "pending",
        record.approved ? "Да" : "Нет",
        flattenedData,
      ];
    }

    // Escape and format each field properly
    const escapedRow = row.map((field) => escapeCSVField(field));
    csvRows.push(escapedRow.join(","));
  });

  return csvRows.join("\r\n");
}

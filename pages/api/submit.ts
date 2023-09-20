import { formSchema } from "@/components/forms/WorkInquiries";
import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const body = req.body as z.infer<typeof formSchema>;

  try {
    // const response = await sendToGoogleSheet(body);
    const response = await sendToZohoForms(body);
    return res.status(201).json({
      data: response,
    });
  } catch (e) {
    // @ts-expect-error: e is unknown
    return res.status(e.code).send({ message: e.message });
  }
}

const sendToGoogleSheet = async (body: z.infer<typeof formSchema>) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: [
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
      "https://www.googleapis.com/auth/spreadsheets",
    ],
  });

  const sheets = google.sheets({
    auth,
    version: "v4",
  });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "A1:F1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          body["first-name"],
          body["last-name"],
          body.email,
          body.company,
          body.message,
          body.consent,
        ],
      ],
    },
  });
  return response;
};

const sendToZohoForms = async (body: z.infer<typeof formSchema>) => {
  const formData = new FormData();
  formData.append("Name_First", body["first-name"]);
  formData.append("Name_Last", body["last-name"]);
  formData.append("Email", body.email);
  formData.append("SingleLine", body.company);
  formData.append("MultiLine", body.message || "");

  return fetch(
    "https://forms.zohopublic.eu/admin338/form/Signup/formperma/X-kDgUwoeWmj1rjr51EX8x_8znD0wtMlFcRzxd2ae3I/htmlRecords/submit",
    {
      method: "POST",
      body: formData,
    }
  );
};

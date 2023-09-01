import { NextRequest, NextResponse } from "next/server";

export async function POST(Request: NextRequest) {
  try {
    const data = await Request.json();
    const { name, email, message,Subject } = data;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        Subject: Subject,
        access_key: process.env.WEB3FORMS_TOKEN
        ,
      }),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to submit the form. Status code: ${response.status}`
      );
    }

    const responseData = await response.json();
    return new NextResponse(
      JSON.stringify("Thank you for contacting us. We will get back to you soon."),
      { status: 200, headers: { "Content-Type": "text/plain" } }
    );
  } catch (error: any) {
    return new NextResponse(`An error occurred: ${error.message}`, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}

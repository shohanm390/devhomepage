import connectMongodb from "@/libs/mongodb";
import formModel from "@/models/insert";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, url, desc } = await request.json();
  await connectMongodb();
  await formModel.create({ name, url, desc });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  try {
    await connectMongodb();
    const users = await formModel.find(); // Assuming formModel is your model
    const usersJSON = JSON.stringify(users); // Convert users to JSON string
    return new NextResponse(usersJSON, {
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return new NextResponse.error("Internal Server Error", { status: 500 });
  }
}

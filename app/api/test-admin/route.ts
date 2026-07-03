import { adminAuth } from "@/firebase/admin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await adminAuth.listUsers(1);

    return NextResponse.json({
      success: true,
      message: "Firebase Admin initialized successfully.",
      userCount: users.users.length,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: "Firebase Admin failed.",
      },
      { status: 500 }
    );
  }
}
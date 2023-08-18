
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 1: "Hi" });
}

import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.nextUrl);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  return NextResponse.json({
    page,
    limit,
  });
}
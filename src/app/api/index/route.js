import { NextResponse } from "next/server";

export const GET = async (request) => {
  return new NextResponse("Api running...", { status: 200 });
};

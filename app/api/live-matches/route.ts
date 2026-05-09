import { NextResponse } from "next/server";
import { getLiveMatches } from "@/lib/api/football";

export async function GET() {
  const matches = await getLiveMatches();
  return NextResponse.json(matches);
}

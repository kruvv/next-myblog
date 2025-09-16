import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
// import { redirect } from "next/navigation";

export const dynamic = "force-static";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  const headerList = headers();
  const type = headerList.get("Content-Type");

  const cookiesList = cookies();
  const someCookie = cookiesList.get("SomeCookie")?.value;

  // There Some logic
  // redirect("/blog");

  return NextResponse.json({ id, type, someCookie });
}

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function POST() {
  const response = NextResponse.redirect("/login");
  response.cookies.set("next-auth.session-token", "", { maxAge: 0 });
  return response;
}

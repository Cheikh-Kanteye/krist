import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, password } = await req.json();

    //! validate email and password
    console.log({ first_name, last_name, email, password });

    const hashedPassword = await hash(password, 10);

    const response = await sql`
    INSERT INTO users (first_name, last_name, email, password)
    VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword})
    `;

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log({ error });
    return NextResponse.json({ message: "failed" });
  }
}

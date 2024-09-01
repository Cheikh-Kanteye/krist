import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}
        `;

        const user = response.rows[0];

        const correctPwd = await compare(
          credentials?.password || "",
          user.password
        );

        console.log({ correctPwd });

        if (correctPwd) {
          return {
            id: user.id,
            email: user.email,
            password: user.password,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };

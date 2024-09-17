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
  // debug: process.env.NODE_ENV === "development",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          console.log({ credentials });

          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password");
          }

          const response = await sql`
            SELECT * FROM users WHERE email=${credentials.email}
          `;

          const user = response.rows[0];

          if (!user) {
            throw new Error("No user found");
          }

          const correctPwd = await compare(credentials.password, user.password);

          console.log({ correctPwd });

          if (correctPwd) {
            return {
              id: user.id,
              email: user.email,
            };
          }

          return null;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };

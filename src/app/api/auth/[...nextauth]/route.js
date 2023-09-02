import config from "@utils/secret/config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connection } from "@utils/mongoDB/DBConnection";
import userModel from "@utils/mongoDB/models/userModel";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connection();

        try {
          const user = await userModel.findOne({ email: credentials.email });
          if (user) {
            // checked password
            const isPassword = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPassword) {
              return user;
            } else {
              throw new Error("Wrong credentials, try again!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };

import User from "@/utils/mongoDB/models/userModel";
import { connection } from "@/utils/mongoDB/DBConnection";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  return new NextResponse("Users running...", { status: 200 });
};

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connection();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("From Server: " + err.message, {
      status: 500,
    });
  }
};

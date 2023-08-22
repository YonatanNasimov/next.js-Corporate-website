import { connection } from "@utils/mongoDB/DBConnection";
import UserModel from "@utils/mongoDB/models/userModel";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connection();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new UserModel({
    name,
    email,
    password: hashedPassword,
    // phone,
    imgUrl
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
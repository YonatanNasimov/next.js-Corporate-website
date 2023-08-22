import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import userModel from "@utils/mongoDB/models/userModel";
import bcrypt from "bcryptjs";

export const GET = async (request) => {
  try {
    await connection();
    const users = await userModel.find();
    return new NextResponse(JSON.stringify(users), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const POST = async (request) => {
  const { name, email, password, phone, imgUrl } = await request.json();

  console.log(request.json());

  await connection();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    name,
    email,
    password: hashedPassword,
    phone,
    imgUrl,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created!", {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("From Server: " + err.message, {
      status: 500,
    });
  }
};

import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import userModel from "@utils/mongoDB/models/userModel";
import bcrypt from "bcryptjs";
import { validUser } from "@utils/mongoDB/validation/validUser";

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
  const { username, email, password, phone, imgUrl } = await request.json();

  const validBody = validUser( username, email, password, phone, imgUrl );

  if (validBody.error) {
    return new NextResponse(validBody.error.details, {
      status: 400,
    });
  }

  await connection();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    username,
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

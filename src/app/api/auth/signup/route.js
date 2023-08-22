import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import usersModel from "@utils/mongoDB/models/userModel";

export const GET = async (request) => {
  try {
    await connection();
    const users = await usersModel.find();
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

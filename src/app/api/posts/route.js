import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import postsModel from "@utils/mongoDB/models/postModel";

export const GET = async (request) => {
  try {
    await connection();
    const posts = await postsModel.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

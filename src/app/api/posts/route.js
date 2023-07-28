import { NextResponse } from "next/server";
import { connection } from "@/MongoDB/DBConnection";
import postsModel from "@/MongoDB/models/postModel";

export const GET = async (request) => {
  try {
    await connection();
    const posts = await postsModel.find();
    return new NextResponse(posts, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

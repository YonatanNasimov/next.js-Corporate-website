import { NextResponse } from "next/server";
import connect from "@/MongoDB/DBConnection";
import PostModel from "@/MongoDB/models/postModel";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await PostModel.find();
    return new NextResponse(posts, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("There is an error connecting to MongoDB" + err, {
      status: 500,
    });
  }
};

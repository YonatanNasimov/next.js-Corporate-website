import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import postsModel from "@utils/mongoDB/models/postModel";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connection();

    const posts = await postsModel.find(username && { user: username });

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

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new postsModel(body);

  try {
    await connection();

    await newPost.save();

    return new NextResponse("Post has been created", {
      status: 201,
    });
  } catch (err) {
    console.log(err);

    return new NextResponse(err, {
      status: 500,
    });
  }
};

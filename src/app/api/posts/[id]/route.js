import { NextResponse } from "next/server";
import { connection } from "@utils/mongoDB/DBConnection";
import postsModel from "@utils/mongoDB/models/postModel";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connection();
    const post = await postsModel.findById(id);
    return new NextResponse(JSON.stringify(post), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  const { id } = params;
  try {
    await connection();
    await postsModel.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(err, {
      status: 500,
    });
  }
};

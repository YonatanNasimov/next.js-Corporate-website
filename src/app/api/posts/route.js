import { NextResponse } from "next/server";
import { connection } from "@/MongoDB/DBConnection";
// import connect from "@/MongoDB/DBConnection";
// import PostModel from "@/MongoDB/models/postModel";
import Customer from "@/MongoDB/models/testModel";
// import mongoose from 'mongoose';

// export const GET = async (request) => {
//   try {
//     await connect();
//     const posts = await PostModel.find();
//     return new NextResponse(posts, {
//       status: 200,
//     });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse("There is an error connecting to MongoDB" + err, {
//       status: 500,
//     });
//   }
// };

export const GET = async (request) => {
  try {
    await connection();
    const customers = await Customer.find();
    return new NextResponse(customers, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("There is an error connecting to MongoDB" + err, {
      status: 500,
    });
  }
};

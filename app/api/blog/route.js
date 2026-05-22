import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/BlogModel";

const LoadDB = async () => {
    await connectDB();
}

LoadDB();

// API Endpoint to get all blogs
export async function GET(request) {

    const blogs = await BlogModel.find({});

    return NextResponse.json({
        blogs
    });

}

// API Endpoint For Uploading Blogs

export async function POST(request) {

    try {

        const formData = await request.formData();

        const timestamp = Date.now();

        const image = formData.get("image");

        if (!image) {
            return NextResponse.json({
                success: false,
                msg: "No Image Selected"
            });
        }

        const imageByteData = await image.arrayBuffer();

        const buffer = Buffer.from(imageByteData);

        const path = `./public/${timestamp}_${image.name}`;

        await writeFile(path, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: `${formData.get("title")}`,
            description: `${formData.get("description")}`,
            category: `${formData.get("category")}`,
            author: `${formData.get("author")}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get("authorImg")}`
        }

        await BlogModel.create(blogData);

        console.log("Blog Saved");

        return NextResponse.json({
            success: true,
            msg: "Blog Added"
        });

    } catch (error) {

        console.log(error);

        return NextResponse.json({
            success: false,
            msg: error.message
        });

    }

}
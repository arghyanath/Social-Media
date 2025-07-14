import { v2 as cloudinary } from "cloudinary"
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";


cloudinary.config({
    cloud_name: 'doi3fcudg',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryResult {
    public_id: string;
    url: string
}


export async function POST(request: NextRequest) {

    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;
        if (!file) {
            return NextResponse.json({ error: "file not found" },
                { status: 400 }
            )
        }

        const byte = await file.arrayBuffer();
        const buffer = Buffer.from(byte);

        const result = await new Promise<CloudinaryResult>(
            (resolve, reject) => {
                const upload_stream = cloudinary.uploader.upload_stream(
                    { folder: "vistagram-cloudinary" },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result as CloudinaryResult)
                    }
                )

                upload_stream.end(buffer)

            }

        )

        return NextResponse.json({ url: result.url })




    } catch (error) {

        console.log(error);
        return NextResponse.json({ error: "image not uploaded" },
            { status: 500 }
        )


    }

}

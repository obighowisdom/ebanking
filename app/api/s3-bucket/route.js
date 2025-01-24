import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY
    }
})

// Ensure environment variables are available
if (!process.env.AWS_REGION || !process.env.AWS_ACCESS_KEY || !process.env.AWS_SECRET_KEY || !process.env.AWS_BUCKET_NAME) {
    console.error("Missing AWS environment variables.");
}

async function uploadFileToS3(file, fileName, contentType) {
    const fileBuffer = file
    console.log(`Uploading file: ${fileName}`)

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}-${Date.now()}`,
        Body: fileBuffer,
        ContentType: contentType
    }

    const command = new PutObjectCommand(params);
    try {
        await s3Client.send(command);
        console.log(`File uploaded successfully: ${fileName}`);
        return fileName;
    } catch (error) {
        console.error("Error uploading to S3:", error);
        throw new Error("Failed to upload file to S3");
    }
}

export async function POST(request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file')

        if (!file) {
            return NextResponse.json({ error: "File is required." }, { status: 400 })
        }

        // Convert the file to buffer
        const buffer = Buffer.from(await file.arrayBuffer())
        const contentType = file.type || "application/octet-stream"; // Default content type if unknown
        const fileName = await uploadFileToS3(buffer, file.name, contentType)

        return NextResponse.json({ success: true, fileName })

    } catch (error) {
        console.error("Error in POST request:", error);
        return NextResponse.json({ error: 'Error uploading file' }, { status: 500 })
    }
}

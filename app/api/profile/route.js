import cloudinary from "../../../lib/cloudinary";
import multer from "multer";
import { createRouter } from 'next-connect';

// Configure multer to store the image temporarily
const upload = multer({ dest: "/tmp" });

const handler = createRouter();

// Use multer as middleware to handle the file upload
handler.use(upload.single("image"));  // "image" is the field name from the frontend form

handler.post(async (req, res) => {
    try {
        // Upload the image to Cloudinary
        const result = await cloudinary.v2.uploader.upload(req.file.path);

        // The result contains information about the uploaded file
        const imageUrl = result.secure_url;

        // Respond with the image URL (or save it to your database if needed)
        return res.status(200).json({ imageUrl });
    } catch (error) {
        console.error("Error uploading image:", error);
        return res.status(500).json({ message: "Error uploading image" });
    }
});

export default handler;

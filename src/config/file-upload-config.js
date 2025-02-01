
import multer from 'multer';
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import { v2 as cloudinary } from 'cloudinary';

// Middleware to handle file upload
export const uploadMiddleware = upload.single('image');

export const uploadImageToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ folder: 'postImg' }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.url);
            }
        })
        stream.end(buffer);
    });
};



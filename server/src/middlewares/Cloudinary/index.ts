import cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (image:string) => new Promise((resolve, reject) => {
  cloudinary.v2.uploader.upload(image, (err: any, result: any) => {
    if (err) {
      reject(err);
    } else {
      resolve(result.secure_url);
    }
  });
});

export default uploadToCloudinary;

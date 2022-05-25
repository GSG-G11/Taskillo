import cloudinary from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const { REACT_APP_CLOUDINARY_NAME, REACT_APP_CLOUDINARY_API_KEY, REACT_APP_CLOUDINARY_API_SECRET } = process.env;

cloudinary.v2.config({
  cloud_name: REACT_APP_CLOUDINARY_NAME,
  api_key: REACT_APP_CLOUDINARY_API_KEY,
  api_secret: REACT_APP_CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (image) => {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(image, (err, result) => {
      if (err) {
        reject(Error('Cloudinary Error'));
      } else {
        resolve(result.secure_url);
      }
    });
  });
};

export default uploadToCloudinary;

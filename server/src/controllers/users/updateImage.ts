import { updateImageQuery } from '../../database';
import { uploadToCloudinary } from '../../utils';

const updateImage = async (req: any, res: any) => {
  const { id } = req.userInformation;
  const { image } = req.body;
  const secureUrl = await uploadToCloudinary(image);
  const { rows } = await updateImageQuery({ id, image: secureUrl });
  res.status(200).json({
    message: 'Image updated',
    data: rows,
  });
};

export default updateImage;

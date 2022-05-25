
const updateImage = async (req: any, res: any) => {
  const { id: userId } = req.userInformation;
  const { image } = req.body;
  console.log(userId);

  
};

export default updateImage;

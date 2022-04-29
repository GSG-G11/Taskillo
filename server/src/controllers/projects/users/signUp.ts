import { singupScheama } from '../../../utils';

const signup = async (req: Request, res: Response) => {
  try {
    const { username, password, code } = req.body;
    singupScheama.validateAsync(req.body);
    
  } catch (error) {}
};
export default signup;

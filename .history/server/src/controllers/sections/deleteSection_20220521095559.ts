import { Request, Response } from 'express';
import { deleteSectionQuery, getOneSectionQuery } from '../../database';

const deleteSection = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { rows, rowCount } = await getOneSectionQuery(+id);
  if (rowCount) {
    await deleteSectionQuery(+id);
    res.status(200).json({
      data: 
      message: 'Section deleted successfully',
    });
  } else {
    res.status(204).json({
      message: 'Section not found',
    });
  }
};

export default deleteSection;

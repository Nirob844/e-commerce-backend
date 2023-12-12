import { Catalog } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SellerService } from './seller.service';

const createCatalog = catchAsync(async (req: Request, res: Response) => {
  const result = await SellerService.createCatalog(req.body);
  sendResponse<Catalog>(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Catalog Created!',
    data: result,
  });
});

export const SellerController = {
  createCatalog,
};

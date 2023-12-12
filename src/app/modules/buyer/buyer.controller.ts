import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BuyerService } from './buyer.service';

const getAllSellers = catchAsync(async (req: Request, res: Response) => {
  const result = await BuyerService.getAllSellers();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'buyers data fetched!!',
    data: result,
  });
});

const getCatalogBySellerId = catchAsync(async (req: Request, res: Response) => {
  const { seller_id } = req.params;
  const result = await BuyerService.getCatalogBySellerId(seller_id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'catalog by seller id data fetched!!',
    data: result,
  });
});

export const BuyerController = {
  getAllSellers,
  getCatalogBySellerId,
};

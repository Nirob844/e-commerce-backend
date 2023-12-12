import { Catalog, Product } from '@prisma/client';
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

const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await SellerService.createProduct(req.body);
  sendResponse<Product>(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Product Created!',
    data: result,
  });
});

const getAllCatalogs = catchAsync(async (req: Request, res: Response) => {
  const result = await SellerService.getAllCatalogs();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Catalogs fetched!',
    data: result,
  });
});

const getCatalogById = catchAsync(async (req: Request, res: Response) => {
  const result = await SellerService.getCatalogById(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Catalog data fetched!',
    data: result,
  });
});

const updateCatalog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SellerService.updateCatalog(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Catalog updated successfully',
    data: result,
  });
});

const deleteCatalog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SellerService.deleteCatalog(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Catalog deleted successfully',
    data: result,
  });
});

export const SellerController = {
  createCatalog,
  createProduct,
  getAllCatalogs,
  getCatalogById,
  updateCatalog,
  deleteCatalog,
};

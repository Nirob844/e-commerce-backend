import { Catalog, Product } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const createCatalog = async (data: Catalog): Promise<Catalog> => {
  const catalog = await prisma.catalog.findFirst({
    where: {
      sellerId: data.sellerId,
    },
  });
  if (catalog) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'One seller can have one catalog, this seller already a catalog exists'
    );
  }
  const result = await prisma.catalog.create({
    data,
  });

  return result;
};

const getAllCatalogs = async (): Promise<Catalog[]> => {
  const result = await prisma.catalog.findMany({
    include: {
      seller: true,
      products: true,
    },
  });
  return result;
};

const getCatalogById = async (id: string): Promise<Catalog | null> => {
  const result = await prisma.catalog.findUnique({
    where: {
      id,
    },
    include: {
      seller: true,
      products: true,
    },
  });

  return result;
};

const updateCatalog = async (
  id: string,
  payload: Partial<Catalog>
): Promise<Catalog> => {
  const result = await prisma.catalog.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteCatalog = async (id: string): Promise<Catalog> => {
  const result = await prisma.catalog.delete({
    where: {
      id,
    },
  });
  return result;
};

const createProduct = async (data: Product): Promise<Product> => {
  const result = await prisma.product.create({
    data,
  });

  return result;
};

const getAllProducts = async (): Promise<Product[]> => {
  const result = await prisma.product.findMany({
    include: {
      catalog: true,
      order: true,
    },
  });
  return result;
};

export const SellerService = {
  createCatalog,
  getAllCatalogs,
  getCatalogById,
  updateCatalog,
  deleteCatalog,
  createProduct,
  getAllProducts,
};

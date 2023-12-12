import { Catalog } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createCatalog = async (data: Catalog): Promise<Catalog> => {
  const result = await prisma.catalog.create({
    data,
  });

  return result;
};

export const SellerService = {
  createCatalog,
};

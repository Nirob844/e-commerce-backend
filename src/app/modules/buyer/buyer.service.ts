import { Catalog, User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllSellers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({
    where: {
      type: 'sellers',
    },
  });
  return result;
};

const getCatalogBySellerId = async (
  sellerId: string
): Promise<Catalog | null> => {
  const result = await prisma.catalog.findUnique({
    where: {
      sellerId: sellerId,
    },
  });

  return result;
};

export const BuyerService = {
  getAllSellers,
  getCatalogBySellerId,
};

import express from 'express';
import { BuyerController } from './buyer.controller';

const router = express.Router();

router.get('/list-of-sellers', BuyerController.getAllSellers);
router.get('/seller-catalog/:seller_id', BuyerController.getCatalogBySellerId);

export const BuyerRoutes = router;

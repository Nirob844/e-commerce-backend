import express from 'express';
import { SellerController } from './seller.controller';

const router = express.Router();

router.post('/create-catalog', SellerController.createCatalog);

export const SellerRoutes = router;

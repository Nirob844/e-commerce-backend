import express from 'express';
import { SellerController } from './seller.controller';

const router = express.Router();

router.post('/create-catalog', SellerController.createCatalog);
router.post('/create-product', SellerController.createProduct);
router.get('/catalog', SellerController.getAllCatalogs);
router.get('/product', SellerController.getAllProduct);
router.get('/:id', SellerController.getCatalogById);
router.patch('/:id', SellerController.updateCatalog);
router.delete('/:id', SellerController.deleteCatalog);

export const SellerRoutes = router;

import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { SellerRoutes } from '../modules/seller/seller.routes';
import { UserRoutes } from '../modules/user/user.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/seller',
    route: SellerRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

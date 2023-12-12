import express from 'express';

import { UsersController } from './user.controller';

const router = express.Router();

router.post('/', UsersController.insertIntoDB);
router.get('/', UsersController.getAllFromDB);
router.get('/:id', UsersController.getDataById);
router.patch('/:id', UsersController.updateOneInDB);
router.delete('/:id', UsersController.deleteByIdFromDB);

export const UserRoutes = router;

import { Router } from 'express';
import { userController } from './user.controller';

const userRouter = Router();

userRouter.get('/:userId', userController.getSingleUser);
userRouter.get('/', userController.getUser);
userRouter.post('/create-user', userController.createUser);
userRouter.put('/:userId', userController.updateUser);
userRouter.delete('/:userId', userController.deleteUser);

export default userRouter;

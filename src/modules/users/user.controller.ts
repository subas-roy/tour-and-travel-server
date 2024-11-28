// req and res manage

import { Request, Response } from 'express';
import User from './user.model';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await userService.createUser(payload);

    res.json({
      status: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await User.create(payload);

  res.json({
    message: 'User created successfully',
    data: result,
  });
};

export const userController = {
  createUser,
  getUser,
};

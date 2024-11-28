// logical part

import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const getUser = async () => {
  const result = await User.find();
  return result;
};

export const userService = {
  createUser,
  getUser,
};

import { createParamDecorator } from '@nestjs/common';
import { SECRET } from '../../config';
import * as jwt from 'jsonwebtoken';
import { throwError } from '../throw-error.utils';

export const User = createParamDecorator((data: string, req) => {
  // if route is protected, there is a user set in auth.middleware
  if (!!req.user) {
    return !!data ? req.user[data] : req.user;
  }

  // in case a route is not protected, we still want to get the optional auth user from jwt
  const token = req.headers?.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, SECRET);
      return !!data ? decoded[data] : decoded.user;
    } catch (error) {
      if (error.name === 'TokenExpiredError') throwError({ user: 'Invalid Token' }, 'Token Expired', 401);
      throwError({ user: 'Invalid Token' }, 'Invalid Token', 401);
    }
  }
  return null;
});

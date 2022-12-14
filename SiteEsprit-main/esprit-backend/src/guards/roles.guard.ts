import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // extract both controller and method metadata at once, and combine/ merge them
    let roles = this.reflector.getAllAndMerge<string[]>('roles', [context.getHandler(), context.getClass()]);
    // after merge roles array may have undefined values
    roles = roles.filter(Boolean); // remove all falsy values

    if (!roles.length) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return user?.roles?.some(role => roles.includes(role));
  }
}

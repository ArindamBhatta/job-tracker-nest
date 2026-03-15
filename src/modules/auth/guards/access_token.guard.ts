import { AuthGuard } from '@nestjs/passport';

export class AtGuard extends AuthGuard('jwt') {
  //Run Passport authentication using strategy "jwt"
  constructor() {
    super();
  }
}

/* 
Request
   ↓
authMiddleware
   ↓
req.user = payload
   ↓
Route handler runs


2. NestJS does the same thing (but structured)

Guard → decides if authentication should run
Strategy → contains authentication logic
*/

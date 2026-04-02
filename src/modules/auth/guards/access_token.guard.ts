import { AuthGuard } from '@nestjs/passport';
// AtGuard runs, which triggers jwt strategy
//Interceptors before handler
export class AtGuard extends AuthGuard('jwt') {
   //Run Passport authentication using strategy "jwt"
   constructor() {
      super();
   }
}



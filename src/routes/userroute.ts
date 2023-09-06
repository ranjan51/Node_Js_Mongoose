import { Router } from 'express';
import { register } from '../modules/user/user.controller';
import { Remove,Update } from '../modules/user/user.controller';

const userRoute = Router();

userRoute.post('/register', register);    
userRoute.delete('/delete/:id', Remove);    
userRoute.patch('/update/:id', Update);    

export default userRoute;


// userroute.ts




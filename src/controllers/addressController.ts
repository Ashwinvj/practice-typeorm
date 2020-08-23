import { Router, NextFunction, Response } from "express";
import { body, validationResult } from "express-validator/check";

import {userAddress, UserService} from "../services/users.service"

 
const addressRouter: Router = Router();


addressRouter.route('/')
  .post(
      [
          body('street').isLength({ min : 10}),
          body('street').isLength({ min : 10})
      ],
      async (req: any, res: any, next: any)  => {

        const validationErrors = validationResult(req);

        // if(validationResult.isEmpty()){
        //     // const userService
        // }
        //   return;
      }
  )

/*addressRouter.route('/')
  .post(
    [
      body('email').isEmail(),
      body('password').isLength({ min: 1 }),
    ],
    async (req: Request, res: Response, next: NextFunction) => {

      const validationErrors = validationResult(req);
      if (validationErrors.isEmpty()) { // no error
        const userService = new UserService();
        let user = await userService.getByEmail(req.body.email);
        if (!user) {
          res.status(HttpStatus.BAD_REQUEST).json({
            success: false,
            message: `${errors.emailNotFound}`
          });
          return;
        }
export default addressRouter;
*/





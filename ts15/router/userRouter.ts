import express, { response } from "express";
import bcrypt from "bcryptjs";
import { body, validationResult, ValidationError } from "express-validator";
const userRouter: express.Router = express.Router();

//logic for routers
userRouter.get("/", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      `<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress user router server</h1>`
    );
});

userRouter.get("/1", (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      `<h1 style="font-family:Lato,sans-serif; color:blue">Welcome to xpress user router server</h1>`
    );
});

//
userRouter.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("naame is required"),
    body("email").isEmail().withMessage("email is not valid"),
    body('password').isLength({min:8}).withMessage("min 8 character required")
  ],
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    //receive form data
    let { name, email, password } = req.body;

    try {
      res.status(200).json({
          user:{name,email,password}
      })
    } catch (error) {
      console.log(error);
    }
  }
);

userRouter.post("/login", (req: express.Request, res: express.Response) => {
  //receive form data
  let formData = req.body;
  res.status(200).json({
    msg: "form dat is received",
    formData: formData,
  });
});

export default userRouter;

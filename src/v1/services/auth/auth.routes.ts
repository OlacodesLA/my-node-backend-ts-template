import { Router } from "express";
import express, { NextFunction, Request, Response } from "express";
import { authController, hotelCreateAccount,  hotelRegisterStep2,  logIn, registerUser,  } from "./auth.controller";
import { verifyUser } from "../otp/otp.controller";

const router = Router();
router.get("/", authController);
router.post("/register", registerUser);
router.post("/login", logIn);
router.post("/verify", verifyUser);
router.post("/hotel", hotelCreateAccount);
router.post("/hotel/step2", hotelRegisterStep2)


export default {
  baseUrl: "/auth",
  router,
  auth: false,
};
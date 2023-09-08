import { Router } from "express";
import express, { NextFunction, Request, Response } from "express";
import {userController } from "./user.controller";

const router = Router();
router.get("/", userController);

export default {
  baseUrl: "/user",
  router,
  auth: false,
};
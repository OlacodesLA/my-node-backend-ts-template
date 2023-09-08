import { Router } from "express";
import express, { NextFunction, Request, Response } from "express";
import {userController } from "./user.controller";

const router = Router();
//Test Route
router.get("/", userController);

export default {
  baseUrl: "/user",
  router,
  auth: false,
};
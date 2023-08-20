import { Router } from "express";
import express, { NextFunction, Request, Response } from "express";
import { ErrorCode, ErrorException } from "@/v1/utils";
import { testController } from "./test.controller";

const router = Router();
//Test Route
router.get("/", testController);

export default {
  baseUrl: "/",
  router,
  auth: false,
};

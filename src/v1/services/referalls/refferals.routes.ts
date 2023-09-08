import { Router } from 'express'
import express, { NextFunction, Request, Response } from 'express'
import { ErrorCode, ErrorException } from '../../utils/';

const router = Router();



export default {
  baseUrl: '/referrals',
  router,
  auth: true
}
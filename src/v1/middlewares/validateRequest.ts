import { NextFunction } from "express";
import Joi from "joi";
  
const validateRequest = (schema:any, property:any) => { 
  return (req:any, res:any, next: NextFunction) => { 
  const { error } = schema.validateAsync(req.body, schema); 
  const valid = error == null; 

  if (valid) { 
    next(); 
  } else { 
    const { details } = error; 
    const message = details.map((i: { message: any; }) => i.message).join(',');

    console.log("error", message); 
   res.status(422).json({ error: message }) } 
  } 
} 
export {
    validateRequest
}
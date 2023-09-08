import { Request, Response } from "express";
import { clientResponse } from "../../helpers/response";
import Logger from "../../libs/logger";
import { HotelRegisterRequest, HotelRegisterStep2, UserAuthRequest, hoteladminRegisterValidationSchema, loginUser, userRegisterValidationSchema } from "./auth.interfaces";
import userModel, { hotelProfile, userProfile } from "../user/user.model";
import { sendEmail } from "../../utils/mail";
import handlebars from "handlebars";
import mongoose from "mongoose";
import walletModel from "../wallet/wallet.model";
import refferalsModel from "../referalls/refferals.model";
const fs = require('fs');
const path = require('path');
const emailTemplate = fs.readFileSync(path.join(__dirname, "../../templates/userOtp.templates.hbs"), "utf-8");
const hotelemailTemplate = fs.readFileSync(path.join(__dirname, "../../templates/hotelOtp.templates.hbs"), "utf-8");
const template = handlebars.compile(emailTemplate);
const hotelTemplate = handlebars.compile(hotelemailTemplate);
import ShortUniqueId from 'short-unique-id';
import { generateRandomString } from "../../utils/codeGenerator";
import otpModel from "../otp/otp.model";
import { asignNewToken } from "../../helpers/token";
import bcrypt from 'bcrypt'
import { AnySchema } from "joi";
import { add } from "winston";


const authController = async (req: Request, res: Response) => {
  try {
    // Return response
    clientResponse(res, 201, {
      message: "Welcome to <Tracman --Auth--👾/> API v1.",
    });
  } catch (error: typeof Error | any) {
    // Return error
    Logger.error(`${error.message}`);
    clientResponse(res, 400, error.message);
  }
};

const registerUser =async (req:Request, res: Response) => {
    const session = await mongoose.startSession();

    // Start a transaction
    session.startTransaction();
    try {
        const register:UserAuthRequest = req.body;
        const uid = new ShortUniqueId({ length: 10 });

        const value = await userRegisterValidationSchema.validateAsync(register);
        const existing = await userModel.findOne({ email: register.email });

        if (existing) {
            clientResponse(res, 401, {
                message: "User already exists."
            })
        }else{
            const user = await userModel.create({
                ...register,
                password:register.pin
            });
            const profile = await userProfile.create({
                userId: user.id,
                username: register.username
            })
            const wallet = await walletModel.create({
                userId: user.id,
                balance: 0,
            });
            const referral = await refferalsModel.create({
                userId: user.id,
                refferalCode: uid.randomUUID()
            });
            const genOtpCode = uid.randomUUID(4)
            //message body
            const messageBody = (template({
            name: `${profile.username}`, 
            code: `${genOtpCode}`
            }))

            const sendEmailOtp = await sendEmail({
            email: user!.email,
            subject: "Email verification",
            message:messageBody
        });


        const otp = await otpModel.create({
          otp: genOtpCode,
          otpId: sendEmailOtp.messageId,
          isPhoneRequired: false,
          email: user.email,

        });
        otp.save();

        const referredBy = await refferalsModel.findOne({ refferalCode: register.referralCode });
        if (referredBy) {
            referral.referredBy = referredBy._id;
            referredBy.referrals.push(user._id);
            await referredBy.save();
          }
            await user.save();
            await wallet.save();
            await profile.save()

            await session.commitTransaction();
            session.endSession();

            clientResponse(res, 201, {
                message: "User created successfully, verify otp now",
                user
            })
        }

    } catch (error: typeof Error | any) {
        await session.abortTransaction();
        Logger.error(`${error.message}`);
        clientResponse(res, 400, error.message);
      }finally {
        session.endSession();
      }
}

const logIn = async (req: any, res: any) => {
  const loginDto: loginUser = req.body


  try {
    if (!loginDto.pin) throw new Error('password are required')
    let existingUser;
    // @ts-ignore
  if (loginDto.isUser) {
    const isExisting = await userModel.findOne({ email: loginDto.email});
    existingUser = isExisting;
  }else{
    const isExisting = await userModel.findOne({ phone: loginDto.phone});
    existingUser = isExisting;
  }
    
    console.log(existingUser);
    

    if (!existingUser) return clientResponse(res, 401, 'Account not found, Please register first.');
    let fetchUser;


    if (loginDto.isUser == true) {
      const user = await userModel.findOne({ email: loginDto.email });
      if (!user) {
        clientResponse(res, 404, {
          message: "User not found with credentials."
        })
      }

      fetchUser = user;
    }else{
      const user = await userModel.findOne({ phone: loginDto.phone });
      if (!user) {
        clientResponse(res, 404, {
          message: "User not found with credentials."
        })
      }

      fetchUser = user;
    }


    // @ts-ignore
    const match = await bcrypt.compare(loginDto.pin, fetchUser?.password)

    if (!match) return clientResponse(res, 401, 'incorrect password')

    // Check if user is verified
    if (fetchUser?.verified == false)
      return clientResponse(res, 401, 'Account not verified, Please verify your account.')

      let userToken
       = fetchUser?.email?.toString() || fetchUser?.phone?.toString()
    

    const token = asignNewToken(userToken!)

    clientResponse(res, 201, { token: token})
  } catch (error: any) {
    Logger.error('${error.message}')

    clientResponse(res, 400, { error: error.message, message: 'there was a problem signing you in' })
  }
}

const hotelCreateAccount = async(req:any, res:any) => {
  const register: HotelRegisterRequest = req.body;
  const uid = new ShortUniqueId({ length: 10 });
  const session = await mongoose.startSession();

  try {
    
    const value = await hoteladminRegisterValidationSchema.validateAsync(register);
    const existing = await userModel.findOne({ 
      email: register.email,
      phone: register.phone
    });
  
    const existingHotel = await hotelProfile.findOne({
      hotelName: register.hotelName
    });
  
    if (existing) {
      clientResponse(res, 402, {
        message: "User already exists"
      })
    }else if(existingHotel) {
      clientResponse(res, 402, {
        message: "Hotel Name already exists"
      })
    }else{
      session.startTransaction();
      const user = await userModel.create({
        ...register,
      });
      const hotel = await hotelProfile.create({
        hotelName: register.hotelName,
        userId: user.id
      });

      const wallet = await walletModel.create({
        userId: user.id,
        balance: 0,
      });

      await user.save();
      await hotel.save();
      await wallet.save();

      const genOtpCode = uid.randomUUID(4)
      //message body
      const messageBody = (hotelTemplate({
      name: `${hotel.hotelName}`, 
      code: `${genOtpCode}`
      }))

      const sendEmailOtp = await sendEmail({
      email: user!.email,
      subject: "Email verification",
      message:messageBody
  });


  if (sendEmailOtp) {
    const otp = await otpModel.create({
      otp: genOtpCode,
      otpId: sendEmailOtp.messageId,
      isPhoneRequired: true,
      phone: user.phone
    });

    otp.save();
  }

      await session.commitTransaction();
      session.endSession();

      clientResponse(res, 201, {
        message: "User created succcessfully",
        user,
        hotel
      })
    }
  } catch (error: typeof Error | any) {
    await session.abortTransaction();
    Logger.error(`${error.message}`);
    clientResponse(res, 400, error.message);
  }finally {
    session.endSession();
  }
}

const hotelRegisterStep2 =async (req:any, res:any) => {
  const register: HotelRegisterStep2 = req.body;

  try {
    const addPin = await userModel.findOne({ phone: register.phone });
    if (!addPin) {
      clientResponse(res, 404, {
        message: "Account not found."
      })
    }else{
      addPin!.password = register.pin;
    const profile = await hotelProfile.findOne({ userId: addPin!.id });
    profile!.address = register.hotelAddress,
    profile!.state = register.hotelState,
    profile!.city = register.hotelCity,
    profile!.hotelimages = register.hotelPictures,
    await addPin!.save()
    await profile?.save();


    clientResponse(res, 200, {
      message: "Details updated succesfully",
      user: addPin,
      profile: profile
    })
    }
    
  }  catch (error: typeof Error | any) {
    Logger.error(`${error.message}`);
    clientResponse(res, 400, error.message);
  }
}

export { authController, registerUser, logIn, hotelCreateAccount, hotelRegisterStep2 };
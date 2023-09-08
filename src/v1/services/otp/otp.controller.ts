import { clientResponse } from "../../helpers/response";
import { Otp } from "./otp.interface"
import otpModel from "./otp.model"
import userModel, { hotelProfile, userProfile } from "../user/user.model";
import { asignNewToken } from "../../helpers/token";

const verifyUser = async (req: any, res:any) => {
    const otpCode:Otp = req.body

    const find = await otpModel.findOne({ otp: otpCode.otp });

    if (!find) {
        clientResponse(res, 404, {
            message: "Invalid Otp or otp not found"
        })
    }else{
        let otpUser = find?.phone || find?.email
        if (find.isPhoneRequired == false) {
            const verifyUser = await userModel.findOneAndUpdate(
                { email: find.email },
                { $set: { verified: true } },
                {
                  new: true
                }
              ).lean();
              const user = await userProfile.findOne({ userId: verifyUser?._id})

              const token:string = asignNewToken(otpUser!.toString());

              clientResponse(res, 200, {
                message: "User verified succesfully",
                token,
                user: verifyUser,
                profile: user
              })
        }else{
            const verifyUser = await userModel.findOneAndUpdate(
                { phone: find.phone },
                { $set: { verified: true } },
                {
                  new: true
                }
              ).lean();
              const user = await hotelProfile.findOne({ userId: verifyUser?._id});
              const token:string = asignNewToken(otpUser!.toString());

              clientResponse(res, 200, {
                message: "user verified succesfully",
                token,
                user: verifyUser,
                profile: user
              })
        }
    }
}

export {
    verifyUser
}
import Joi from 'joi'

interface UserAuthRequest {
    username: string;
    email?: string;
    phone?: string;
    pin?: string;
    isHotelAdmin: boolean;
    referralCode?: string;
}

interface HotelRegisterRequest {
    email?: string;
    phone?: string;
    pin?: string;
    hotelName: string
}

interface HotelRegisterStep2 {
    pin: string;
    phone: string;
    confirmPin: string;
    hotelAddress: string;
    hotelState: string;
    hotelCity: string;
    hotelPictures: [];
}
interface loginUser {
    pin: string;
    email?:string;
    phone?: string;
    isUser: boolean;
}
const userRegisterValidationSchema = Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    pin: Joi.string().required(),
  });

const hoteladminRegisterValidationSchema = Joi.object({
    phone: Joi.string().required(),
    hotelName: Joi.string().required(),
    email: Joi.string().required(),
});


export { UserAuthRequest, HotelRegisterRequest, HotelRegisterStep2, userRegisterValidationSchema, loginUser, hoteladminRegisterValidationSchema}
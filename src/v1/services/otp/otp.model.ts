import bcrypt from 'bcrypt'
import mongoose, { Schema } from 'mongoose'

const otpSchema = new mongoose.Schema(
  {
    isPhoneRequired: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
      set: (value: string) => value.toLowerCase()
    },
    email: {
      type: String,
      set: (value: string) => value.toLowerCase()
    },
    otp: {
      type: String,
      required: true
    },

    otpId: {
      type: String,
      required: true
    },

    valid: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)



// module.exports = mongoose.model('User', userSchema)
export default mongoose.model('Otp', otpSchema)
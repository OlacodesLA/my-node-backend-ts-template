import bcrypt from 'bcrypt'
import { string } from 'joi';
import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    set: (value: string) => value.toLowerCase()
  },

  phone: {
    type: String,
  },

  password: {
    type: String,
    // required: true,
    set: (value: any) => {
      const hash = bcrypt.hashSync(value, 8)
      return hash
    }
  },

  role: {
    type: String,
    required: true,
    enum: ['user', 'hotelAdmin', 'admin'],
    default: 'user'
  },

  verified: {
    type: Boolean,
    default: false
  },
  profileId: String
});

const userProfileSchema = new mongoose.Schema({
    username: {
      type: String,
      set: (value: string) => value.toLowerCase()
    },
    profilePicture: {
        type: String,
    },
    userId: {
        type: String,
    }
  });

  const hotelProfileSchema = new mongoose.Schema({
    hotelName: {
      type: String,
      set: (value: string) => value.toLowerCase()
    },
    profilePicture: {
        type: String,
    },
    userId: {
        type: String,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    hotelimages: [String],
  });

userSchema.statics.checkExistingUser = async function (phone: string) {
    // loop through the model to check for a specific user
    const eUser = await this.findOne({ phone })
    // console.log(eUser);
  
    return !!eUser
  }
  
  // document instance methods to asign function to each documenet
  userSchema.methods.comparePassword = async function (commingPassword: string) {
    // use bcrypt to compare incoming password against saved password
    const currentPassword = this.password
  
    return new Promise((resolve, reject) => {
      bcrypt.compare(commingPassword, currentPassword, (err: any, same: any) => {
        if (err) {
          return reject(err)
        }
  
        resolve(same)
      })
    })
  }

//method to remove password from json response
userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }


export default mongoose.model('User', userSchema)

export const userProfile = mongoose.model('userProfile', userProfileSchema);
export const hotelProfile = mongoose.model('hotelProfile', hotelProfileSchema);
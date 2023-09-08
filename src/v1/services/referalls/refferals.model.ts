import { string } from 'joi';
import mongoose, { Schema, Document } from 'mongoose';


const ReferralSchema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
      },
      refferalCode:{
        type: String,
        unique: true,
      },
      referredBy:{
        type: Schema.Types.ObjectId,
      },
      referrals: [],
    
  })

  
  export default mongoose.model('refferals', ReferralSchema);
import mongoose, { Schema, Document } from 'mongoose';


const WalletSchema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
      },
      balance: {
        type: Number,
        default: 0,
      },
    
  })
  const CentralWalletSchema = new mongoose.Schema({
      balance: {
        type: Number,
        default: 0,
      },
    
  });

  
  export default mongoose.model('Wallet', WalletSchema);
  export const centralWallet =  mongoose.model('CentralWallet', CentralWalletSchema);
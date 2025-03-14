import mongoose, {Document, Schema} from "mongoose";

export interface IProduct extends Document{
    title:string;
    images: string[];
    subject: string;
    category: string;
    condition : string;
    classType: string;
    price: number;
    author: string;
    edition: string;
    description?:string;
    finalPrice: number;
    shippingCharge: string;
    seller: mongoose.Types.ObjectId;
    paymentMode: 'UPI' | 'Bank Account';
    paymentDetails: {
        upiId?:string;
        bankDetails?:{
            accountNumber: string;
            ifscCode: string
            bankName: string
        }
    }
}

const productSchema = new Schema<IProduct>(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String},
        googleId: {type: String},
        profilePicture: {type: String, default: null},
        phoneNumber: {type: String, default: null},
        isVerified: {type: Boolean, default: false},
        verificationToken: {type: String, default: null},
        resetPasswordToken: {type: String, default: null},
        resetPasswordExpires: {type: Date, default: null},
        agreeTerms: {type: Boolean, required: false},
        addressess: [{type: mongoose.Schema.Types.ObjectId, ref: "Address"}],
    }
)
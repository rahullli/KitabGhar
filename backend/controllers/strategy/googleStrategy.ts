import passport from 'passport';
import User, {IUser} from '../../models/User';
import dotenv from 'dotenv';
import { Strategy as GoogleStrategy, Profile } from 'passport';
dotenv.config();
import { Request } from 'express';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
    passReqToCallback: true 
}));

async(
    req: Request, 
    accessToken,
    refreshToken,
    Profile
    done: (error: any, user?: IUser | false)=> void
)
))
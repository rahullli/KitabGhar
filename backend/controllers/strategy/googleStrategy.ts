import passport from 'passport';
import User, { IUser } from '../../models/User';
import dotenv from 'dotenv';
import { Strategy as GoogleStrategy, Profile } from 'passport-google-oauth20';
dotenv.config();
import { Request } from 'express';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            callbackURL: process.env.GOOGLE_CALLBACK_URL || '',
            passReqToCallback: true,
        },
        async (
            req: Request,
            accessToken: string,
            refreshToken: string,
            profile: Profile,
            done: (error: any, user?: IUser | false) => void
        ) => {
            const { emails, displayName, photos } = profile;
            console.log('This is my profile', profile);

            try {
                let user = await User.findOne({ email: emails?.[0]?.value });

                if (user) {
                    if (!user.profilePicture && photos?.[0]?.value) {
                        user.profilePicture = photos[0].value;
                        await user.save();
                    }
                    return done(null, user);
                }

                user = await User.create({
                    googleId: profile.id,
                    name: displayName,
                    email: emails?.[0]?.value,
                    profilePicture: photos?.[0]?.value,
                    isVerified: true,
                    agreeTerms: true,
                });

                return done(null, user);
            } catch (error) {
                console.error('Error in Google authentication:', error);
                return done(error);
            }
        }
    )
);

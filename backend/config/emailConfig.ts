import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.verify().then((error) =>{
   if(error){
    console.log(error);
   }
   else{
    console.log("Server is ready to take our messages");
   }
})


const sendEmail = async(to: string, subject: string, body: string) =>{
    
    await transporter.sendMail({
        from: `Your BookKart Team <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: body
    })
}

export const sendVerificationEmail = async(to: string, token: string) =>{
    const verificationLink = `${process.env.FRONTEND_URL}/verify-email/${token}`;
    const html = `
    <h1>Welcome to your BookKart,</h1>
    <p>Please click the link below to verify your email</p>
    <a href="${verificationLink}">Verify Email</a>
    <p>If you did not sign up for BookKart, please ignore this email</p>
    `

    await sendEmail(to, "Verify your email", html);
}

export const sendPasswordResetEmail = async(to: string, token: string) =>{
    const resetLink = `${process.env.FRONTEND_URL}/reset-password/${token}`;
    const html = `<h1><h1>
    
    <a href="${resetLink}">Reset Password</a>
    <p>If you did not request a password reset, please ignore this email</p>
    `;

    await sendEmail(to, "Reset your password", html);
}

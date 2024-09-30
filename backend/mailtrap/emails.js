import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js"
import { mailTrapClient } from "./mailtrap.config.js"
import { sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken)=>{
    const recipients = [{email}]

    try{
        const response =  await mailTrapClient.send({
            from:sender,
            to:recipients,
            subject:"Verify Your Email",
            // html: VERIFICATION_EMAIL_TEMPLATE,
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category:"Email Verification"
        })
        console.log("Email Sent Successfully", response)
    } catch(error){
        console.error(`Error Sending Verification`, error)
        throw new error(`Error Sending Verification: ${error}` )
    }
}
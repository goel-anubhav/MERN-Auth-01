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

export const sendWelcomeEmail = async (email, name)=>{
    const recipient=[{email}];
    try{
       const response=  await mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "0d308f98-3a3b-4b1e-b3b2-cdd4758e3ef2",
            template_variables: {
      name: name,
      company_info_name: "Unique AppSites",
      company_info_address: "Noida",
      company_info_city: "Uttar Pradesh",
      company_info_zip_code : "001001",
      company_info_country: "India"
    }
        });
        console.log("Welcome Email sent successfully", response);
    }
    catch(error){
        console.log("Error Sending Welcome Email", error);
        throw new error(`Error Sending Welcome Email: $`)
    }
}
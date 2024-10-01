import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.token
    if(!token) return res.status(400).json({success: false, message:"Un-Authorised"})
    try {
        const decoded = jwt.verify(token, process.env.jwt_secret)
        if(!decoded) return res.status(400).json({success: false, message:"Invalid Token Found"}) 
        req.userId = decoded.userId
        next()
        } catch (error) {
        console.log("Error In verifyToken", error)
        return res.status(400).json({success:false, message:"Server Error"})
    }
}
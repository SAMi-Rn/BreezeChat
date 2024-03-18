import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (res, user) => {
    const token = jwt.sign({ id: user }, process.env.JWT_SECRET, {  
        expiresIn: "30d",
    });
    res.cookie("token", token, {
        // for XSS attacks protection
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // for CSRF attacks protection
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    })
};
export default generateTokenAndSetCookie

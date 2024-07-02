export const AdminSendToken = (res, newAdmin , message, statusCode = 200)=>{

    const Admintoken = newAdmin.adminToken();

    const options = {
        expires: new Date(Date.now()+15 * 24 * 60 * 1000),
        httpOnly: true,
        secure: true,
        sameSite: "none",
    };
    res.status(statusCode).cookie("AdminToken", Admintoken, options).json({
        success: true,
        message,
        newAdmin,
    })

}
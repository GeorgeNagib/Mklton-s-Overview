const UserInfo = require('../models/userInfo')
const catchAsync = require('./catchAsync')
const AppError = require('./appError')
exports.protected = catchAsync(async (req, res, next) => {
    let passwordSent
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer') && req.headers.authorization.split(' ')[1]) {
        passwordSent = req.headers.authorization.split(' ')[1]
        
        const user = await UserInfo.findOne()
        if(!user) {

            user = await UserInfo.create({
                email : "georgesafwat@protonmail.com",
                name: "George Safwat ",
                password : "12345678",
                phoneNumber : "+201278616724",
                twitter : "https://twitter.com/georgesafw",
                instagram : "https://instagram.com/iamgeorgesafwat",
                title : "CEO & Entrepreneur",
                available : false,
                avatar : "https://i.ibb.co/HP7sTWp/photo-2022-05-22-13-18-22.jpg"
            })
            await user.save()
            return next()
        }
        if (await user.correctPassword(passwordSent, user.password)) {
            return next()
        } else {
            return next(new AppError("The password is wrong, you are not authorized", 403))
        }
    }
    if (!passwordSent) {
        return next(new AppError('You don\'t have access to this route', 401))
    }

})
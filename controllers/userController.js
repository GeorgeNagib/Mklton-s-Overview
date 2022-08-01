const userInfo = require('../models/userInfo')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')
const UserInfo = require('../models/userInfo')

exports.updateUser = catchAsync(async (req, res, next) => {
    let user = await UserInfo.findOne()
    console.log(user)
    if(user) {
        for(let propertyName in req.body) {
            user[propertyName] = req.body[propertyName]
        }
    } else {
        user = new UserInfo(req.body)
        console.log(user)
    }
    await user.save()
    res.status(200).json({
        status: 'success',
        data: {
            user: user
        }
    })
})

exports.getUser = catchAsync(async (req, res, next) => {
    const user = await userInfo.findOne({}).select('-password')

    res.status(200).json({
        status: 'success',
        user
    })
})

const userInfo = require('../models/userInfo')
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

exports.updateUser = catchAsync(async (req, res, next) => {
    const updatedUser = await userInfo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (req.body.password) {
        updatedUser.password = req.body.password
        await updatedUser.save()
    }
    res.status(200).json({
        status: 'success',
        data: {
            user: updatedUser
        }
    })
})
exports.getUser = catchAsync(async (req, res, next) => {
    const user = await userInfo.findById(req.params.id)

    res.status(200).json({
        status: 'success',
        user
    })
})
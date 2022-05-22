const UserInfo = require('../models/userInfo')
const catchAsync = require('./catchAsync')
const AppError = require('./appError')
exports.protected = catchAsync(async (req, res, next) => {
    let passwordSent
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        passwordSent = req.headers.authorization.split(' ')[1]
    }
    if (!passwordSent) {
        return next(new AppError('You don\'t have access to this route', 401))
    }

})
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const usersService = require("../services").usersService;

const getUsers = catchAsync(async (req, res) => {
    const result = await usersService.findAll();

    if (result.length === 0) {
        res.status(httpStatus.NOT_FOUND).send({
            status: 404,
            data: [],
        });
    }

    res.status(httpStatus.OK).send({status: httpStatus.OK, data: result});
});

const getUserById = catchAsync(async (req, res) => {
    const userId = req.params.userId;
    const q = req.query.q;
    
    // console.log(`userID : ${userId}`);
    const result = await usersService.findById(userId, q);

    if (userId !== req.user.id) throw new ApiError(httpStatus.FORBIDDEN, "Forbidden Access!");
    if (!result) res.status(httpStatus.NOT)
    res.status(httpStatus.OK).send(result);
})

module.exports = {
    getUsers,
    getUserById,
}
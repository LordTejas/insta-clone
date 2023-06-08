const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { authService, usersService, tokensService } = require("../services");

const register = catchAsync(async (req, res) => {
  const user = await usersService.create(req.body);
  const tokens = await tokensService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokensService.generateAuthTokens(user);
  res.status(httpStatus.OK).send({user, tokens});
});

module.exports = {
  register,
  login,
};

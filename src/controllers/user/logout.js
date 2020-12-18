const logout = (req, res, next) => {
  res
    .clearCookie('token')
    .json({
      title: 'Logout Successful',
      detail: 'Successfuly expired login session',
    });
};

module.exports = { logout };

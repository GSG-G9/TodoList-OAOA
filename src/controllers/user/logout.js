const logout = (req, res) => {
  res
    .clearCookie('token')
    .json({
      title: 'Logout Successful',
      detail: 'Successfuly expired login session',
    });
};

module.exports = { logout };

const logout = (req, res, next) => {
  try {
    res.clearCookie('token');
    res.json({
      title: 'Logout Successful',
      detail: 'Successfuly expired login session',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { logout };

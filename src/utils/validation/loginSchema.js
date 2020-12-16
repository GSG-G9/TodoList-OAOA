const Joi = require("joi");

const loginSchema = Joi.object({
    email : Joi.string().email().required()
    password : Joi.string().min(7).required()
})


module.exports = { loginSchema };


// const bcrypt = require('bcryptjs');
// const { sign } = require('../../utils/jwt');
// const { getUser } = require('../../database/queries/login');
// const { boomify } = require('../../utils/boomify');
// const { loginSchema } = require('../../utils/validation/loginSchema');

// const loginHandler = (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const { error } = loginSchema.validate(req.body);
//     if (error) {
//       throw boomify(400, error.message);
//     }
//     getUser(email)
//       .then((data) => {
//         if (data.row !== 0) {
//           bcrypt.compare(password, data.rows[0].password)
//             .then((succeed) => {
//               if (!succeed) {
//                 throw boomify(400, 'Bad request');
//               }
//               return sign({ userId: data.row[0].id });
//             }).then((token) => {
//               res.cookie('name', token);
//               res.status(200).json({
//                 msg: 'login succeed',
//               });
//             });
//         }
//         return boomify(400, 'User is not found');
//       });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports = { loginHandler };
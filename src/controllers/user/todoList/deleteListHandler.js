const { boomify } = require('../../../utils/boomify');
const { deleteList } = require('../../../database/queries');

const deleteListHandler = (req, res, next) => {
    try {
        const { deleteList } = req.body
    if(deleteList !== 0){

    }
        }.catch((err)=>{
            next(err)
        })
};

module.exports = { deleteListHandler };

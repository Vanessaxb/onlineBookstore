const Category = require('../../models/Category');

async function index(req, res) {
    try {
        const categories = await Category.find({})
        res.status(200).json(categories)

    }catch(e){
        res.status(400).json({ msg: e.message });
      } 
}

module.exports = {
    index
}
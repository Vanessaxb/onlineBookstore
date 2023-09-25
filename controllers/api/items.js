const Item = require('../../models/Item')

module.exports = {
  index,
  show,
  create,
  update,
  remove
};

async function index(req, res) {
  try{
    const items = await Item.find({}).sort('name').populate('category').exec();
    // re-sort based upon the sortOrder of the categories
    items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
    res.status(200).json(items);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }
}

async function show(req, res) {
  try{
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

//create a new book
async function create(req, res) {
  console.log(req.body);
  try {
    // Add the book to the database
    const book = await Item.create(req.body);   
    res.json(book);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    console.log(err);
    res.status(400).json(err);
  }
}

//update(edit) book
async function update(req, res) {
  try{
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json(updatedItem);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

//delete book
async function remove(req, res) {
  try{
    const deletedItem = await Item.findByIdAndDelete(req.params.id); 
    res.status(200).json(deletedItem);
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}
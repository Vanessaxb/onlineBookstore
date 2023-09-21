const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = { 
  index, 
  create, 
  update,
  remove,  
  login, 
  checkToken
};


//Index view user
async function index(req, res) {
  try {
    const users =  await User.find({})
    res.json(users)
  }  catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    console.log(err);
    res.status(400).json(err);
  }
}

//create new user in the database
async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);

    //create new token
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    // Client will check for non-2xx status code
    // 400 = Bad Request
    console.log(err);
    res.status(400).json(err);
  }
}

//update(edit) user
async function update(req, res) {
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}); 
    res.status(200).json({ msg: 'User has been Updated', user: updatedUser});
  }catch(e){
    res.status(400).json({ msg: e.message });
  }  
}

//remove user from DB
async function remove(req, res) {
  try{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteUser)
  }catch(e){
    res.status(400).json({ msg: e.message });
  } 
}


async function login(req, res) {
  try {
    //find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();

    //comparing password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    //create new tokem
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log("req.user", req.user);
  res.json(req.exp);
}

/*-- Helper Functions  to create jwt token--*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" } // token will expire in 24h
  );
}



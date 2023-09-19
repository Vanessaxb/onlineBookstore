const item = require('./ItemSchema');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  title: { type: String, required: true }, 
  image: String,
  author: String,
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = itemSchema;
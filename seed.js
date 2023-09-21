require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'All', sortOrder:10},
    {name: 'Biography', sortOrder:20},    
    {name: 'Fiction', sortOrder: 30},
    {name: 'Romance', sortOrder:40},
    {name: 'History', sortOrder: 50},
    {name: 'Kids', sortOrder: 60},
    {name: 'Arts', sortOrder: 70},
    {name: 'Suspence', sortOrder: 80},    
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {title: 'Assyria: The Rise and Fall of the World\'s First Empire', 
    image: 'https://d2sofvawe08yqg.cloudfront.net/json-api-by-example/s_hero2x?1620503283', 
    author: 'Eckart Frahm ',
    category: categories[4], 
    description: 'At its height in 660 BCE, the kingdom of Assyria stretched from the Mediterranean Sea to the Persian Gulf. It was the first empire the world had ever seen. Here, historian Eckart Frahm tells the epic story of Assyria and its formative role in global history.',
    price: 23},
    {title: 'The Six: The Untold Story of America\'s First Women Astronauts', 
    image: 'https://m.media-amazon.com/images/I/71BX9ffmBDL._SL1500_.jpg',  
    author: 'Loren Grush',
    category: categories[4], 
    descripttion: 'When NASA sent astronauts to the moon in the 1960s and 1970s the agency excluded women from the corps, arguing that only military test pilots—a group then made up exclusively of men—had the right stuff. It was an era in which women were steered away from jobs in science and deemed unqualified for space flight. Eventually, though, NASA recognized its blunder and opened the application process to a wider array of hopefuls, regardless of race or gender.',
    price: 17.95},

    {title: 'Brown Bear, Brown Bear, What Do You See?', 
    image: 'https://m.media-amazon.com/images/I/81kZ3Gl3WKL._SL1500_.jpg',  
    author: 'Bill Martin Jr.',
    category: categories[5], 
    descripttion: 'A big happy frog, a plump purple cat, a handsome blue horse, and a soft yellow duck--all parade across the pages of this delightful book. Children will immediately respond to Eric Carle\'s flat, boldly colored collages.',
    price: 4.95},

    {title: 'Just Because', 
    image: 'https://m.media-amazon.com/images/I/814YDeEA+vL._SL1500_.jpg',  
    author: 'Matthew McConaughey',
    category: categories[5], 
    descripttion: 'When NASA sent astronauts to the moon in the 1960s and 1970s the agency excluded women from the corps, arguing that only military test pilots—a group then made up exclusively of men—had the right stuff. It was an era in which women were steered away from jobs in science and deemed unqualified for space flight. Eventually, though, NASA recognized its blunder and opened the application process to a wider array of hopefuls, regardless of race or gender.',
    price: 17.95},

    {title: 'I Love You Like No Otter: A Funny and Sweet Board Book for Babies and Toddlers', 
    image: 'https://m.media-amazon.com/images/I/81YYStQvnsL._SL1500_.jpg',  
    author: 'Rose Rossner',
    category: categories[5], 
    descripttion: 'There\'s no better way to say "I love you" than with a sweet and heartfelt animal pun book! I Love You Like No Otter combines a warm message of love with beautifully illustrated animals families will love to read and share together.',
    price: 5.95},    
  ]
  );

  console.log(items)

  process.exit();

})();
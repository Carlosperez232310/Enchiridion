const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000
const path=require("path")



app.set('views','/')
app.set('view engine','html')
app.use(express.json());

app.get('/',(req,res)=>{
  
    return res.render('index');
    
});


app.post('/', (req, res) => {
  console.log(searchValue);

  const searchValue = req.body.query;

  // web scraping code here using search value

  return res.json({msg: "Data reached succes!"});
});
app.get('/about',(req,res)=>{
    return res.render('about')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

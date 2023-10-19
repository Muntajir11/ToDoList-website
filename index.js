import express from 'express';
import bodyParser from 'body-parser';

const app=express();
const port=3000;
var message="";
const imagePath = 'styles/icon.png';

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs",{imagePath});
  });

  app.post("/submit",(req,res)=>{
     message=req.body.todo;
     

    console.log(message);

    
    res.redirect('/');

  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
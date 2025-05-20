const express = require("express");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res) => {
//   res.send("Hello from the homepage!");
// });
app.post("/run",(req,res)=>{

  const {langauge,code}=req.body;//destructuring
  res.json({langauge, code});



});
app.get("/", (req, res) => {
  res.json({message:"Online_Compiler"});
});

app.listen(8000,()=> {
console.log("Server is running on port 8000");
});
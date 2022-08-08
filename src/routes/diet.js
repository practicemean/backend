const router = require("express").Router();

router.get("/diets", (req, res)=>{
  
  res.sendStatus(200).json({"holi": "jjiji"});

})

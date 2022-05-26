const Router = require("express").Router;

const router = Router();

router.post('/register', (req, res)=>{

 const {name, password} = req.body;   
    
})

router.post('/login', (req, res)=>{
    
 const {name, password} = req.body;   

})

router.get('/logout', (req, res)=>{


    res.status(200).send("logout");
})

module.exports = router;
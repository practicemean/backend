const Router = require('express').Router;

const router = Router();

router.post('notification', (req, res)=>{

    res.status(200).send("notification");
})

module.exports = router;
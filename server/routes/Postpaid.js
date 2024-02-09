const express = require("express");
const router = express.Router();
const {Postpaid_Trx} = require("../models")

router.get('/'  , async (req , res)=>{
    const findAllBillling = await Postpaid_Trx.findAll()
res.json(findAllBillling)
});

router.post('/' , async (req , res) =>{
    const postpaid = req.body
await Postpaid_Trx.create(postpaid)
  res.json(postpaid)
})

module.exports = router;
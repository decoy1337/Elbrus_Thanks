const { where, json } = require('sequelize');
const { Student } = require('../../db/models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();

    res.status(200).json({ students });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.put('/:id',async(req,res)=>{
  try{
    const{id}=req.params
    const{thanks}=req.body
    const result=await Student.update({count_thank:thanks},{where:{id}})
    const student=await Student.findOne({where:{id}})
 res.json({message:'success',student})
  }catch ({ message }) {
    res.status(500).json({ error: message });
  }
})


module.exports = router;

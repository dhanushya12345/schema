const mongoose = require('mongoose')


const CashierSchema = new mongoose.Schema({
 
  cashiername:{
    type:String,
    required:true
  },
  experiance:{
    type:Number,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  dateOfJoin:{
    type:String,
    required:true
  },
  
})

module.exports = Cashierdetail = mongoose.model('cashierdetails', CashierSchema)
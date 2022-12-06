const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let itemSchema = new Schema({
  nombreD: {
    type: String,
    required: true    
  },
  cedula: {
    type: Number,
    required: true    
  },
  ciudadE: {
    type: String,
    required: true    
  },
  addE: {
    type: String,
    required: true    
  },
  ciudadR: {
    type: String,
    required: true    
  },
  addR: {
    type: String,
    required: true    
  },
  state: {
    type: String,
    required: true    
  },
  hora: {
    type: Number,
    required: true    
  },
  fecha: {
    type: Date,
    required: true    
  },
  largo: {
    type: Number,
    required: true    
  },
  ancho: {
    type: Number,
    required: true    
  },
  alto: {
    type: Number,
    required: true    
  },
  peso: {
    type: Number,
    required: true    
  },
  userId:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

}, {
  collection: 'items'
});

module.exports = mongoose.model('Item',itemSchema)

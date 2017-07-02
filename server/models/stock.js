import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  code: String
});

export default mongoose.model('Stock', stockSchema);

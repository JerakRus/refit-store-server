import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
    type: String,
    title: String,
    firm: String,
    model: String,
    image: String,
    description: String,
    price: Number,
    addCount: Number,
});
export const Item = mongoose.model('item', ItemSchema);


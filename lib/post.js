import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    text: String,
    image: String,
    date: Object,
});
export const Post = mongoose.model('post', PostSchema);
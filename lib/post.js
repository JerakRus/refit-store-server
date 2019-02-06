import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: String,
    text: String,
    image: String,
});
export const Post = mongoose.model('post', PostSchema);
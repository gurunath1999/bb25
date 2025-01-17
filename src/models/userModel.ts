import mongoose, { Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  email: string;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export const User = mongoose.model<IUser>('User', userSchema);

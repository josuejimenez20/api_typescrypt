import { Schema, Types, model, models } from 'mongoose';
import { User } from '../interface/user.interface';

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const UserModel = model('users', UserSchema);

export default UserModel;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        zipcode: {
            type: String,
            match: [/^\d{5}(?:[-\s]\d{4})?$/, 'Must use a valid zipcode'],
        },
        friends: [{ 
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        posts: [{ 
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('userCount').get(function () {
    return this.savedUsers.length;
});

const User = model('User', userSchema);

module.exports = User;

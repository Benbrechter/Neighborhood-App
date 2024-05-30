const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken')

const secret = 'i do not know what to put here'
const experation = '2h';

module.exports = {
    AuthenticationnError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            cose: 'UNAUTHENTICATED',
        },
    }),
    signToken: function ({email, name, _id}) {
        const payload = { email, name, _id};
        return jwt.sign({data: payload}, secret, { expiresIn: experation})
    },
}; 
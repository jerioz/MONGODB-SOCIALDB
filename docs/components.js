module.exports = {
    components: {
        securitySchemes: {
            ApiKeyAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header"
        }
    },
        schemas: {
            userInput: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                        description: 'user name',
                        example: 'Kareem',
                    },
                    email: {
                        type: 'string',
                        description: 'email user',
                        example: 'karrem@gmail.com',
                    },
                    password: {
                        type: 'string',
                        description: 'user password',
                        example: '12345'
                    },
                    age: {
                        type: 'number',
                        description: 'user age',
                        example: 25
                    }
                }
            },
            userLogin: {
                type: 'object',
                properties: {
                    email: {
                        type: 'string',
                        description: 'email user',
                        example: 'karrem@gmail.com',
                    },
                    password: {
                        type: 'string',
                        description: 'user password',
                        example: '12345'
                    }
        }
            },
            _id:{
                type:'objectId',
                description:"An id of a user",
                example: "6470da3ba50d0ed22dd4ef96"
            },
        }
    }
}
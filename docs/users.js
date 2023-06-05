module.exports = {
    paths: {
        '/users/newUser': {
            post: {
                tags: {
                    User: "Create a user",
                },
                description: "Create User",
                operationId: "createUser",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/userInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "We have sent an email to confirm the registration",
                    },
                },
            }
        },
        '/users/login': {
            post: {
                tags: {
                    User: "Login a user",
                },
                description: "Login User",
                operationId: "loginUser",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/userLogin",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Welcome",
                    },
                },
            }
        },
        '/users/logout': {
            delete: {
                security: [{ApiKeyAuth: []}],
                tags: {
                    User: "Logout a user",
                },
                description: "Logout user",
                operationId: "logoutUser",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Logout a user",
                    },
                ],
                responses: {
                    200: { description: "disconnected succesfully" },
                    500: { description: "There is a problem with logout" },
                },
            },
        }
    }
}
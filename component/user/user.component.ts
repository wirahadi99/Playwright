import { request } from "@playwright/test";

export class User {

    userData({
        id = 1,
        username = "whk",
        firstName = "Wirahadi",
        lastName = "Kusuma",
        email = "whk1234@gmail.com",
        password = "lalaland123",
        phone = "08188277882",
        userStatus = 3
    }) {
        return {
            id,
            username,
            firstName,
            lastName,
            email,
            password,
            phone,
            userStatus
        }

    }

    async postCreateUser(customerData = {}) {
        const context = await request.newContext();
        const response = await context.post('https://petstore.swagger.io/v2/user', {
            data: this.userData(customerData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response
    }

    async getUser(username) {
        const context = await request.newContext();
        const response = await context.get(`https://petstore.swagger.io/v2/user/${username}`)


        return response
    }
}
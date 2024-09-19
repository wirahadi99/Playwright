import { request } from "@playwright/test";
import { faker } from "@faker-js/faker";

const baseUrl = 'https://petstore.swagger.io/v2'


export class User {

    userData({
        id = faker.number.int(),
        username = faker.internet.userName(),
        firstName = faker.person.firstName(),
        lastName = faker.person.lastName(),
        email = faker.internet.email(),
        password = faker.internet.password(),
        phone = faker.phone.number('8#########'),
        userStatus = 1
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
        const response = await context.post(`${baseUrl}/user`, {
            data: this.userData(customerData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response
    }

    async getUser(username) {
        const context = await request.newContext();
        const response = await context.get(`${baseUrl}/user/${username}`)
        return response
    }
}
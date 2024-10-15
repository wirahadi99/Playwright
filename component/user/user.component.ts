import { faker } from "@faker-js/faker";
import axios from "axios";

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
        
        const res = await axios.post(`${baseUrl}/user`, {
            data: this.userData(customerData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res
    }

    async getUser(username) {
        const res = await axios.get(`${baseUrl}/user/${username}`)
        return res
    }

    async getPet(status) {
        const res = await axios.get(`${baseUrl}/pet/findByStatus?status=${status}`)
        return res
    }
    
}

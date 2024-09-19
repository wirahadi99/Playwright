import { test, expect } from "@playwright/test";
import { User } from "../component/user/user.component";

test('Create new user', async ({ }) => {

    const userComponent = new User()
    const testData = {
        id: 1,
        username: 'Amir',
        firstName: 'Benji',
        lastName: 'Fishsy',
        email: 'wokwok@gmail.com',
        password: 'lalaland',
        phone: '080989222',
        userStatus: 1
    }

    const res = await userComponent.postCreateUser(testData);
    // to verify that user has been created.
    expect(res.status()).toBe(200)

    await test.step('Get user test case ', async () => {
        const res = await userComponent.getUser(testData.username)

        const responseBody = await res.json()

        //verify that the user details are correctly retrieved.
        expect(res.status()).toBe(200)
        expect(responseBody.username).toBe(testData.username)
        expect (responseBody.firstName).toBe(testData.firstName)
        expect (responseBody.lastName).toBe(testData.lastName)
        expect (responseBody.email).toBe(testData.email)
        expect (responseBody.phone).toBe(testData.phone)
        expect (responseBody.userStatus).toBe(testData.userStatus)

    })

});
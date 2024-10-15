import { test, expect, } from "@playwright/test";
import { User } from "../component/user/user.component";

test('Create new user should return 200', async ({ }) => {

    const userComponent = new User()

    const res = await userComponent.postCreateUser();
    
    // to verify that user has been created.
    expect(res.status).toBe(200)
});

test ('Get pet by status', async ({}) => {
    const userComponent = new User()
    const res = await userComponent.getPet('available')
    expect (res.status).toBe(200)
    console.log(res.data)
})
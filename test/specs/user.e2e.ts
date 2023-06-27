import { createUser, getUserData, deleteUser } from "../utils/apiCommands.js";

describe('API commands', () => {
    let userId: number;
    let userEmail: string;

    afterAll(async () => {
        await deleteUser(userId);
    });

    it('Should POST command', async () => {
        const user = {
            name: 'Automation test',
            email: 'qa@testing.com'
        };
        
        await createUser(user);
        userId = 1;

    });

    it('Should GET command', async () => {
        const userData =  await getUserData(userId);
        userEmail = userData.email;

        console.log("The user email is: ", await userEmail);
        
    });

});



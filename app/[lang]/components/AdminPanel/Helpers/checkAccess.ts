import { users } from "../LoginForm"

export const checkAccess = (userNameToValidate: string, passToValidate: string) => {

    const foundUser = users.find( admin => admin.user === userNameToValidate)

    const isAccessGranted = foundUser?.pass === passToValidate

    console.log(foundUser, 'user');
    console.log(isAccessGranted, 'VALIDACIJA');

    
    return isAccessGranted
}
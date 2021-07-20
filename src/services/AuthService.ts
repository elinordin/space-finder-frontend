import { User } from '../models/Model'

export class AuthService {
    
    //Our async function login takes the userName and password and returns a Promise
    //The promise returns eighter a User object (through our Model) or undefined 
    public async login(userName: string, password: string):Promise<User | undefined> {
        if(userName === 'user' && password === 'password') {
            return {name: userName, email: 'some@email.com'}
        } else {
            return undefined
        }
    }
}
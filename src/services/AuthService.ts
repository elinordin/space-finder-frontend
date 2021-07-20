import { User, UserAttribute } from '../models/Model'

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

    public async getUserAttributes():Promise<UserAttribute[]>{
        const result: UserAttribute[] = []
        result.push({key: 'Description', value: 'Yo yo yo! I am the best user'})
        result.push({key: 'Age', value: 'Soon to be 27'})
        result.push({key: 'Country', value: 'Sweden'})
        result.push({key: 'Job', value: 'Engineer'})
        
        return result
    }
}
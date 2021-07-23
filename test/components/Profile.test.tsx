import ReactDOM from 'react-dom'

import Profile from '../../src/components/Profile'
import { User } from '../../src/models/Model'


const someUser : User = {name: 'userName', email: 'some@email.com'}


describe('Profile test suite', () => {

    let container : HTMLDivElement
    
    const authServiceMock = {getUserAttributes: jest.fn()}
    


    beforeAll(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        
    })

    afterAll(() => {
        document.removeChild(container)
        container.remove()
    })


    describe('With a logged in user', () => {

        beforeEach(() => ReactDOM.render(<Profile user={someUser} authService={authServiceMock as any}/>, container))

        test('Test 1', () => {

        })    

    })

    describe('Without a logged in user', () => {

        beforeEach(() => ReactDOM.render(<Profile user={undefined} authService={authServiceMock as any}/>, container))

        test('Test 1', () => {

        })    

    })

})
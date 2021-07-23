import ReactDOM from 'react-dom'
import { StaticRouter } from 'react-router'

import Profile from '../../src/components/Profile'
import { User } from '../../src/models/Model'


const someUser : User = {name: 'userName', email: 'some@email.com'}
const userAttributes = [
    {
        key: 'Description', 
        value: 'Yo yo yo! I am the best user'
    },
    {
        key: 'Age', 
        value: 'Soon to be 27'
    },    
    {
        key: 'Country', 
        value: 'Sweden'
    },    
    {
        key: 'Job', 
        value: 'Engineer'
    }
]

const baseLink = 'http://localhost'


describe('Profile test suite', () => {

    let container : HTMLDivElement
    
    const authServiceMock = {getUserAttributes: jest.fn()}

    beforeAll(() => {
        authServiceMock.getUserAttributes.mockResolvedValue(userAttributes)
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterAll(() => {
        document.removeChild(container)
        container.remove()
        jest.clearAllMocks()
    })


    describe('With a logged in user', () => {

        beforeEach(() => ReactDOM.render(
            <Profile user={someUser} authService={authServiceMock as any}/>
        , container))

        test('Renders correct HTML-elements', () => {
            const heading = document.querySelector('h2')
            const list = document.querySelector('ul')
            const listItems = document.querySelectorAll('li')

            expect(heading).toBeInTheDocument()
            expect(list).toBeInTheDocument()
            expect(listItems.length).toBe(4)
        })    

    })

    describe('Without a logged in user', () => {

        beforeEach(() => ReactDOM.render(
            <StaticRouter><Profile user={undefined} authService={authServiceMock as any}/></StaticRouter>
        , container))

        test('Renders correct HTML-elements', () => {
            const info = document.querySelector('p')
            const loginLink = document.querySelector('a') as HTMLAnchorElement

            expect(info).toBeInTheDocument()
            expect(info).toHaveTextContent('Please login to see profile details')
            expect(loginLink.href).toBe(baseLink + '/login')
        })   

    })

})
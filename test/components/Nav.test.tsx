import ReactDOM from 'react-dom'
import { StaticRouter } from 'react-router'

import Nav from '../../src/components/Nav'
import { User } from '../../src/models/Model'



const someUser: User = {
    name: 'user',
    email: 'user@email.com'
}

const baseLink = 'http://localhost'


describe('Navbar test suite', () => {
    let container : HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterEach(()=> {
        document.body.removeChild(container)
        container.remove()
    })

    
    test('Renders correct HTML-elements with user', () => {
        ReactDOM.render(<StaticRouter><Nav user={someUser}/></StaticRouter>, container)

        const homeLink = document.querySelector('a[data-test-id="home"]') as HTMLAnchorElement
        const profileLink = document.querySelector('a[data-test-id="profile"]') as HTMLAnchorElement
        const spacesLink = document.querySelector('a[data-test-id="spaces"]') as HTMLAnchorElement
        const loginLink = document.querySelector('a[data-test-id="login"]') as HTMLAnchorElement

        expect(homeLink.href).toBe(baseLink + '/')
        expect(profileLink.href).toBe(baseLink + '/profile')
        expect(spacesLink.href).toBe(baseLink + '/spaces')
        expect(loginLink.href).toBe(baseLink + '/login')
        expect(loginLink).toHaveTextContent('Logout')
    })


    test('Renders correct HTML-elements without user', () => {
        ReactDOM.render(<StaticRouter><Nav user={undefined}/></StaticRouter>, container)

        const homeLink = document.querySelector('a[data-test-id="home"]') as HTMLAnchorElement
        const profileLink = document.querySelector('a[data-test-id="profile"]') as HTMLAnchorElement
        const spacesLink = document.querySelector('a[data-test-id="spaces"]') as HTMLAnchorElement
        const loginLink = document.querySelector('a[data-test-id="login"]') as HTMLAnchorElement

        expect(homeLink.href).toBe(baseLink + '/')
        expect(profileLink.href).toBe(baseLink + '/profile')
        expect(spacesLink.href).toBe(baseLink + '/spaces')
        expect(loginLink.href).toBe(baseLink + '/login')
        expect(loginLink).toHaveTextContent('Login')
    })
})
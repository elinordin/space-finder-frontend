import ReactDOM from 'react-dom'
import Login from '../../src/components/Login'
import { fireEvent, waitFor } from '@testing-library/react'
import history from '../../src/utilities/history'
import { User } from '../../src/models/Model'


const someUser: User = {
    name: 'user',
    email: 'user@email.com'
}


describe('Login component test suite', () => {

    //Mocking the functions needed as props in our Login-component
    const authServiceMock = {login: jest.fn()}
    const setUserMock = jest.fn()
    const historyMock = history
    history.push = jest.fn()

    let container : HTMLElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(
            <Login authService={authServiceMock as any} setUser={setUserMock}/>,
            container
        )
    })

    afterEach(() => {
        document.body.removeChild(container)
        container.remove()
        jest.clearAllMocks()
    })

    test('Renders correct HTML-elements', () => {
        const title = document.querySelector('h2')
        expect(title).toBeDefined()

        const inputs = document.querySelectorAll('input')
        expect(inputs).toHaveLength(3)
        expect(inputs[0].type).toBe('text')
        expect(inputs[0].id).toBe('userName')
        expect(inputs[1].type).toBe('password')
        expect(inputs[1].id).toBe('password')
        expect(inputs[2].type).toBe('submit')
        expect(inputs[2].value).toBe('Login')

        const message = document.querySelector('.message')
        expect(message).not.toBeInTheDocument()
    })


    test('Passes credentials correctly', () => {
        const userNameInput = document.querySelector('input#userName')!
        const passwordInput = document.querySelector('input#password')!
        const loginButton = document.querySelector('input[type="submit"]')!

        fireEvent.change(userNameInput, {target:{value: 'aUserName'}})
        fireEvent.change(passwordInput, {target:{value: 'aPassword'}})
        fireEvent.click(loginButton)

        expect(authServiceMock.login).toBeCalledWith('aUserName', 'aPassword')
    })


    test('Correctly handles login success', async () => {
        authServiceMock.login.mockResolvedValueOnce(someUser)

        const userNameInput = document.querySelector('input#userName')!
        const passwordInput = document.querySelector('input#password')!
        const loginButton = document.querySelector('input[type="submit"]')!

        fireEvent.change(userNameInput, {target:{value: 'userName'}})
        fireEvent.change(passwordInput, {target:{value: 'password'}})
        fireEvent.click(loginButton)

        const message = await waitFor(() => container.querySelector('.message')!)
        expect(message).toBeInTheDocument()
        expect(message).toHaveTextContent('Login successful')
        expect(setUserMock).toBeCalledWith(someUser)
        expect(historyMock.push).toBeCalledWith('/profile')
    })


    test('Correctly handles login failure', async () => {
        authServiceMock.login.mockResolvedValueOnce(undefined)

        const userNameInput = document.querySelector('input#userName')!
        const passwordInput = document.querySelector('input#password')!
        const loginButton = document.querySelector('input[type="submit"]')!

        fireEvent.change(userNameInput, {target:{value: 'userName'}})
        fireEvent.change(passwordInput, {target:{value: 'password'}})
        fireEvent.click(loginButton)

        const message = await waitFor(() => container.querySelector('.message')!)
        expect(message).toBeInTheDocument()
        expect(message).toHaveTextContent('Login failed')
        expect(setUserMock).not.toBeCalled()
        expect(historyMock.push).not.toBeCalled()
    })
})
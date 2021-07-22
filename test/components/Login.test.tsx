import ReactDOM from 'react-dom'
import Login from '../../src/components/Login'

describe('Login component test suite', () => {

    //Mocking the functions needed as props in our Login-component
    const authServiceMock = {login: jest.fn()}
    const setUserMock = jest.fn()

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

    test('Contains all HTML-elements', () => {
        
    })
})
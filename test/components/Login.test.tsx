import { ReactDOM } from 'react-dom'
import Login from '../../src/components/Login'

describe('Login component test suite', () => {

    //Mocking the functions needed as props in our Login-component
    const authServiceMock = {login: jest.fn()}
    const setUserMock = jest.fn()

    beforeEach(() => {
        ReactDOM.render(
            <Login authService={authServiceMock as any} setUser={setUserMock}/>
        )
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Contains all HTML-elements', () => {
        
    })
})
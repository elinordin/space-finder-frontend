import ReactDOM from 'react-dom'
import { StaticRouter } from 'react-router'

import Nav from '../../src/components/Nav'
import { User } from '../../src/models/Model'



const someUser: User = {
    name: 'user',
    email: 'user@email.com'
}


describe('Navbar test suite', () => {
    let container : HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<StaticRouter><Nav user={someUser}/></StaticRouter>, container)
    })

    afterEach(()=> {
        document.body.removeChild(container)
        container.remove()
    })

    
    test('Renders correct HTML-elements', () => {
        
    })

})
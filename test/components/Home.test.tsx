import ReactDOM from 'react-dom'

import Home from '../../src/components/Home'

describe('Home test suite', () => {

    let container: HTMLDivElement

    beforeAll(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<Home/>, container)
    })

    afterAll(() => {
        document.removeChild(container)
        container.remove()
    })

    test('Renders correct HTML-elements', () => {
        const homeDiv = document.querySelector('div')

        expect(homeDiv).toHaveTextContent('Home page')
    })

})

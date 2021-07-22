import ReactDOM from 'react-dom'

import Spaces from '../../src/components/Spaces'


describe('Spaces test suite', () => {
    let container : HTMLDivElement

    const dataServiceMock = {
        getSpaceItems: jest.fn(),
        reserveSpace: jest.fn()
    }

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<Spaces dataService={dataServiceMock}/>, container)
    })

    afterEach(()=> {
        document.body.removeChild(container)
        container.remove()
    })

    
    
})
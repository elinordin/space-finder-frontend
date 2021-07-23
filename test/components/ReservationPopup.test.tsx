import ReactDOM from 'react-dom'

import ReservationPopup from '../../src/components/ReservationPopup'


describe('Popup test suite', () => {

    let container : HTMLDivElement

    const closeMock = jest.fn

    beforeAll(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterAll(() => {
        document.body.removeChild(container)
        container.remove()
    })


    describe('With available reservation', () => {
        beforeEach(() => {
            ReactDOM.render(<ReservationPopup visible={true} available={true} id='1' close={closeMock}/>, container)
        })
    })

    describe('With unavailable reservation', () => {
        beforeEach(() => {
            ReactDOM.render(<ReservationPopup visible={true} available={false} id='2' close={closeMock}/>, container)
        })
        
    })

})
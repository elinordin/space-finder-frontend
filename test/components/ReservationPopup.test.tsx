import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'

import ReservationPopup from '../../src/components/ReservationPopup'


describe('Popup test suite', () => {

    let container : HTMLDivElement

    const closeMock = jest.fn()

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


        test('Renders correct HTML-elements', () => {
            const background = document.querySelector('.background')
            const popup = document.querySelector('.popup')
            const heading = document.querySelector('h2')
            const bookingText = document.querySelector('p')
            const button = document.querySelector('.close-btn')

            expect(background).toBeInTheDocument()
            expect(popup).toBeInTheDocument()
            expect(heading).toBeInTheDocument()
            expect(bookingText).toBeInTheDocument()
            expect(button).toBeInTheDocument()
        })


        test('Renders the correct content', () => {
            const heading = document.querySelector('h2')
            const bookingText = document.querySelector('p')

            expect(heading).toHaveTextContent('Reservation successful')
            expect(bookingText).toHaveTextContent('Your booking ID is: 1')
        })


        test('Calls the close function on click of button', () => {
            const closeButton = document.querySelector('.close-btn')!
            fireEvent.click(closeButton)

            expect(closeMock).toHaveBeenCalled()
        })
    })


    describe('With unavailable reservation', () => {
        beforeEach(() => {
            ReactDOM.render(<ReservationPopup visible={true} available={false} id='2' close={closeMock}/>, container)
        })

        test('Renders the correct content', () => {
            const heading = document.querySelector('h2')
            const bookingText = document.querySelector('p')

            expect(heading).toHaveTextContent('Reservation failed')
            expect(bookingText).toHaveTextContent('Please try another day')
        })
        
    })


    describe('When it is not visible', () => {
        beforeEach(() => {
            ReactDOM.render(<ReservationPopup visible={false} available={false} id='2' close={closeMock}/>, container)
        })

        test('Renders no content', () => {
            const popup = document.querySelector('.popup')
            expect(popup).not.toBeInTheDocument()
        })
        
    })

})
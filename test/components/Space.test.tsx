import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'

import Space from '../../src/components/Space'


describe('Space test suite', () => {
    let container : HTMLDivElement

    const reserveMock = jest.fn()

    beforeAll(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterAll(()=> {
        document.body.removeChild(container)
        container.remove()
    })


    describe('Without photo-prop', () => {
        beforeEach(() => {
            ReactDOM.render(
                <Space 
                    id='1' 
                    name='Hotel' 
                    location='Stockholm' 
                    reserve={reserveMock}
                />
            , container)
        })


        test('Still renders a photo', () => {
            const image = document.querySelector('img')!
            expect(image.src).toBeTruthy()
        })


        test('Contains all correct list-items', () => {
            const listItems = document.querySelectorAll('li')!
            
            expect(listItems[0]).toHaveTextContent('1')
            expect(listItems[1]).toHaveTextContent('Hotel')
            expect(listItems[2]).toHaveTextContent('Stockholm')
        })


        test('Passes the right credentials to reserve function', () => {
            const reserveButton = document.querySelector('button')!
            fireEvent.click(reserveButton)

            expect(reserveMock).toBeCalledWith('1')
        })
        
    })


    describe('With photo-prop', () => {
        beforeEach(() => {
            ReactDOM.render(
                <Space 
                    id='1' 
                    name='Hotel' 
                    location='Stockholm' 
                    photo='https://picsum.photos/500/500' 
                    reserve={reserveMock}
                />
            , container)
        })

        
        test('Renders the correct photo', () => {
            const image = document.querySelector('img')!
            expect(image.src).toBe('https://picsum.photos/500/500')
        })
        
    })

    
    
})
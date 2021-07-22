import ReactDOM from 'react-dom'
import { fireEvent } from '@testing-library/react'

import Space from '../../src/components/Space'


describe('Space test suite', () => {
    let container : HTMLDivElement

    const reserveSpaceMock = jest.fn()

    beforeAll(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
    })

    afterAll(()=> {
        document.body.removeChild(container)
        container.remove()
    })


    describe('without photoURL', () => {
        beforeEach(() => {
            ReactDOM.render(
                <Space 
                    id='1' 
                    name='Hotel' 
                    location='Stockholm' 
                    reserve={reserveSpaceMock}
                />
            , container)
        })


        test('to still render a photo', () => {
            const image = document.querySelector('img')!
            expect(image.src).toBeTruthy()
        })
    })


    describe('with photoURL', () => {
        beforeEach(() => {
            ReactDOM.render(
                <Space 
                    id='1' 
                    name='Hotel' 
                    location='Stockholm' 
                    photo='https://picsum.photos/500/500' 
                    reserve={reserveSpaceMock}
                />
            , container)
        })

        
        test('to render the correct photo', () => {
            const image = document.querySelector('img')!
            expect(image.src).toBe('https://picsum.photos/500/500')
        })
    })

    
    
})
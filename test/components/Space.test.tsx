import ReactDOM from 'react-dom'

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


        test('my test', () => {

        })

    })


    describe('with photoURL', () => {
        beforeEach(() => {
            ReactDOM.render(
                <Space 
                    id='1' 
                    name='Hotel' 
                    location='Stockholm' 
                    photo='https://picsum.photos/400/300' 
                    reserve={reserveSpaceMock}
                />
            , container)
        })

        
        test('my test', () => {
            
        })

    })

    
    
})
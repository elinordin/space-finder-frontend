import ReactDOM from 'react-dom'
import { fireEvent, waitFor } from '@testing-library/react'

import Spaces from '../../src/components/Spaces'
import { SpaceItem } from '../../src/models/Model'
import { DataService } from '../../src/services/DataService'

const someSpaces: SpaceItem[] = [
    {
        id: '1',
        name: 'Hotell Havsbaden',
        location: 'Grisslehamn',
    },
    {
        id: '2',
        name: 'Steam Hotel',
        location: 'Västerås',
    },
    {
        id: '3',
        name: 'Yasuragi',
        location: 'Nacka',
    },
    {
        id: '4',
        name: 'Selma SPA',
        location: 'Sunne',
    }
]


describe('Spaces test suite', () => {
    let container : HTMLDivElement

    const dataServiceMock = {
        getSpaceItems: jest.fn(),
        reserveSpace: jest.fn()
    }

    beforeEach(() => {
        dataServiceMock.getSpaceItems.mockResolvedValue(someSpaces)
        container = document.createElement('div')
        document.body.appendChild(container)
        ReactDOM.render(<Spaces dataService={(dataServiceMock as any) as DataService}/>, container)
    })

    afterEach(()=> {
        document.body.removeChild(container)
        container.remove()
        jest.clearAllMocks()
    })


    test('Renders correct HTML-elements', () => {
        const wrapper = document.querySelector('ul')
        expect(wrapper).toBeInTheDocument()

        const spaces = document.querySelectorAll('.space-component')
        expect(spaces.length).toBe(4)

        const reserveButtons = document.querySelectorAll('button')
        expect(reserveButtons.length).toBe(spaces.length)

        const popup = document.querySelector('.popup')
        expect(popup).not.toBeInTheDocument()
    })

    
    test('Passes the right credentials to reserve function', () => {
        const reserveButtons = document.querySelectorAll('button')
        fireEvent.click(reserveButtons[0])

        expect(dataServiceMock.reserveSpace).toBeCalledWith('1')
    })


    test('Displays popup on click of reserve button', async () => {
        dataServiceMock.reserveSpace.mockResolvedValueOnce(true)
        const reserveButtons = document.querySelectorAll('button')
        fireEvent.click(reserveButtons[0])
        
        await waitFor(() => dataServiceMock.reserveSpace)

        const popup = await waitFor(() => document.querySelector('.popup'))
        expect(popup).toBeInTheDocument()      
    })


    test('Displays correct popup text on available reserve request', async () => {
        dataServiceMock.reserveSpace.mockResolvedValueOnce(true)
        const reserveButtons = document.querySelectorAll('button')
        fireEvent.click(reserveButtons[0])
        expect(dataServiceMock.reserveSpace).toBeCalledWith('1')
        
        await waitFor(() => dataServiceMock.reserveSpace)
        
        const popupHeading = document.querySelector('h2')
        expect(popupHeading).toHaveTextContent('Reservation successful')
        const bookingIdText = document.querySelector('p')
        expect(bookingIdText).toHaveTextContent('Your booking ID is: 1')
    })


    test('Displays correct popup text on unavailable reserve request', async () => {
        dataServiceMock.reserveSpace.mockResolvedValueOnce(false)
        const reserveButtons = document.querySelectorAll('button')
        fireEvent.click(reserveButtons[1])
        expect(dataServiceMock.reserveSpace).toBeCalledWith('2')
        
        await waitFor(() => dataServiceMock.reserveSpace)
        
        const popupHeading = document.querySelector('h2')
        expect(popupHeading).toHaveTextContent('Reservation failed')
        const bookingIdText = document.querySelector('p')
        expect(bookingIdText).toHaveTextContent('Please try another day')
    })


    test('Closes popup on click of close button', async () => {
        dataServiceMock.reserveSpace.mockResolvedValueOnce(true)
        const reserveButtons = document.querySelectorAll('button')
        fireEvent.click(reserveButtons[0])

        await waitFor(() => dataServiceMock.reserveSpace)

        const closeButton = await waitFor(() => document.querySelector('.close-btn')!)
        expect(closeButton).toBeInTheDocument()  
        fireEvent.click(closeButton)

        const popup = document.querySelector('.popup')
        expect(popup).not.toBeInTheDocument()
    })

})
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
        dataServiceMock.getSpaceItems.mockResolvedValueOnce(someSpaces)
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
    
})
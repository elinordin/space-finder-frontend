import React from 'react';
import { SpaceItem } from '../models/Model';
import { DataService } from '../services/DataService';
import ReservationPopup from './ReservationPopup';
import Space from './Space'

interface SpacesStates {
    spaces: SpaceItem[],
    popupVisible: boolean,
    popupId: string,
    available: boolean
}

interface SpacesProps {
    dataService: DataService
}

const styles = {
    grid: {
        padding: '30px 10%',
        display: 'grid',
        gridAutoRows: 'auto',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '20px'
    }
}

export default class Spaces extends React.Component<SpacesProps, SpacesStates> {
    
    constructor(props: SpacesProps) {
        super(props)
        this.state = {
            spaces: [],
            popupVisible: false,
            popupId: '',
            available: false
        }
        this.reserve = this.reserve.bind(this)
        this.close = this.close.bind(this)
    }

    
    async componentDidMount(){
        const spaces = await this.props.dataService.getSpaceItems()

        this.setState({spaces: spaces})
    }

    private async reserve(id: string){
        const response = await this.props.dataService.reserveSpace(id)

        this.setState({popupVisible: true, popupId: id, available: response})
    }

    private close(){
        this.setState({popupVisible: false})
    }

    render() {
        return (
            <ul style={styles.grid}>
                {this.state.spaces.map((space) => (
                    <Space key={space.id} id={space.id} name={space.name} location={space.location} reserve={this.reserve} />
                ))}

                <ReservationPopup 
                    visible={this.state.popupVisible} 
                    available={this.state.available} 
                    id={this.state.popupId} 
                    close={this.close}
                />
            </ul>
        )
    }
}
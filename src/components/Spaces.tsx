import React from 'react';
import { GeneratedIdentifierFlags } from 'typescript';
import { SpaceItem } from '../models/Model';
import { DataService } from '../services/DataService';
import Space from './Space'

interface SpacesStates {
    spaces: SpaceItem[]
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
        this.state = {spaces: []}
        this.reserve = this.reserve.bind(this)
    }

    
    async componentDidMount(){
        const spaces = await this.props.dataService.getSpaceItems()

        this.setState({spaces: spaces})
    }

    private async reserve(id: string){}

    render() {
        return (
            <ul style={styles.grid}>
                {this.state.spaces.map((space) => (
                    <Space key={space.id} id={space.id} name={space.name} location={space.location} reserve={this.reserve} />
                ))}
            </ul>
        )
    }
}
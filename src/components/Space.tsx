import React from 'react'

interface SpaceProps {
    id: string,
    name: string,
    location: string,
    photo?: string,
    reserve: (id: string) => void
}

export default class Space extends React.Component<SpaceProps>{
    render() {
        return (
            <div>
                <img src={this.props.photo? this.props.photo : 'https://picsum.photos/200/300'} alt=''/>
                <ul>
                    <li>{this.props.id}</li>
                    <li>{this.props.name}</li>
                    <li>{this.props.location}</li>
                </ul>
                <button onClick={() => this.props.reserve(this.props.id)}>Reserve</button>
            </div>

        )
    }
}
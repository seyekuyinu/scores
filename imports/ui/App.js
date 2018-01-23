import React from 'react';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

export default class App extends React.Component {

    render(){
        return(
            <div>

                <TitleBar title={this.props.title} subtitle="Created by Seye Kuyinu"/>
                <div  className="wrapper">
                    <PlayerList players = {this.props.players} />
                <AddPlayer/>
                </div>

            </div>
    );

    }
}


App.PropTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequred
}

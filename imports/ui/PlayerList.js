import React from 'react';
import Player from './Player';
import FlipMove from 'react-flip-move';


export default class PlayerList extends React.Component{

    renderPlayers(){

        if(this.props.players.length=== 0 ){

            return(
                <div className="item">

                    <p> Add your first players</p>

                </div>

            )



        }else{

            return this.props.players.map((player) => {

                return <Player key={player._id} player = {player}/>;





            });

        }


    }

    render(){
        return (
            <div>

                <FlipMove maintainContainerHeight={true}>
                {this.renderPlayers()}
                </FlipMove>

                </div>
        );
    };




};

PlayerList.propTypes = {
    players: React.PropTypes.array.isRequired
}
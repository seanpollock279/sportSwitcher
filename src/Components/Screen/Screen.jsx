import React from 'react';

import Icon from '../Icon/Icon';
import bike from '../../Assets/bicycle1.png';
import run from '../../Assets/exercise.png';

import '../Screen/Screen.scss';

class Screen extends React.Component {

    state = {
        icon: ''
    }

    toggleBike = () => this.setState({ icon: bike });
    toggleRun = () => this.setState({ icon: run });

    render(){
        return (
            <div className="screen">
                <div className="screen__icon">
                    <Icon icon={this.state.icon} />
                </div>
                <h3 className="screen__text">Select an activity!</h3>
                <div className="screen__btnContainer">
                    <button onClick={() => this.toggleBike()} className="screen__button">Ride</button>
                    <button onClick={() => this.toggleRun()} className="screen__button">Run</button>
                </div>
            </div>
        )
    }
}


export default Screen;
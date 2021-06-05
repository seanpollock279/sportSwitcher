import React from 'react';

import Icon from '../Icon/Icon';
import Toggle from '../Toggle/Toggle';

import bike from '../../Assets/bicycle1.png';
import run from '../../Assets/exercise.png';


import '../Screen/Screen.scss';

class Screen extends React.Component {

    state = {
        toggled: false,
    }

    toggle = () => this.setState({ toggled: !this.state.toggled });

    render(){
        return (
            <div className="screen fade-in-image">
                <div className="screen__icon">
                    {this.state.toggled ? 
                    <Icon icon={run}/> : <Icon icon={bike}/>}
                </div>
                <h3 className="screen__text">Select an activity!</h3>
                <div className="screen__btnContainer">
                    <Toggle onClick={() => this.toggle()} />
                </div>
                
            </div>
        )
    }
}


export default Screen;
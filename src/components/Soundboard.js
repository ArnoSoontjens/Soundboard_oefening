import React from 'react';
import "./soundboard.css";

class Soundboard extends React.Component {

    render() {
        return (
            <div className="soundboard">
                {this.props.children}
            </div>
        );
    }
};

export default Soundboard;
import React from 'react';
import "./item.css";

class Item extends React.Component {
    constructor(props) {
        super();
        this.name = props.item.name;
        this.img = props.item.img;
        this.sound = props.item.sound;

        this.state = {
            selected: false
        }
    }

    playSound = () => new Audio(this.sound).play();

    render() {
        return (
            <div
                className="item"
                onClick={this.playSound}
                onMouseEnter={() => this.setState({ selected: true })}
                onMouseLeave={() => this.setState({ selected: false })}
            >
                <div className={this.state.selected ? `name selected` : 'name'}>
                    {this.name}
                </div>
                <img src={this.img} alt={this.name} />
            </div>
        )
    }
};

export default Item;

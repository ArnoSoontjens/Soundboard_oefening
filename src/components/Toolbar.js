import React from 'react';

class Toolbar extends React.Component {

    constructor(props) {
        super();
        this.soundboards = props.soundboards;
    }

    onSelected = ({ target }) => {
        console.log(target.value);
        this.props.onSelect(target.value);
    }

    render() {
        return (
            <div className="toolbar">
                <select onChange={this.onSelected}>
                    {this.soundboards.map((soundboard, index) =>
                        <option key={index} value={index}>{soundboard.name}</option>
                    )}
                </select>
                <input
                    label="dieren"
                    value={this.props.filterValue}
                    onChange={({ target }) => this.props.onFilter(target.value)}
                />
            </div>
        );
    }
}

export default Toolbar;


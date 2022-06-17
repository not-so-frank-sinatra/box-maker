import React, { Component } from 'react';
import Box from './box';
import BoxForm from './boxForm';

class Boxlist extends Component {
    constructor(props) {
        super(props);
        this.state = { boxes: [] };
        this.create = this.create.bind(this);
    }
    create(newBox) {
        this.setState({ boxes: [...this.state.boxes, newBox] });
    }
    remove(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => (box.id !== id))
        })
    }
    render() {
        const boxes = this.state.boxes.map(box => (<Box key={box.id} id={box.id} color={box.color} height={box.height} width={box.width} removeBox={() => this.remove(box.id)} />));
        return (
            <div>
                <h1>Color Boxes</h1>
                <BoxForm createBox={this.create} />
                {boxes}
            </div>
        )
    }
}

export default Boxlist;
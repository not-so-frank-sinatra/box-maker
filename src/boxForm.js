import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '', width: '', color: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createBox({ ...this.state, id: uuidv4() });
        this.setState({ height: '', width: '', color: '' });
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='height'>Height</label>
                    <input type='text' name='height' value={this.state.height} id='height' onChange={this.handleChange} />
                    <label htmlFor='width'>Width</label>
                    <input type='text' name='width' value={this.state.width} id='width' onChange={this.handleChange} />
                    <label htmlFor='color'>Color</label>
                    <input type='text' name='color' value={this.state.color} id='color' onChange={this.handleChange} />
                    <button>Add Box</button>
                </div>
            </form>
        )
    }
}

export default BoxForm;
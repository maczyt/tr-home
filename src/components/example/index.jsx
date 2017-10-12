import React, { Component } from 'react';
import Todo from './Todo';
import Back from '../back';

export default class extends Component {

    renderItem() {
        const item = this.props.match.params.item;
        switch(item) {
            case 'todo':
                return <Todo />;
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                {this.renderItem()}
                <Back />
            </div>
        )
    }
}
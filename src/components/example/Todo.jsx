import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { observable, action, autorun, when, computed } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class extends Component {

    @observable isError = false;

    @action toggleButton() {
        this.isError = !this.isError;
    }

    get error() {
        return this.isError;
    }

    componentDidMount() {
    }

    render() {
        return <div style={{ width: '500px', margin: '100px auto' }}>
            <p>{this.error ? 'error' : 'ok'}</p>
            <RaisedButton label="确定" primary={true} onClick={this.toggleButton.bind(this)} />
        </div>
    }
}
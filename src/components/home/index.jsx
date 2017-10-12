import React, { Component } from 'react';
import S from '../side';
import M from '../main';
export default class extends Component {
    render() {
        return (
            <div>
                <M {...this.props} />
                <S />   
            </div>
        )
    }
}
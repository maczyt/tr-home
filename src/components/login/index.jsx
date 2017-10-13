import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Snackbar from 'material-ui/Snackbar';
import bg from './bg.jpg';
import authStore from '../../store/Auth';
import './style.css';

@observer
export default class extends Component {
    @observable username = '';
    @observable password = '';

    @observable open = false;
    @observable msg = '';
    @action changeUser(e) {
        this.username = e.target.value.trim();
    }
    @action changePw(e) {
        this.password = e.target.value.trim();
    }
    @action login(e) {
        if (this.username.length === 0) {
            this.hasError('账号不能为空');
        } else if (this.password.length === 0) {
            this.hasError('密码不能为空');
        } else {
            if (this.username !== 'root') {
                this.hasError('账号不存在');
            } else if (this.password !== 'root') {
                this.hasError('密码不正确');
            } else {
                authStore.login();
                const fromState = this.props.history.location.state;
                const fromPath = fromState ? fromState.from.pathname : '/';
                this.props.history.replace(fromPath); // history back
            }
        }
        
    }
    @action hasError(msg) {
        this.open = true;
        this.msg = msg;
    }
    @action closeError() {
        this.open = false;
    }
    render() {
        return (
            <div className="login">
                <Snackbar
                    open={this.open}
                    message={this.msg}
                    autoHideDuration={3000}
                    onRequestClose={this.closeError.bind(this)}
                />
                <main className="main">
                    <div className="form">
                        <div className="form-item">
                            <TextField
                                hintText="default: root"
                                floatingLabelText="账号"
                                defaultValue={this.username}
                                onChange={this.changeUser.bind(this)}
                            />
                        </div>
                        <div className="form-item">
                            <TextField
                                hintText="default: root"
                                floatingLabelText="密码"
                                type="password"
                                defaultValue={this.password}
                                onChange={this.changePw.bind(this)}
                            />
                        </div>
                        <div className="form-item">
                            <RaisedButton
                                label="登录"
                                labelPosition="before"
                                backgroundColor="#a4c639"
                                onClick={this.login.bind(this)}
                            />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
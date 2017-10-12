import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import ReactMarkdown from 'react-markdown';
import {grey600, grey50, grey500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Back from '../back';

export default class extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
            show: true,
        }
    }

    renderBack() {
        return <Back />
    }

    renderSide() {
        return (
            <Drawer open={true}>
                <List>
                    <Subheader>目录</Subheader>
                    <ListItem primaryText="2017" 
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="1月"
                            />
                        ]}
                    />
                    <ListItem primaryText="2016" />
                </List>
            </Drawer>
        )
    }

    renderMain() {
        const style = {
            marginLeft: '300px',
            paddingRight: '50px',
        };
        const containerStyle = {
            width: '100%',
            height: '600px',  
            display: 'flex',
            position: 'relative',
        };
        const textStyle = {
            display: 'block',
            flex: 1,
            outline: 'none',
            height: '100%',
            resize: 'none',
            border: 'none',
            padding: '25px',
            boxSizing: 'border-box',
            boxShadow: 'rgba(0, 0, 0, 0.12) 1px 0px 4px, rgba(0, 0, 0, 0.12) 1px 0px 2px',
            wordBreak: 'break-all',
        };
        const showStyle = {
            width: '50%',
            height: '100%',
            padding: '5px 20px',
            backgroundColor: grey600,
            color: grey50,
            boxSizing: 'border-box',
            overflowY: 'auto',
            transition: 'width ease 1s',
            opacity: 1,
        };
        return (
            <div style={{...style}}>
                <h1>admin</h1>
                <Paper style={{...containerStyle}} className="container" zDepth={1}>
                    <IconButton tooltip="Toggle" 
                        style={{position: 'absolute', right: '10px', top: '0'}}
                        onClick={this.toggleShow.bind(this)}
                    >
                        <FontIcon className="material-icons" color={grey500}>explore</FontIcon>
                    </IconButton>
                    <textarea style={{...textStyle}} value={this.state.text} onChange={this.inputText.bind(this)}>
                    </textarea>
                    <div style={{...showStyle, width: this.state.show ? '50%' : '0'}}>
                        <ReactMarkdown source={this.state.text}/>
                    </div>
                </Paper>
            </div>
        )
    }

    inputText(e) {
        this.setState({
            text: e.target.value,
        })
    }

    toggleShow() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div>
                {this.renderMain()}
                {this.renderSide()}
                {this.renderBack()}
            </div>
        )
    }
}
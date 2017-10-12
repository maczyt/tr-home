import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import { withRouter } from 'react-router-dom';

const Back = ({ history }) => {    
    const style = {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
    };
    return <div style={{...style}} onClick={(e) => history.goBack()}>
        <FloatingActionButton secondary={true}>
            <FontIcon className="material-icons">arrow_back</FontIcon>
        </FloatingActionButton>
    </div>
}

export default withRouter(Back);
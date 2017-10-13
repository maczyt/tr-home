import React from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import FontIcon from 'material-ui/FontIcon';
import {red500, deepPurple700, blue500} from 'material-ui/styles/colors';
import { Link } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import authStore from '../../store/Auth';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
const style = {
    overflowX: 'hidden',
}

@observer
class Side extends React.Component {
    @action logout() {
        authStore.logout();
        this.props.history.replace('/login');
    }
    render() {
        return (
            <Drawer open={true}>
                <Menu>
                    <Subheader>Main</Subheader>
                    <Link to="/"><MenuItem primaryText="首页" leftIcon={<FontIcon className="material-icons">home</FontIcon>} /></Link>
                    <Link to="/toutiao"><MenuItem primaryText="头条" leftIcon={<FontIcon className="material-icons" color={red500}>highlight</FontIcon>} /></Link>
                    <Link to="/tuku"><MenuItem primaryText="图库" leftIcon={<FontIcon className="material-icons" color={deepPurple700}>burst_mode</FontIcon>} /></Link>
                    <Link to="/wenzhang"><MenuItem primaryText="文章" leftIcon={<FontIcon className="material-icons" color={blue500}>textsms</FontIcon>} /></Link>
                    <Divider />
                    <Subheader>Example</Subheader>
                    <Link to="/example/todo"><MenuItem primaryText="Todo" leftIcon={<FontIcon className="material-icons">view_list</FontIcon>} /></Link>
                    <Divider />
                    <MenuItem onClick={this.logout.bind(this)} primaryText="退出" leftIcon={<FontIcon className="material-icons">keyboard_return</FontIcon>} />
                </Menu>
            </Drawer>
        )
    }
}

export default withRouter(Side);
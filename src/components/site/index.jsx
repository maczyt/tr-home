import React from 'react';
import IconButton from 'material-ui/IconButton';
import { GridTile } from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import lihuili from './timg.jpeg';
import { yellow500, yellow50 } from 'material-ui/styles/colors';
export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            starType: 'star_border',
            starColor: yellow50,
        }
    }

    toggleStar() {
        this.setState(prevState => ({
            starType: prevState.starType === 'star' ? 'star_border' : 'star',
            starColor: prevState.starColor === yellow500 ? yellow50 : yellow500,
        }))
    }

    render() {
        const tile = this.props.tile;
        const key = this.props.index;
        return (
            <GridTile
                {...this.props}
                key={key}
                title={tile.title}
                subtitle={<div>by <b>{tile.author}</b> <br /> <time>{tile.time}</time></div>}
                actionIcon={
                    <IconButton 
                        onClick={this.toggleStar.bind(this)}>
                        <FontIcon className="material-icons" color={this.state.starColor}>
                            {this.state.starType}
                        </FontIcon>
                    </IconButton>
                }
            >
                <img src={tile.img} />
            </GridTile>
        )
    }
}

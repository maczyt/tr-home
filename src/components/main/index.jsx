import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import { GridList } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router-dom';
import Site from '../site';
const style = {
    marginLeft: '300px',
    paddingRight: '50px',
};
const addStyle = {
    position: 'fixed',
    right: '50px',
    bottom: '50px',
    zIndex: 10,
};
const gridStyle = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
}
const Add = () => (
    <div style={{...addStyle}}>
        <Link to="/admin">
            <FloatingActionButton>
                <FontIcon className="material-icons">add</FontIcon>
            </FloatingActionButton>
        </Link>
    </div>
);

class Main extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        const match = this.props.match;
        try {
            fetch(`http://localhost:3001${match.url}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    this.setState({
                        data: Array.isArray(data) ? data : [],
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (err) {            
        }
    }

    getTitle() {
        const url = this.props.match.url;
        switch(url) {
            case '/wenzhang':
                return '文章';
            case '/tuku':
                return '图库';
            case '/toutiao':
            default:
                return '头条';
        }
    }

    renderHeader() {
        const title = this.getTitle();
        return <Subheader>{title}</Subheader>
    }

    renderSite() {
        const data = this.state.data.slice();
        return data.length ? data.sort((a, b) => a.time < b.time).map((d, i) => (
            i === 0 ?
                <Site 
                    cols={2}
                    rows={2}
                    key={i}
                    index={i}
                    tile={{
                        title: d.title,
                        author: d.author,
                        time: d.time,
                        img: d.img
                    }}
                />
            : <Site 
                key={i}
                index={i}
                tile={{
                    title: d.title,
                    author: d.author,
                    time: d.time,
                    img: d.img
                }}
            />
        )) : <img src={`http://fakeimg.pl/350x200/?text=${this.props.match.url.substr(1)}&font=lobster`} />;
            
    }

    render() {
        const { match } = this.props
        return (
            <div style={{...style}}>
                <Add />
                <div>
                    <GridList
                        cellHeight={180}
                        style={{...gridStyle}}
                        className="gridlist"
                    >
                        {this.renderHeader()}
                        {this.renderSite()}
                    </GridList>
                </div>
            </div>
        )
    }
    
}

export default Main;
import React from 'react';
import NProgress from 'nprogress';

function nProgress(target) {
    const superComponentWillMount = target.prototype.componentWillMount;
    const superComponentDidMount = target.prototype.componentDidMount;
    target.prototype.componentWillMount = function() {
        if (typeof superComponentWillMount === 'function') {
            superComponentWillMount.apply(this, arguments);
        }
        NProgress.start();
    };
    target.prototype.componentDidMount = function() {
        if (typeof superComponentDidMount === 'function') {
            superComponentDidMount.apply(this, arguments);
        }
        NProgress.done()
    };
}

@nProgress
class WrapLoading extends React.Component {
    render() {
        return this.props.children;
    }
}
export default WrapLoading;



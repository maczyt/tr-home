import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Admin from '../components/admin';
import Article from '../components/article';
import Home from '../components/home';
import Login from '../components/login';
import Example from '../components/example';
import WrapperLoading from '../components/utils/WrapLoading';
import AuthStore from '../store/Auth';

export const routes = [
    {
        path: '/',
        label: '首页',
        exact: true,
        component: Home,
    },
    {
        path: '/toutiao',
        label: '头条',
        component: Home,
    },
    {
        path: '/wenzhang',
        label: '文章',
        component: Home,
    },
    {
        path: '/tuku',
        label: '图库',
        component: Home,
    },
    {
        path: '/admin',
        label: '后台',
        component: Admin,
    },
    {
        path: '/login',
        label: '登录',
        component: Login,
    },
    {
        path: '/article/:id',
        component: Article,
    },
    {
        path: '/example/:item',
        component: Example
    }
];

const t = () => (
    <div>
        {
            routes.map((route, i) =>
                <Route
                    exact={route.exact}
                    path={route.path} key={i}
                    render={props => !AuthStore.isLoggin && route.path !== '/login' ?
                        <Redirect to={{ pathname: "/login", state: { from: props.location }}} /> 
                        : route.path !== '/' ? 
                        <WrapperLoading><route.component {...props}/></WrapperLoading> : 
                        <Redirect to={{ pathname: "/toutiao", state: { from : props.location }}}/> 
                    } 
                />
            )
        }
    </div>
);

export default t;
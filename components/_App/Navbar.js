import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from '../../utils/ActiveLink';
import classNames from "classnames";
import { Menu } from "@material-ui/icons";

class Navbar extends Component {
    _isMounted = false;

    state = {
        searchForm: false,
        collapsed: true,
    };

    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        let { pathname,asPath } = this.props.router;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let layOutCls = 'evolta-nav navbar-style-two';
        let layOutContainer = 'container';
        // if (pathname == '/'){
        //     layOutCls = 'evolta-nav';
        //     layOutContainer = 'container-fluid';
        // }

        return (
            <div id="navbar" className="navbar-area is-sticky">
                <div className={layOutCls}>
                    <div className={layOutContainer}>
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    Mbinu
                                </a>
                            </Link>

                            <span 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                {/* <span className="navbar-toggler-icon"></span> */}
                                <Menu />
                            </span>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/categories/front-end">
                                            <a className={
                                                classNames('nav-link',{
                                                    'active' : asPath === "/categories/front-end"
                                                })
                                            }>Front-end</a>
                                        </Link>
                                    </li>
                                    

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/categories/back-end">
                                            <a className={
                                                classNames('nav-link',{
                                                    'active' : asPath === "/categories/back-end"
                                                })
                                            }>Back-end</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/categories/databases">
                                            <a className={
                                                classNames('nav-link',{
                                                    'active': asPath === "/categories/databases"
                                                })
                                            }>Databases</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/categories/apis">
                                            <a className={
                                                classNames('nav-link',{
                                                    'active': asPath === "/categories/apis"
                                                })
                                            }>A.P.I's</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className={
                                                classNames('nav-link',{
                                                    'active': pathname === "/about"
                                                })
                                            }>About</a>
                                        </Link>
                                    </li>
                                </ul>


                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Navbar);

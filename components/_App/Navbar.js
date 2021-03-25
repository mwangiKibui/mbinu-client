import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Link from '../../utils/ActiveLink';

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

    // componentDidMount() {
    //     this._isMounted = true;
    //     let elementId = document.getElementById("navbar");
    //     document.addEventListener("scroll", () => {
    //         if (window.scrollY > 170) {
    //             elementId.classList.add("is-sticky");
    //         } else {
    //             elementId.classList.remove("is-sticky");
    //         }
    //     });
    //     window.scrollTo(0, 0);
    // }

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render() {
        let { pathname } = this.props.router;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let layOutCls = 'evolta-nav navbar-style-two';
        let layOutContainer = 'container';
        if (pathname == '/'){
            layOutCls = 'evolta-nav';
            layOutContainer = 'container-fluid';
        }

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

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/front-end">
                                            <a className="nav-link">Front-end</a>
                                        </Link>
                                    </li>
                                    

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/back-end">
                                            <a className="nav-link">Back-end</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/databases">
                                            <a className="nav-link">Databases</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/apis">
                                            <a className="nav-link">A.P.I's</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/team">
                                            <a className="nav-link">Team</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/about">
                                            <a className="nav-link">About us</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
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

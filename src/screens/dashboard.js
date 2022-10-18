import React from 'react'
import '../styles/dashboard/dashboard.css';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='body-dashboard'>
            <div className="grid-container">
                <div className="menu-icon">
                    <i className="fas fa-bars header__menu"></i>
                </div>

                <header className="header">
                    <div className="header__search">Search...</div>
                    <div className="header__avatar">Your face</div>
                </header>

                <aside className="sidenav">
                    <div className="sidenav__close-icon">
                        <i className="fas fa-times sidenav__brand-close"></i>
                    </div>
                    <ul className="sidenav__list">
                        <Link to="billing"><li className="sidenav__list-item">Billing</li></Link>
                        <li className="sidenav__list-item">Item Two</li>
                        <li className="sidenav__list-item">Item Three</li>
                        <li className="sidenav__list-item">Item Four</li>
                        <li className="sidenav__list-item">Item Five</li>
                    </ul>
                </aside>

                <main className="main">
                    <div className="main-header">
                        <div className="main-header__heading">Hello User</div>
                        <div className="main-header__updates">Recent Items</div>
                    </div>

                    <div className="main-overview">
                        <Link to="billing">
                            <div className="overviewcard">
                                <div className="overviewcard__icon">BILLING</div>
                                <div className="overviewcard__info">Card</div>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="overviewcard">
                                <div className="overviewcard__icon">Item</div>
                                <div className="overviewcard__info">Card</div>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="overviewcard">
                                <div className="overviewcard__icon">Item</div>
                                <div className="overviewcard__info">Card</div>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="overviewcard">
                                <div className="overviewcard__icon">Item</div>
                                <div className="overviewcard__info">Card</div>
                            </div>
                        </Link>
                    </div>
                </main>

                <footer className="footer">
                    <div className="footer__copyright">&copy; 2018 MTH</div>
                    <div className="footer__signature">Made with love by pure genius</div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard
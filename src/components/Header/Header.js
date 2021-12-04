import React from 'react';
import './Header.css';
// import logo from '../../../images/programming.png'

const Header = () => {
    return (
        <div>
            <div className=" bg-primary ">
                <nav className="navbar navbar-dark bg-dark border border-success rounded  ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            {/* <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top" /> */}
                            Programming Hero
                        </a>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search Programmer" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit" >Search</button>
                        </form>

                    </div>
                </nav>

                <h1 className="text-center">Total Programmer: 10</h1>

            </div>

        </div>

    );

};




export default Header;
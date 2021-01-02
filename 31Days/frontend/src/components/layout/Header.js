import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
                 style={{justifyContent: "center"}}>
                <span className="h1">31 Days</span>

            </nav>
        );
    }

}

export default Header;
import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top"
                 style={{justifyContent: "center"}}>
                <span className="h1 text-light">7 Days</span>

            </nav>
        );
    }

}

export default Header;
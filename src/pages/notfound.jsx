import React, { Component } from 'react';
import '../css/style.css'

class Notfound extends Component {
    
    render() { 
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                    <h1>404</h1>
                    </div>
                    <h2>Oops, The Page you are looking for can't be found!</h2>
                    <form className="notfound-search">
                        <input type="text" placeholder="Search..." />
                        <button type="button">Search</button>
                    </form>
                    <a href="http://localhost:3000/">
                        <span className="arrow" />
                        Return To Homepage
                    </a>
                </div>
            </div>
          );
    }
}
 
export default Notfound;
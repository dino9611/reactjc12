import React, { Component } from 'react';



class Nama extends Component {
    state = {  }
    render() { 
        return (
            <div style={this.props.containerstyle} className='kotak'>
                {this.props.children}
            </div>
          );
    }
}
 
export default Nama;
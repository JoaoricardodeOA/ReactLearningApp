import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

  render() {
    return (
      <div>
        <header>
            <nav className="navbar navbar-expand-md navbar-black bg-dark">
                <div style={{marginLeft:"1%"}}><a  href="https://www.google.com" className="navbar-brand text-white" >  Ir ao google</a></div>
            </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponent
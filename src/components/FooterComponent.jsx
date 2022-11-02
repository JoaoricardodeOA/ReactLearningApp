import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    render() {
    return (
        <div>
            <footer className="footer"> 
                <div className="text-center">
                <span className="text-muted">All-rights reserved 2022 @Joao Agostinho </span>
                </div>
            </footer>
        </div>
    )
  }
}
export default FooterComponent

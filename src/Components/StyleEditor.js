import React, {Component} from 'react'
import ReactDOM from "react-dom"
import {PrismCode} from "react-prism"

class StyleEditor extends Component {
      constructor (props) {
          super(props)
          this.state = {
              
          }
      }
      componentDidUpdate() {
          ReactDOM.findDOMNode(this).scrollTop = 10000;
      }
      render() {
          return (
              <div className="styleEditor">
                  <style>{this.props.code}</style>
                  <pre><PrismCode className="language-css">{this.props.code}</PrismCode></pre>
              </div>
          )
      }
}

export default StyleEditor
import React, {Component} from 'react'
import ReactDOM from "react-dom"

class StyleEditor extends Component {
      constructor (props) {
          super(props)
          this.state = {
              code: this.props.code,

          }

      }
      addStyle() {

      }
      componentDidUpdate() {
          ReactDOM.findDOMNode(this).scrollTop = 10000;
      }
      render() {
          return (
              <div>
                  
              </div>
          )
      }
}

export default StyleEditor
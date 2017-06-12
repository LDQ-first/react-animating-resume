import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Prism from 'prismjs'

class StyleEditor extends Component {
      constructor (props) {
          super(props)
          this.state = {
              code: this.props.code,

          }

      }
      componentDidUpdate() {
          ReactDOM.findDOMNode(this).scrollTop = 10000;
      }
      render() {
          return (
              <div>
                  <div></div>
              </div>
          )
      }
}

export default StyleEditor
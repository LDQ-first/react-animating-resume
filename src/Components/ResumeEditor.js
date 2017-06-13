import React, {Component} from 'react'
import marked from "marked"

class ResumeEditor extends Component {
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
              <div className="resumeEditor">
                  <div></div>
                  <pre></pre>
              </div>
          )
      }
}

export default ResumeEditor
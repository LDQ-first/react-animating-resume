import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import marked from "marked"

class ResumeEditor extends Component {
    constructor (props) {
          super(props)
          this.state = {

          }
      }
      resume() {
          return {
              __html: this.props.enableHtml ? marked(this.props.content) : this.props.content
          }
      }
      componentDidUpdate() {
          ReactDOM.findDOMNode(this).scrollTop = 10000;
      }
      render() {
          return (
              <div className="resumeEditor">
                  <pre dangerouslySetInnerHTML= {this.resume()}></pre>
              </div>
          )
      }
}

export default ResumeEditor
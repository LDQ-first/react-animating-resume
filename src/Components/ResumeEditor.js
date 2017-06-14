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
      pureResume() {

      }
      componentDidUpdate() {
          /*ReactDOM.findDOMNode(this).scrollTop = 10000;*/
         /* this._resumeEditor.scrollTop = 10000;*/
      }
      render() {
          return (
              <div className="resumeEditor" ref={resumeEditor => this._resumeEditor = resumeEditor}>
                  <pre dangerouslySetInnerHTML= {this.resume()}></pre>
              </div>
          )
      }
}

export default ResumeEditor
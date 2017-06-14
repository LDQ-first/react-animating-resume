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
         const len = this.resume().__html.length;
         const lastChar = this.resume().__html.substring(len-2, len-1);
         if(lastChar === '\n') {
             ReactDOM.findDOMNode(this).scrollTop = 10000;
         }
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
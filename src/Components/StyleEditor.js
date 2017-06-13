import React, {Component} from 'react'
import ReactDOM from "react-dom"
import Prism from "prismjs"
import {PrismCode} from "react-prism"
import styled from 'styled-components'

const StyleEditors = styled.div`
    &.showCode {
         transform: translate(-50%, 0);
        opacity: 1;
    }
`



class StyleEditor extends Component {
      constructor (props) {
          super(props)
          this.state = {
              
          }
      }
      controlCode() {
         /* this.refs.container.classList.toggle('showCode');*/
         console.log(this._styleEditor);
         this._styleEditor.classList.toggle('showCode');
      }
      componentDidUpdate() {
          ReactDOM.findDOMNode(this).scrollTop = 10000;
      }
      render() {
          return (
              <StyleEditors className="styleEditor" ref={ styleEditor => this._styleEditor = styleEditor }>
                  <style>{this.props.code}</style>
                  <pre><PrismCode className="language-css">{this.props.code}</PrismCode></pre>
              </StyleEditors>
          )
      }
}

export default StyleEditor
import './newdairy.css';
import React, { Component } from 'react'
import Remarkable from "remarkable";
import {Modal,Button, Input, Alert } from 'antd';

import axios from 'axios'

const { TextArea } = Input;



// import './style.css'

class Newdairy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', content: '', visible: false };
    this.handleClick  = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.error=this.error.bind(this);
  }

  render() {
    return (
      <div>
        <div>Newdairy</div>

          <div >
            <TextArea placeholder="日志标题" autoFocus="autofocus" autosize={{ minRows:1, maxRows: 2 }}
              onChange={this.handleChange}
              value={this.state.title}
            />

            <div style={{ margin: '25px 0' }} />
            <TextArea placeholder="日志内容" autosize={{ minRows: 7, maxRows: 12 }}
            onChange={this.contentChange}

            value={this.state.content}
            />



            <h3>文本预览</h3>

                <div
                    className="new-content"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
              <div  className='buttonTwo'>
                <Button className='dairyButton' onClick={this.handleClick}>
                  提交
                </Button>
                <Button className='cancelButton' onClick={this.handleCancel}>
                  取消
                </Button>
                <div>{this.state.text}</div>
               </div>

          </div>



      </div>
    );
  }

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.content) };
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }
  contentChange(e) {
    console.log('change')
    this.setState({ content: e.target.value });
    console.log(e.target.value)
  }
  handleCancel(){
    this.props.close()

  }



  error() {
            Modal.error({
              title: '标题不能为空啊喂',
            });
}
  handleClick(e){
    if (!this.state.title.length) {

    this.error()

      return;
    }
    this.postData()
  }

  postData(){
    var data = {
      title: this.state.title,
      content: this.state.content,
    }
    axios.post('/api/dairy/add', data).then((res)=>{
      console.log('response', res);
      this.props.close()
    })
  }
  handleCancel(){
    this.props.close()

  }
}



export default Newdairy;

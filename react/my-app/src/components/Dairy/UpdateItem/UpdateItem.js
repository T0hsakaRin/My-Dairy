import React, { Component } from 'react'
import Remarkable from "remarkable";
import {Modal,Button, Input } from 'antd';
import axios from 'axios'
import './UpdateItem.css';
const { TextArea } = Input;
// import './Dairy.css';

// import './style.css'

class UpdateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item:{}, title: '', content: ''}
    this.handleClick  = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
  }

  updateState(){
    var item = this.props.item
    item = JSON.parse(JSON.stringify(item))
    this.setState({
      item: item,
    })
  }
  componentDidMount(){
    this.updateState()
  }
  render() {
    // this.updateState()
    return (
      <div className='newDairy'>


          <div className='newDairy'>
            <TextArea placeholder="日志标题" autosize={{ minRows:1, maxRows: 1}}
              value={this.state.item.title}
              onChange = {this.handleChange}
            />
            <div style={{ margin: '25px 0' }} />
            <TextArea placeholder="日志内容" autosize={{ minRows: 5, maxRows: 10 }}
              value={this.state.item.content}
              onChange = {this.contentChange}
              />

            <h3 style={{marginTop: '20px' }}>文本预览</h3>
            <div
                  className="content"
                  dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
            <div className='divButton'>
              <Button  className='dairyButton' onClick={this.handleClick}>
                确认修改
              </Button>
            </div>


      </div>
    );
  }
  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.item.content) };
  }

  handleChange(e) {
    var item = this.state.item
    item.title = e.target.value
    this.setState({item: item});
    // this.title = e.target.value
    // console.log('eee', e.target.value);
  }
  contentChange(e) {
    this.content = e.target.value
    var item = this.state.item
    item.content = e.target.value
    this.setState({item: item});
  }


  handleClick(e){
    if (!this.state.item.title.length) {
        this.error()
      return;
    }
    this.postData()
  }
  error() {
            Modal.error({
              title: '标题还没写啊喂',
            });
  }
  postData(){
    var data = {
      id: this.props.item.id,
      title: this.state.item.title,
      content: this.state.item.content,
    }
    axios.post('/api/dairy/update', data).then((res)=>{
      console.log('response', res);
      this.props.updated()
    })
  }
}



export default UpdateItem;

import React from "react";
import axios from 'axios'
import Remarkable from "remarkable";
import {Modal, Button, Icon, Card } from 'antd';
import NewDairy from './Newdairy/newdairy'
import MarkdownEditor from '../Markdown/Markdown'
import UpdateItem from './UpdateItem/UpdateItem'
import { BackTop } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './style.css'

class Dairy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: [], isAdd: false, visible: false, updateItem:{}}
    this.add = this.add.bind(this)
    this.close = this.close.bind(this)
    this.remove = this.remove.bind(this)
    this.contentStyle = {
      background: '#F9F9F9',
      display:'flex',
      justifyContent: 'flex-start'
    }
  }
  render() {
    return (
      <div className="dairy-box">
        <div className='div-add' onClick={this.add}>
          <Icon className= 'plus-circle' type="plus-circle" style={{fontSize: 60}}/>
        </div>
        {
          this.state.isAdd ?
          <NewDairy type='add' close={this.close}/> : ''
        }
        {this.state.list.map((item)=>{
          return(
            <Card bodyStyle={this.contentStyle}  hoverable={true} bordered={true} className='dairy-item-card' key={item.id} title={<div>{item.title}</div>}  extra={
                <div className= 'buttonTwo'>
                  <a onClick={(e) => this.showModal(item, e)}>
                    <Icon className= 'edit' type="edit" />
                  </a>
                  <a onClick={(e) => this.remove(item.id, e)} href="#">
                    <Icon className= 'delete' type="delete" />
                  </a>
                </div>}>
                <div


              />
            <div className='md-content' key={item.id} dangerouslySetInnerHTML={this.getRawMarkup(item)}></div>

            </Card>
          )
        })}
        <Modal
         width = {920}
         title="更新日志"
         visible={this.state.visible}
         onCancel={this.handleCancel}
         footer={null}
         >
           <UpdateItem key={this.state.updateItem.id} updated={this.update} type='update' item={this.state.updateItem}/>
         </Modal>
         <div>
           <BackTop />

           <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> </strong>
         </div>
      </div>
    )
  }
  getRawMarkup(item) {
    console.log('item', item);
    const md = new Remarkable();
    var html = { __html: md.render(item.content) };
    console.log('html', html);
    return html
  }


  remove(id, e){
    e.preventDefault()
    console.log('id is',id, e)
    var data = {
      id
    }
    axios.post('/api/dairy/delete', data).then((res)=>{
      console.log('response', res);
      this.getData()
      // this.props.close()
    })

  }


  componentDidMount(){
    this.getData()
  }

  add(){
    this.setState({
      isAdd: true
    })
  }

  close(){
    this.setState({
      isAdd: false
    })
    this.getData()
  }
  getData(){
    axios.get('/api/dairy/all').then((res)=>{
      console.log('response', res);
      var data = res.data.reverse()
      this.setState({list: data})
    })
  }

  // moadl
  showModal = (item, e) => {
    e.preventDefault()
    console.log('item update', item);
    this.setState({
      visible: true,
      updateItem: item,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  update =(e)=>{
    console.log('update in dairy', e);
    this.handleOk()
    this.getData()
  }
}

export default Dairy;

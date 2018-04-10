import React from "react";
import './router.css';

import { Layout } from 'antd';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoApp from '../components/Todo/Todo.js';
import Dairy from '../components/Dairy/Dairy.js';
import Swiper from '../components/Swiper/swiper.js';
import CMenu from '../components/Menu/Menu.js';
import MarkdownEditor from '../components/Markdown/Markdown.js';

const { Header, Footer, Sider, Content } = Layout;
class CRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        option:{
            auto: true,
            time: 15000,
        }
    }

  }
  render() {
    return (
      <Router >
        <div className='Content'>
          <Layout className='layout' style={{minHeight: document.body.clientHeight}}>
            <Sider>
              <div>
                <CMenu/>
              </div>
            </Sider>
            <Layout >
              <Content className='vertical'>
                <Route exact path="/" component={TodoApp} />
                <Route path="/dairy" component={Dairy} />
                <Route path="/swiper" component={Swiper} />
                <Route path="/markdown" component={MarkdownEditor} />
                {document.body.clientHeigh}
              </Content>
            </Layout>
          </Layout>
        </div>

      </Router>
    );
  }
}

export default CRouter;

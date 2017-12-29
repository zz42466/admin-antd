import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class Login extends Component {
  render() {
    return (<div className="login" style={{ width: '368px', margin: '0 auto', paddingTop: '240px' }}>
      <div className="login-form" >
        <div className="login-logo">
          <span>React Admin</span>
        </div>
        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
          <FormItem>
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="管理员输入admin, 游客输入guest" />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="管理员输入admin, 游客输入guest" />
          </FormItem>
          <FormItem>
            <Checkbox>记住我</Checkbox>
            <a className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              登录
            </Button>
            <p style={{ display: 'flex', justifyContent: 'space-between' }}>
              <a href="">或 现在就去注册!</a>
              <a onClick={this.gitHub} ><Icon type="github" />(第三方登录)</a>
            </p>
          </FormItem>
        </Form>
      </div>
    </div>)
  }
}

export default Login;
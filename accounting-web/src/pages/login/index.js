import React from "react";
import {Button, Checkbox, Form, Icon, Input} from "antd";
import "./index.css";

const FormItem = Form.Item;

@Form.create()
class Login extends React.Component {
    componentDidMount() {
        document.title = '登录';
        console.log(this.props)
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login-page" >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{required: true, message: '请输入用户名！'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('userpwd', {
                            rules: [{required: true, message: '请输入密码！'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="密码"/>
                        )}
                    </FormItem>
                    <FormItem className="last">
                        <Checkbox>记住用户</Checkbox>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (err) return;
            const res = {code: 0};
            if (res.code === 1) {
            } else if (res.code === 0) {

                const {history, onLogin} = this.props;
                onLogin ? onLogin() : history.push('/admin/index');
            }
        });
    }
}

export default Login
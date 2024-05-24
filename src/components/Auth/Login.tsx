
import { useState } from 'react';
import { Form, Input, Button, Card, Typography, message } from 'antd';
import { useMutation } from '@apollo/client';
import { Client, setTokens } from '../../tools/ApolloClient';
import { UserLogin, UserSignup } from '../../generated/Models/model';
import { LoginToken, SignupToken, LoginUserType, SignupUserType } from '../types/user';
import { useUser } from '../../tools/Context';
import { useNavigate } from 'react-router';
import { NewUser } from '../../generated/models/Graphs';

const { Title } = Typography;

type UserLoginForm = {
  email: string,
  password: string,
  name?: string,
}

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [login] = useMutation<LoginToken, LoginUserType>(UserLogin, { client: Client, fetchPolicy: 'no-cache' })
  const [signup] = useMutation<SignupToken, SignupUserType>(UserSignup, { client: Client, fetchPolicy: 'no-cache' })
  const [loading, setLoaading] = useState<boolean>(false)
  const userProps = useUser()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };
  const onFinish = async (values: UserLoginForm) => {
    const { name, email, password } = values
    setLoaading(true)
    if (isRegister) {
      if (name === undefined) {
        return
      }
      const input: NewUser = { name: name, password: password, email: email }
      await signup({ variables: { input: input } }).then(resp => {
        const data = resp.data?.auth.register
        if (data?.token !== undefined) {
          if (userProps !== undefined && userProps.user === undefined) {
            userProps.setUser({ name: data.user.name, email: data.user.email })
          }
          setTokens(data.token.accessToken, data.token.refreshToken)
          navigate('/')
          setLoaading(false)
        }
      })
        .catch(err => console.log(">>", err))
    } else {
      await login({ variables: { password: password, email: email } }).then((resp) => {
        const data = resp.data?.auth.login
        if (data?.token !== undefined) {
          if (userProps !== undefined && userProps?.user === undefined) {
            userProps.setUser({ name: data.user.name, email: data.user.email })
          }
          setTokens(data.token.accessToken, data.token.refreshToken)
        }
        navigate('/')
      })
        .catch(err => {
          console.log("zz", err)
          form.setFields([{
            name: 'password',
            value: '',
            errors: ['Login failed. Please check your email and password']
          }])
          message.error('Login faile. Please check your email and password');

        })
        .finally(() => setLoaading(false))
    }
  };

  return (
    <Card style={{ width: 400, margin: '0 auto', marginTop: 50 }}>
      <Title level={3} style={{ textAlign: 'center' }}>
        {isRegister ? 'Register' : 'Login'}
      </Title>
      <Form
        form={form}
        name="auth_form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        {isRegister && (
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input />
          </Form.Item>
        )}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { type: 'email', message: 'The input is not valid E-mail!' },
            { required: true, message: 'Please input your E-mail!' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {isRegister ? 'Register' : 'Login'}
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="link" onClick={handleToggle} block>
            {isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Register'}
          </Button>
        </Form.Item>
      </Form>
      {loading ? "Wait..." : ""}
    </Card>
  );
};


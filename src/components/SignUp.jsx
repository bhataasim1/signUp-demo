import { Button, Checkbox, Form, Input } from "antd";
import myImage from "../assets/img.jpeg";
import './signup.css'; // Assuming you have a CSS file for custom styles

const SignUp = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container flex sign-up-container">
      <div className="image-container">
        <img src={myImage} alt="myImage" />
      </div>
      <div className="form-container">
        <div className="form-header">
          <h1 className="font-bold">Sign Up</h1>
          <h3>
            or <span className="text-green-700">sign In</span>
          </h3>
        </div>
        <Form
          name="basic"
          style={{
            maxWidth: 400,
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#f9f9f9'
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="ConfirmPassword"
            rules={[
              {
                required: true,
                message: "Confirm your password!",
              },
            ]}
          >
            <Input.Password placeholder="Re-Enter Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500 rounded-full"
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;

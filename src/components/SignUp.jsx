import { Button, Checkbox, Form, Input } from "antd";
import myImage from "../assets/img.jpeg";

const SignUp = () => {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
  return (
    <div className="container flex">
      <div>
        <img src={myImage} alt="myImage" />
      </div>
      <div className="mt-40">
        <h1 className="font-bold px-8">Sign Up</h1>
        <h3 className="flex">
          or <span className="text-green-700">sign In</span>
        </h3>
      </div>
      <div className="flex justify-center items-center">
        {/* <form action="" className="mt-2">
          <Input
            placeholder="email"
            type="email"
            className="flex px-20 rounded-xl mt-2"
          />
          <Input
            placeholder="password"
            type="password"
            className="flex px-20 rounded-xl mt-2"
          />
          <Input
            placeholder="confirm password"
            type="confirm password"
            className="flex px-20 rounded-xl mt-2"
          />
          <Button type="submit" className="bg-green-500 rounded-full w-full mt-20">
            Sign Up
          </Button>
        </form> */}

        <Form
          name="basic"
        //   labelCol={{
        //     span: 8,
        //   }}
        //   wrapperCol={{
        //     span: 70,
        //   }}
          style={{
            maxWidth: 900,
            padding: 20,
            borderRadius: 10,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            //   label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>

          <Form.Item
            //   label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="password" />
          </Form.Item>

          <Form.Item
            //   label="confirm password"
            name="ConfirmPassword"
            rules={[
              {
                required: true,
                message: "Confirm your password!",
              },
            ]}
          >
            <Input.Password placeholder="Re- Enter Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            //   wrapperCol={{
            //     offset: 8,
            //     span: 16,
            //   }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          //   wrapperCol={{
          //     offset: 8,
          //     span: 16,
          //   }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-green-500 rounded-full"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;

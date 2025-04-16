import { Form, Input, Button } from "antd";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const nav = useNavigate();
  const onFinish = (values: LoginFormValues) => {
    console.log("Success:", values);
    nav("/home");
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen 2xl:container 2xl:mx-auto p-5 md:p-0 md:gap-0 gap-10">
      <div className="md:w-1/2 w-full bg-white flex flex-col justify-center items-center p-5 xl:px-24  ">
        <div className="flex items-center gap-2 self-start   ">
          <img src="/images/logo.svg" alt="FindTutors" className="h-9 w-9" />
          <span className="text-2xl font-bold !font-family-barlow">
            FindTutors
          </span>
        </div>
        <img
          src="/images/login/login.png"
          alt="Login Illustration"
          className="pt-14 md:py-0 w-3xs md:w-full flex-1 object-contain"
        />
      </div>

      <div className="rounded-xl md:rounded-none md:w-1/2 w-full bg-[#A435F0] flex items-center justify-center py-7 px-5 md:p-6">
        <div className="w-full md:px-2 xl:px-24 space-y-10 md:space-y-16">
          <div className="flex flex-col md:gap-0 gap-2.5">
            <div className="border-[1.5px] border-white w-12 md:w-20 rounded-2xl"></div>
            <h1 className="text-xl md:text-[32px] font-bold !font-family-barlow text-white">
              Login as a Admin User
            </h1>
          </div>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            className="gap-7"
          >
            <div className="relative ">
              <IoMailOutline className="absolute right-5 top-3 md:top-5.5 text-white" />
              <Form.Item
                name="email"
                rules={[
                  { required: false, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  className="!text-white !bg-transparent h-10 md:h-14 !px-5 !border-white "
                  placeholder="Email"
                  defaultValue={"Johndoe@xyz.com"}
                  value={"Johndoe@xyz.com"}
                />
              </Form.Item>
            </div>

            <Form.Item
              name="password"
              rules={[
                { required: false, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="!text-white !bg-transparent h-10 md:h-14 !px-5 !border-white !placeholder-gray-500"
                placeholder="Password"
                defaultValue={"********"}
                value={"********"}
                iconRender={(visible) =>
                  visible ? (
                    <BsEyeSlash className="!text-white cursor-pointer" />
                  ) : (
                    <BsEye className="!text-white cursor-pointer" />
                  )
                }
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full !bg-white !text-black hover:bg-gray-100 border-none !h-10 md:!h-14 !font-semibold !text-xl !font-family-barlow"
              >
                Login
              </Button>
            </Form.Item>

            <div className="text-center">
              <Button
                type="link"
                className="!text-base !text-white hover:!text-gray-200 p-0"
              >
                Forget your Password?
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

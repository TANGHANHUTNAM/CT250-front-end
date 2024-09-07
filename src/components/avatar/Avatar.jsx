import { UserOutlined } from "@ant-design/icons";
import { Avatar as Avt } from "antd";

const Avatar = ({ size = 32, src, ...props }) => {
  return (
    <Avt
      size={size}
      style={{
        backgroundColor: "#fff9",
        color: "black",
        cursor: "pointer",
      }}
      icon={<UserOutlined className="text-lg" />}
      src={src || undefined}
      {...props}
    />
  );
};

export default Avatar;

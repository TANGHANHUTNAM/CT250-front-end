import { VscQuote } from "react-icons/vsc";
import Avatar from "../avatar/Avatar";

const CommnentItem = ({ item }) => {
  return (
    <div className="flex-1 p-3">
      <div className="border-ter flex h-full flex-col items-center justify-center rounded-md border-2 border-solid border-tertiary/55 bg-bgTertiary p-4 md:rounded-md">
        {/* icon */}
        <div className="mb-5 mt-2 text-2xl font-semibold text-tertiary">
          <VscQuote />
        </div>
        {/* des */}
        <div className="mb-5 flex h-full items-center">
          <p className="text-center font-medium">{item?.des}</p>
        </div>
        {/* avatar */}
        <div className="mb-3">
          <Avatar
            src={""}
            style={{
              cursor: "default",
              backgroundColor: "white",
              color: "#D69C52",
              border: "2px solid #D69C52",
            }}
            size={50}
          />
        </div>
        {/* username */}
        <div className="username text-lg font-semibold text-tertiary">
          {item?.username}
        </div>
      </div>
    </div>
  );
};

export default CommnentItem;

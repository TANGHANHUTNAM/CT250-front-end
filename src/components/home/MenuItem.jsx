import { Link } from "react-router-dom";

const MenuItem = ({ item }) => {
  return (
    <div className="group w-full p-3">
      <Link
        to={`/dish/${item?._id}`}
        className="img relative cursor-pointer overflow-hidden"
      >
        <img
          className="duration-300 group-hover:scale-105"
          src={item?.image}
          loading="lazy"
          alt="..."
        />
        <div className="absolute bottom-6 mx-auto w-full text-center">
          <button className="w-fit bg-tertiary px-3 py-2 text-xl font-bold group-hover:bg-yellow-600">
            {item?.name}
          </button>
        </div>
      </Link>
      <div className="des mt-5 text-center text-sm font-medium">
        {item?.description}
      </div>
    </div>
  );
};

export default MenuItem;

import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <section className="bg-bgPrimary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Có điều gì đó không ổn!.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Xin lỗi, chúng tôi không thể tìm thấy trang. Bạn sẽ tìm thấy rất
            nhiều điều để khám phá trên
            <span className="font-bold"> Trang Chủ</span>.
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-primary-600 hover:bg-bgTertiary font-bold rounded-lg text-2xl px-5 py-2.5 text-center  my-4"
          >
            Trở về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;

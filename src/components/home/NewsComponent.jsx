import { HiOutlineNewspaper } from "react-icons/hi2";
import new1 from "../../assets/news/new1.webp";
import new2 from "../../assets/news/new1.webp";
import new3 from "../../assets/news/new1.webp";
import new4 from "../../assets/news/new1.webp";
import { Link } from "react-router-dom";
import "./NewsComponent.css";
import { useTranslation } from "react-i18next";
const NewsComponent = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bgTertiary pb-10 pt-14">
      <div className="mx-auto max-w-screen-xl text-primary">
        {/* title */}
        <div className="title mb-9 flex flex-row items-center justify-center">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <HiOutlineNewspaper />
          </span>
          <p className="px-5 text-center font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.News.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <HiOutlineNewspaper />
          </span>
        </div>
        {/* items */}
        <div className="flex flex-col flex-wrap px-4 sm:flex-row">
          {/* item */}
          <div className="my-3 px-3 sm:w-1/2 lg:w-1/4">
            <div className="flex flex-col items-center justify-center gap-2 bg-bgNew shadow-2xl">
              {/* img-item */}
              <div className="relative w-full cursor-pointer">
                <img className="w-full" src={new1} alt="" />
                <div className="absolute left-5 top-5 mx-auto w-full">
                  <div className="w-fit bg-tertiary px-3 py-2 text-sm font-medium">
                    06/09/2024
                  </div>
                </div>
              </div>
              {/* content-item */}
              <div className="flex w-full flex-col gap-2 p-5 text-left">
                <div className="author">
                  <span className="font-medium">
                    {t("Home.News.author")} Admin
                  </span>
                </div>
                <div className="title webkit cursor-pointer text-xl font-bold duration-500 hover:text-tertiary">
                  Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em
                </div>
                <div className="des webkit text-sm font-light">
                  Cùng Bếp nhà Dola khám phá công thức làm 8 món xào đơn giản,
                  nhanh gọn trong bài viết dưới đây để làm phong phú, đa dạng
                  thêm cho bữa cơm của gia đình mình nhé.
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 px-3 sm:w-1/2 lg:w-1/4">
            <div className="flex flex-col items-center justify-center gap-2 bg-bgNew shadow-2xl">
              {/* img-item */}
              <div className="relative w-full cursor-pointer">
                <img className="w-full" src={new1} alt="" />
                <div className="absolute left-5 top-5 mx-auto w-full">
                  <div className="w-fit bg-tertiary px-3 py-2 text-sm font-medium">
                    06/09/2024
                  </div>
                </div>
              </div>
              {/* content-item */}
              <div className="flex w-full flex-col gap-2 p-5 text-left">
                <div className="author">
                  <span className="font-medium">Đăng bởi: Admin</span>
                </div>
                <div className="title webkit cursor-pointer text-xl font-bold duration-500 hover:text-tertiary">
                  Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em
                </div>
                <div className="des webkit text-sm font-light">
                  Cùng Bếp nhà Dola khám phá công thức làm 8 món xào đơn giản,
                  nhanh gọn trong bài viết dưới đây để làm phong phú, đa dạng
                  thêm cho bữa cơm của gia đình mình nhé.
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 px-3 sm:w-1/2 lg:w-1/4">
            <div className="flex flex-col items-center justify-center gap-2 bg-bgNew shadow-2xl">
              {/* img-item */}
              <div className="relative w-full cursor-pointer">
                <img className="w-full" src={new1} alt="" />
                <div className="absolute left-5 top-5 mx-auto w-full">
                  <div className="w-fit bg-tertiary px-3 py-2 text-sm font-medium">
                    06/09/2024
                  </div>
                </div>
              </div>
              {/* content-item */}
              <div className="flex w-full flex-col gap-2 p-5 text-left">
                <div className="author">
                  <span className="font-medium">Đăng bởi: Admin</span>
                </div>
                <div className="title webkit cursor-pointer text-xl font-bold duration-500 hover:text-tertiary">
                  Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em
                </div>
                <div className="des webkit text-sm font-light">
                  Cùng Bếp nhà Dola khám phá công thức làm 8 món xào đơn giản,
                  nhanh gọn trong bài viết dưới đây để làm phong phú, đa dạng
                  thêm cho bữa cơm của gia đình mình nhé.
                </div>
              </div>
            </div>
          </div>
          <div className="my-3 px-3 sm:w-1/2 lg:w-1/4">
            <div className="flex flex-col items-center justify-center gap-2 bg-bgNew shadow-2xl">
              {/* img-item */}
              <div className="relative w-full cursor-pointer">
                <img className="w-full" src={new1} alt="" />
                <div className="absolute left-5 top-5 mx-auto w-full">
                  <div className="w-fit bg-tertiary px-3 py-2 text-sm font-medium">
                    06/09/2024
                  </div>
                </div>
              </div>
              {/* content-item */}
              <div className="flex w-full flex-col gap-2 p-5 text-left">
                <div className="author">
                  <span className="font-medium">Đăng bởi: Admin</span>
                </div>
                <div className="title webkit cursor-pointer text-xl font-bold duration-500 hover:text-tertiary">
                  Tuyển tập 8 món xào đơn giản, tiết kiệm thời gian cho chị em
                </div>
                <div className="des webkit text-sm font-light">
                  Cùng Bếp nhà Dola khám phá công thức làm 8 món xào đơn giản,
                  nhanh gọn trong bài viết dưới đây để làm phong phú, đa dạng
                  thêm cho bữa cơm của gia đình mình nhé.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* view more */}
        <div className="view-more mt-6 text-center">
          <Link
            to="/news"
            className="cursor-pointer text-lg font-semibold text-tertiary duration-200 hover:text-yellow-500"
          >
            {t("Home.News.viewmore")}...
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NewsComponent;

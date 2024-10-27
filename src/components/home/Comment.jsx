import CommnentItem from "./CommentItem";
import { MdOutlineRateReview } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getReviewsForHomePage } from "../../services/reviewService";
import StatusCodes from "../../utils/StatusCodes";

// const list = [
//   {
//     id: 1,
//     des: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//     username: "username1",
//   },
//   {
//     id: 2,
//     des: "Far far away, behind theSeparated they  the Semantics, a large language ocean.",
//     username: "username2",
//   },
//   {
//     id: 3,
//     des: "Far far away, behind the word mountains, lind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
//     username: "username3",
//   },
// ];

const Comment = () => {
  const { t } = useTranslation();

  const [list, setList] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const res = await getReviewsForHomePage();

      if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
        setList(res.DT);
      }
    };

    getReviews();
  }, []);

  return (
    <div className="bg-bgPrimary py-10 text-primary">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* title */}
        <div className="title mb-7 flex flex-row items-center justify-center">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <MdOutlineRateReview />
          </span>
          <p className="px-5 text-center font-dancingscript text-3xl font-semibold md:text-5xl">
            {t("Home.Comment.title")}
          </p>
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-tertiary text-3xl text-tertiary sm:flex">
            <MdOutlineRateReview />
          </span>
        </div>
        {/* comment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => {
            return <CommnentItem key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Comment;

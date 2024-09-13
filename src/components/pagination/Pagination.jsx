import "./Pagination.css";
import { Pagination as PaginationAnt } from "antd";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

const Pagination = ({
  currentPage = 1,
  onChangePage = (page) => {},
  totalPages = 0,
  align = "center",
}) => {
  const handleChangePage = (page) => {
    onChangePage(page);
  };

  return (
    <PaginationAnt
      align={align}
      responsive={true}
      showSizeChanger={false}
      hideOnSinglePage={true}
      itemRender={(_, type, originalElement) => {
        if (type === "prev") {
          return (
            <button className="btn-pagination">
              <MdKeyboardDoubleArrowLeft />
            </button>
          );
        }
        if (type === "next") {
          return (
            <button className="btn-pagination">
              <MdKeyboardDoubleArrowRight />
            </button>
          );
        }
        return originalElement;
      }}
      total={totalPages * 10}
      current={currentPage}
      onChange={handleChangePage}
    />
  );
};

export default Pagination;

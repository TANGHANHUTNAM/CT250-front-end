import { useDynamicTitle, useTopPage } from "../hooks";

const NewsDetailPage = () => {
  useDynamicTitle("Chi tiết tin tức"); // Thay đổi theo tên của tin tức nha
  useTopPage();
  return <>NewsDetailPage</>;
};

export default NewsDetailPage;

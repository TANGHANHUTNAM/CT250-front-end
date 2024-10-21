import { useEffect, useState } from "react";
import EmptyPurchase from "./EmptyPurchase";
import PurchaseItem from "./PurchaseItem";
import { useSelector } from "react-redux";
import { useApi } from "../../hooks";
import { getOrdersForUserByStatus } from "../../services/orderService";
import { LIMIT_PURCHASES } from "./constant";
import StatusCodes from "../../utils/StatusCodes";
import _ from "lodash";
import Pagination from "../pagination/Pagination";
import CancelModal from "./CancelModal";

const AllPurchases = ({}) => {
  const [purchases, setPurchases] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [canceledData, setCanceledData] = useState(null);

  const { id } = useSelector((state) => state.user.account);

  const { loading, apiFunction: fetchAllOrdersForUser } = useApi(
    async (id, page, limit) => await getOrdersForUserByStatus(id, page, limit),
    true,
  );

  const getOrders = async () => {
    const res = await fetchAllOrdersForUser(id, currentPage, LIMIT_PURCHASES);

    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      setPurchases(res.DT);
    }
  };

  useEffect(() => {
    if (id) {
      getOrders();
    }
  }, [currentPage]);

  const handleCancelPurchase = (data) => {
    setCanceledData(data);
    setShowCancelModal(true);
  };

  if (loading) return;

  return purchases &&
    !_.isEmpty(purchases) &&
    purchases.data &&
    purchases.data.length > 0 ? (
    <>
      {purchases.data.map((item, index) => {
        return (
          <PurchaseItem
            key={`order-${index}-${item?._id}`}
            item={item}
            handleCancelPurchase={handleCancelPurchase}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={purchases.totalPages}
        onChangePage={(page) => setCurrentPage(page)}
      />
      <CancelModal
        show={showCancelModal}
        setShow={setShowCancelModal}
        data={canceledData}
        setData={setCanceledData}
        refetchOrder={getOrders}
      />
    </>
  ) : (
    <EmptyPurchase />
  );
};

export default AllPurchases;

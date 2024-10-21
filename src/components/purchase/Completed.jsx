import EmptyPurchase from "./EmptyPurchase";
import PurchaseItem from "./PurchaseItem";
import { useSelector } from "react-redux";
import { useApi } from "../../hooks";
import { getOrdersForUserByStatus } from "../../services/orderService";
import { LIMIT_PURCHASES } from "./constant";
import StatusCodes from "../../utils/StatusCodes";
import _ from "lodash";
import Pagination from "../pagination/Pagination";
import { useEffect, useState } from "react";

const Completed = ({}) => {
  const [purchases, setPurchases] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const { id } = useSelector((state) => state.user.account);

  const { loading, apiFunction: fetchAllOrdersForUser } = useApi(
    async (id, page, limit, status) =>
      await getOrdersForUserByStatus(id, page, limit, status),
    true,
  );

  useEffect(() => {
    if (id) {
      const getOrders = async () => {
        const res = await fetchAllOrdersForUser(
          id,
          currentPage,
          LIMIT_PURCHASES,
          "completed",
        );

        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setPurchases(res.DT);
        }
      };

      getOrders();
    }
  }, [currentPage]);

  if (loading) return;

  return purchases &&
    !_.isEmpty(purchases) &&
    purchases.data &&
    purchases.data.length > 0 ? (
    <>
      {purchases.data.map((item, index) => {
        return (
          <PurchaseItem
            key={`order-pending-${index}-${item?._id}`}
            item={item}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={purchases.totalPages}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </>
  ) : (
    <EmptyPurchase />
  );
};

export default Completed;

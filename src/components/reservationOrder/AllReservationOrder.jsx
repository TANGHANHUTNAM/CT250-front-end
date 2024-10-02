import { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import { useSelector } from "react-redux";
import { getAllReservations } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";
import EmptyReservation from "./EmptyReservation";
import { useApi } from "../../hooks";
import useDeleteReservation from "./useDeleteReversation";

const AllReservationOrder = ({}) => {
  const [reservations, setReservations] = useState([]);

  const { id } = useSelector((state) => state.user.account);

  const { loading, apiFunction: fetchAllReservations } = useApi(
    async (id) => await getAllReservations(id),
    true,
  );

  const getReservations = async () => {
    const res = await fetchAllReservations(id);
    if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
      setReservations(res.DT);
    }
  };

  useEffect(() => {
    if (id) {
      getReservations();
    }
  }, []);

  const { Modal, handleOpenModal } = useDeleteReservation(getReservations);

  if (loading) return;

  return (
    <>
      {reservations && reservations.length > 0 ? (
        reservations.map((item, index) => {
          return (
            <ReservationItem
              key={index}
              item={item}
              handleOpenModal={handleOpenModal}
            />
          );
        })
      ) : (
        <EmptyReservation />
      )}
      <Modal />
    </>
  );
};

export default AllReservationOrder;

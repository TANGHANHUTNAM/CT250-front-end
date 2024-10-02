import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyReservation from "./EmptyReservation";
import ReservationItem from "./ReservationItem";
import { getReservationsByStatus } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";
import { useApi } from "../../hooks";
import useDeleteReservation from "./useDeleteReversation";

const ConfirmationPending = ({}) => {
  const [reservations, setReservations] = useState([]);

  const { id } = useSelector((state) => state.user.account);

  const { loading, apiFunction: fetchReservations } = useApi(
    async (id, status) => await getReservationsByStatus(id, status),
    true,
  );

  const getReservations = async () => {
    const res = await fetchReservations(id, "pending");
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

export default ConfirmationPending;

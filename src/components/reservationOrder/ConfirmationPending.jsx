import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyReservation from "./EmptyReservation";
import ReservationItem from "./ReservationItem";
import { getReservationsByStatus } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";

const ConfirmationPending = ({}) => {
  const [reservations, setReservations] = useState([]);

  const { id } = useSelector((state) => state.user.account);

  useEffect(() => {
    if (id) {
      const getReservations = async () => {
        const res = await getReservationsByStatus(id, "pending");
        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setReservations(res.DT);
        }
      };
      getReservations();
    }
  }, []);

  return reservations && reservations.length > 0 ? (
    reservations.map((item, i) => {
      return <ReservationItem key={i} item={item} />;
    })
  ) : (
    <EmptyReservation />
  );
};

export default ConfirmationPending;

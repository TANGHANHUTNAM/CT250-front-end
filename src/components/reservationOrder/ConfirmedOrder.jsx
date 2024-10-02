import { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import { useSelector } from "react-redux";
import { getReservationsByStatus } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";
import EmptyReservation from "./EmptyReservation";
import { useApi } from "../../hooks";

const ConfirmedOrder = ({}) => {
  const [reservations, setReservations] = useState([]);

  const { id } = useSelector((state) => state.user.account);

  const { loading, apiFunction: fetchReservations } = useApi(
    async (id, status) => await getReservationsByStatus(id, status),
    true,
  );

  useEffect(() => {
    if (id) {
      const getReservations = async () => {
        const res = await fetchReservations(id, "confirmed");
        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setReservations(res.DT);
        }
      };
      getReservations();
    }
  }, []);

  if (loading) return;

  return reservations && reservations.length > 0 ? (
    reservations.map((item, i) => {
      return <ReservationItem key={i} item={item} />;
    })
  ) : (
    <EmptyReservation />
  );
};

export default ConfirmedOrder;

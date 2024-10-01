import { useEffect, useState } from "react";
import ReservationItem from "./ReservationItem";
import { useSelector } from "react-redux";
import { getAllReservations } from "../../services/reservationService";
import StatusCodes from "../../utils/StatusCodes";
import EmptyReservation from "./EmptyReservation";

const AllReservationOrder = ({}) => {
  const [reservations, setReservations] = useState([]);

  const { id } = useSelector((state) => state.user.account);

  useEffect(() => {
    if (id) {
      const getReservations = async () => {
        const res = await getAllReservations(id);
        if (res && res.EC === StatusCodes.SUCCESS_DAFAULT) {
          setReservations(res.DT);
        }
      };
      getReservations();
    }
  }, []);

  return reservations && reservations.length > 0 ? (
    reservations.map((item, index) => {
      return <ReservationItem key={index} item={item} />;
    })
  ) : (
    <EmptyReservation />
  );
};

export default AllReservationOrder;

import ReservationItem from "./ReservationItem";

const data = [1, 2, 3, 4, 5];

const AllReservationOrder = ({}) => {
  return data.map((item, i) => {
    return <ReservationItem key={i} />;
  });
};

export default AllReservationOrder;
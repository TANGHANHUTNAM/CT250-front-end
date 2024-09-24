import EmptyPurchase from "./EmptyPurchase";
import PurchaseItem from "./PurchaseItem";

const data = [1, 2, 3, 4, 5];

const ConfirmationPending = ({}) => {
  return data.length > 0 ? (
    <>
      {data.map((item, index) => {
        return <PurchaseItem key={index} />;
      })}
    </>
  ) : (
    <EmptyPurchase />
  );
};

export default ConfirmationPending;

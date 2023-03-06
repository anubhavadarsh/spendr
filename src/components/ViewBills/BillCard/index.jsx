import Card from "components/Card";
import clsx from "clsx";
import styles from "./index.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { billsActions } from "store/bills-slice";
import EditBills from "components/EditBills";

const getSuffixDate = (number) => {
  const lastDigit = number % 10;

  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const BillCard = ({ category, amount, date, description, className, id }) => {
  const [showModal, setShowModal] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const dispatch = useDispatch();

  const incomingDate = new Date(date);

  const dateMod = `${incomingDate.getDate()}${getSuffixDate(
    incomingDate.getDate()
  )} ${incomingDate.toLocaleString("default", {
    month: "short",
  })}, ${incomingDate.getFullYear()}`;

  const handleDelCard = () => {
    dispatch(billsActions.removeBill({ id }));
  };

  const handleEditCard = () => {
    setShowActions(false);
    setShowModal(true);
  };

  return (
    <>
      <Card className={clsx(styles.bill, className)}>
        <header>
          <span>{category}</span>
          <span
            className={clsx("material-icons", styles.icon)}
            onClick={() => setShowActions((prev) => !prev)}
          >
            more_horiz
          </span>
        </header>
        <div className={styles.content}>
          <span className={styles.amount}>${amount}</span>
          <span className={styles.date}>{dateMod}</span>
        </div>
        <div className={styles.desc}>{description}</div>
        {showActions && (
          <ActionsOverlay onDel={handleDelCard} onEdit={handleEditCard} />
        )}
      </Card>
      {showModal && (
        <EditBills
          id={id}
          desc={description}
          amt={amount}
          cat={category}
          date={date}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

const ActionsOverlay = ({ onDel, onEdit }) => {
  return (
    <div className={styles["actions-overlay"]}>
      <span className={styles["icon-cont"]} onClick={onDel}>
        <span className="material-icons">delete</span>
      </span>
      <span className={styles["icon-cont"]} onClick={onEdit}>
        <span className="material-icons">edit</span>
      </span>
    </div>
  );
};

export default BillCard;

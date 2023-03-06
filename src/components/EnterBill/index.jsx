import { useState, useRef } from "react";
import Card from "components/Card";
import InputUnit from "components/InputUnit";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { billsActions } from "store/bills-slice";

const initialState = {
  desc: "",
  cat: "",
  amt: "",
  date: "",
};

const EnterBill = () => {
  const [formState, setFormState] = useState(initialState);
  const [formInvalidState, setFormInvalidState] = useState({
    desc: false,
    cat: false,
    amt: false,
    date: false,
  });

  const descRef = useRef();
  const catRef = useRef();
  const amtRef = useRef();
  const dateRef = useRef();

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setFormState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formState.desc.trim().length === 0) {
      setFormInvalidState((prev) => ({ ...prev, desc: true }));
      descRef.current.focus();
      return;
    }

    if (formState.cat.trim().length === 0) {
      setFormInvalidState((prev) => ({ ...prev, desc: false, cat: true }));

      catRef.current.focus();
      return;
    }

    if (formState.amt.trim().length === 0 || +formState.amt <= 0) {
      setFormInvalidState((prev) => ({ ...prev, cat: false, amt: true }));
      amtRef.current.focus();
      return;
    }

    if (formState.date.trim().length === 0) {
      setFormInvalidState((prev) => ({ ...prev, amt: false, date: true }));
      dateRef.current.focus();
      return;
    }

    const bill = {
      id: `${formState.desc.slice(0, 2)}_${formState.amt}_${formState.date}_${
        formState.cat
      }`,
      desc: formState.desc,
      cat: formState.cat,
      amt: +formState.amt,
      date: formState.date,
    };

    dispatch(billsActions.addBill(bill));

    setFormState({
      amt: "",
      cat: "",
      date: "",
      desc: "",
    });

    setFormInvalidState({
      amt: false,
      cat: false,
      date: false,
      desc: false,
    });
  };

  return (
    <Card>
      <header className={styles.header}>
        <h2>Enter your bill details</h2>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputUnit
          id="desc"
          label="Where did you spend your money?"
          name="desc"
          value={formState.desc}
          onChange={handleInputChange}
          type="text"
          icon="question_mark"
          autoFocus={true}
          ref={descRef}
          invalid={formInvalidState.desc}
        />
        <InputUnit
          id="cat"
          label="What category does it belongs to?"
          name="cat"
          value={formState.cat}
          onChange={handleInputChange}
          type="text"
          icon="category"
          ref={catRef}
          invalid={formInvalidState.cat}
        />
        <InputUnit
          id="amt"
          label="How much did you pay for it?"
          name="amt"
          value={formState.amt}
          onChange={handleInputChange}
          type="number"
          icon="money"
          ref={amtRef}
          invalid={formInvalidState.amt}
        />
        <InputUnit
          id="date"
          label="When did you pay for it?"
          name="date"
          value={formState.date}
          onChange={handleInputChange}
          type="date"
          icon="calendar_month"
          ref={dateRef}
          invalid={formInvalidState.date}
        />
        <div className={styles["btn-cont"]}>
          <button type="submit">submit</button>
        </div>
      </form>
    </Card>
  );
};

export default EnterBill;

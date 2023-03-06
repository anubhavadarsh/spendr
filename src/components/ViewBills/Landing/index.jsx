import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import BillCard from "../BillCard/index";
import styles from "./index.module.scss";

const Landing = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const bills = useSelector((state) => state.bills.billsList);

  useEffect(() => {
    setCurrentCategory("all");
  }, [bills]);

  const categories = [...new Set(bills.map(({ cat }) => cat))];

  const handleCatChange = (event) => {
    setCurrentCategory(event.target.value);
  };

  let billsComponent = bills.map((bill) => (
    <BillCard
      id={bill.id}
      category={bill.cat}
      amount={bill.amt}
      date={Date.now()}
      description={bill.desc}
    />
  ));

  if (bills.length > 0) {
    billsComponent = (
      <>
        {currentCategory !== "all" &&
          bills
            .filter((bill) => bill.cat === currentCategory)
            .map((bill) => (
              <BillCard
                id={bill.id}
                amount={bill.amt}
                category={bill.cat}
                date={bill.date}
                description={bill.desc}
                key={bill.id}
              />
            ))}
        {currentCategory === "all" &&
          bills.map((bill) => (
            <BillCard
              id={bill.id}
              amount={bill.amt}
              category={bill.cat}
              date={bill.date}
              description={bill.desc}
              key={bill.id}
            />
          ))}
      </>
    );
  }

  return (
    <>
      <select
        name="categories"
        id="categories"
        onChange={handleCatChange}
        value={currentCategory}
        className={styles.select}
      >
        <option value="all">all</option>
        {categories.map((category) => (
          <option key={category} value={category} name={category}>
            {category}
          </option>
        ))}
      </select>
      <section className={styles.viewBills}>
        {bills.length === 0 && (
          <BillCard
            category="food"
            amount="92.312"
            date={Date.now()}
            description="had my breakfast"
          />
        )}
        {billsComponent}
      </section>
    </>
  );
};

export default Landing;

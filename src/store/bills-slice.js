import { createSlice } from "@reduxjs/toolkit";
import { data } from "assets/data/dummy.js";

const billsSlice = createSlice({
  name: "bills",
  initialState: { billsList: data, totalDueAmount: 0 },
  reducers: {
    addBill(state, action) {
      state.billsList.push({
        id: action.payload.id,
        desc: action.payload.desc,
        cat: action.payload.cat,
        amt: action.payload.amt,
        date: action.payload.date,
      });

      state.totalDueAmount += action.payload.amt;
    },

    removeBill(state, action) {
      const filteredBillsList = state.billsList.filter(
        (bill) => bill.id !== action.payload.id
      );

      state.billsList = filteredBillsList;
      state.totalDueAmount -= action.payload.amt;
    },

    editBill(state, action) {
      const editedBillsList = state.billsList.map((bill) => {
        if (bill.id === action.payload.id) {
          return {
            id: action.payload.id,
            desc: action.payload.desc,
            amt: action.payload.amt,
            cat: action.payload.cat,
            date: action.payload.date,
          };
        }

        return bill;
      });

      state.billsList = editedBillsList;
      state.totalDueAmount = action.payload.amt - action.payload.originalAmt;
    },
  },
});

export const billsActions = billsSlice.actions;

export default billsSlice;

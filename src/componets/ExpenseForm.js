import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = props => {
  const {
    edit,
    charge,
    amount,
    handleCharge,
    handleAmount,
    handleSubmit
  } = props;

  return (
    <form action="" onSubmit={e => handleSubmit(e)}>
      <div className="form-cent">
        <div className="form-group">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g. rent"
            onChange={e => handleCharge(e)}
            value={charge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>
          <input
            type="text"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            onChange={e => handleAmount(e)}
            value={amount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;

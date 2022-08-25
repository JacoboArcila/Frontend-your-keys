import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import styled  from "styled-components";
import AppContext from "../../context/AppContext";

const DivDate = styled.div`
  .date_picker.full-width input {
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  .dates {
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    -moz-padding-start: calc(0.75rem - 3px);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }
`;

const DatePickerWrapper = styled(({ className, ...props }) => (
  <DatePicker {...props} wrapperClassName={className} />
))`
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;

const Calendar = styled.div`
  border-radius: 10px;
  box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
  overflow: hidden;
`;



const DateVehicle = () => {
  const { state } = useContext(AppContext);
  return (
    <DivDate>
      {/* <DatePicker
        inline
        selected={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate}
        monthsShown={2}
        wrapperClassName='date_picker full-width'
        shouldCloseOnSelect={false}
        readOnly
      /> */}
      <DatePickerWrapper
        calendarContainer={Calendar}
        inline
        selected={state.startDate}
        startDate={state.startDate}
        endDate={state.endDate}
        monthsShown={2}
        wrapperClassName='date_picker full-width'
        className="dates"
        shouldCloseOnSelect={false}
        readOnly
      />
    </DivDate>
  );
};

export default DateVehicle;
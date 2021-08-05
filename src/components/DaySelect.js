import React, { Component } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

class DaySelect extends Component {
  state = {
    selectedDay: this._getCurrentDate(),
  };

  changeToDayBefore() {
    let selectedDay = this.state.selectedDay;
    let newDateObject = selectedDay.dateObject;
    newDateObject.setDate(newDateObject.getDate() - 1);
    let newDay = this._createDatePickerDate(newDateObject);
    this.setSelectedDay(newDay);
  }

  changeToDayAfter() {
    let selectedDay = this.state.selectedDay;
    let newDateObject = selectedDay.dateObject;
    newDateObject.setDate(newDateObject.getDate() + 1);
    let newDay = this._createDatePickerDate(newDateObject);
    this.setSelectedDay(newDay);
  }

  _getCurrentDate() {
    let today = new Date();
    return this._createDatePickerDate(today);
  }

  setSelectedDay = (day) => {
    day.dateObject = this._convertToDate(day);
    this.setState({
      selectedDay: day,
    });
  };

  _convertToDate(datePickerDate) {
    return new Date(
      datePickerDate.year,
      datePickerDate.month,
      datePickerDate.day
    );
  }

  _createDatePickerDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      dateObject: date,
    };
  }

  _formatInputValue = () => {
    if (!this.state.selectedDay) return "";
    return this._formatDate(this.state.selectedDay.dateObject);
  };

  _formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  render() {
    return (
      <div className="flex">
        <div className="flex-1 text-right">
          <button
            onClick={() => this.changeToDayBefore()}
            className="btn btn-ghost"
            type="button"
            value="click me"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-1 text-center">
          <DatePicker
            value={this.state.selectedDay}
            onChange={this.setSelectedDay}
            formatInputText={this._formatInputValue}
            inputClassName="input input-ghost w-auto"
            calendarClassName="responsive-calendar"
          />
        </div>
        <div className="flex-1 text-left">
          <button
            onClick={() => this.changeToDayAfter()}
            className="btn btn-ghost"
            type="button"
            value="click me"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default DaySelect;

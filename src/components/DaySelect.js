import React, { Component } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";

class DaySelect extends Component {
  state = {
    selectedDay: this._getCurrentDate(),
  };

  changeToDayBefore() {
    let newDay = this.state.selectedDay;
    newDay.setDate(newDay.getDate() - 1);
    this.handleDayChange(newDay);
  }

  changeToDayAfter() {
    let newDay = this.state.selectedDay;
    newDay.setDate(newDay.getDate() + 1);
    this.handleDayChange(newDay);
  }

  handleDayChange(day) {
    this.props.changeSelectedDay(day);
  }

  _getCurrentDate() {
    let today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth(),
      day: today.getDate(),
      dateObject: today,
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
          <button className="btn btn-ghost" type="button" value="click me">
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
          <button className="btn btn-ghost" type="button" value="click me">
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

  setSelectedDay = (day) => {
    day.dateObject = new Date(day.year, day.month, day.day);
    this.setState({
      selectedDay: day,
    });
  };
}

export default DaySelect;

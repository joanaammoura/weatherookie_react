export default class DateUtil {
  constructor(date) {
    this.date = date;
  }

  day() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      days[this.date.getDay()] +
      " , " +
      this.date.getDate() +
      " " +
      months[this.date.getMonth()] +
      " " +
      this.date.getFullYear()
    );
  }

  time() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`;

    return `${this.date.getHours()}:${this.date.getMinutes()}`;
  }

  dayShortVersion() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[this.date.getDay()];
  }
}

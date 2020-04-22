let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    };
    this.getMonth = function () {
        return this.month;
    };
    this.getYear = function () {
        return this.year;
    };
    this.setDay = function (value) {
        this.day = value;
    };
    this.setMonth = function (value) {
        this.month = value;
    };
    this.setYear = function (value) {
        this.year = value;
    };
    this.toString = function () {
    return "dd/mm/yyyy"
    }

};
let date = new MyDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);


date.setDay(10);
date.setMonth(10);
date.setYear(2019);

day = date.getDay();
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);

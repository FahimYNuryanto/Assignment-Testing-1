function isWeekend (n) {
    var d = new Date();
    var n = d.getDay();

    if (n == "Saturday" || n == "Sunday"){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isWeekend,
}
function isWeekend (n) {
    var d = new Date();
    var n = d.getDay();

    if (n == 6 || n == 0){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isWeekend,
}
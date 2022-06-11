function isLeap (n) {
    var d = new Date();
    var n = d.getFullYear();

    if (n / 4 == 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    isLeap,
}
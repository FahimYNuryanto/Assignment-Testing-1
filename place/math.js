const dayModel = require("../model/weekend.model")
const yearModel = require("../model/leap.model")

const isWeekend = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await dayModel.isWeekend(n);
        res.json({
            data: result,
            error: null
        });
    } catch(e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
}

const isLeapYear = async (req, res) => {
    const { n } = req.body;
    try {
        const result = await yearModel.isLeap(n);
        res.json({
            data: result,
            error: null
        });
    } catch(e) {
        res.json({
            data: null,
            error: e.message
        })
    } finally {
        res.end();
    }
}

module.exports = {
    isWeekend,
    isLeapYear,
}
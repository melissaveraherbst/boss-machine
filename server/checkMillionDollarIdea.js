/**
 * @description this is a middleware function that checks that any new or updated ideas are worth at least one million dollars. Automatically calls next() if all conditions are met.
 */
const checkMillionDollarIdea = (req, res, next) => {
    const { numWeeks, weeklyRevenue } = req.body;
    const minYieldValue = 1000 * 1000;
    const totalYield = Number(numWeeks) * Number(weeklyRevenue);
    if (!numWeeks || !weeklyRevenue || isNaN(totalYield) || totalYield < minYieldValue) {
        return res.status(400).send();
    }
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

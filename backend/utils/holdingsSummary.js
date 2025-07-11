function getHoldingsSummary(holdings) {
    let Avg = 0;
    let Cur = 0;
    let PL=0;
    for (const stock of holdings) {
        Avg += stock.avg * stock.qty;
        Cur += stock.price * stock.qty;
        PL = ((stock.price * stock.qty)-(stock.avg*stock.qty)).toFixed(2);
    }
    return {
        Avg,
        Cur,
        PL
    };
}

module.exports = { getHoldingsSummary };

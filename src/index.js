const main = (operations) => operations
    .reduce(({ absProfit, portfolio }, { type, ticker, price, qnt }) => {
        const currentProfit = (type === 'BUY' ? -1 : 1) * price * qnt;

        return {
            absProfit: absProfit + currentProfit,
            portfolio: {
                ...portfolio,
                [ticker]: (portfolio[ticker] ?? 0) + currentProfit,
            },
        };
    }, {
        absProfit: 0,
        portfolio: {},
    });

module.exports = main;

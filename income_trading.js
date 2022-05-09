/*
Sample Programming Interview Question
Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:
        stock_prices = [10, 7, 5, 8, 11, 9]

        get_max_profit(stock_prices)
        # Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

const stockPrices = [11, -1, -2, -3, -4, -5, -6, -7, -8, -9];
bestProfit = 0;

function winning(stockPrices) {
	let lowestSoFar = stockPrices[0];
	let lowestSoFarIndex = 0;
	let lowToHighDifference = 0;

	if (stockPrices[0] == Math.max(...stockPrices)) {
		runner = [];
		for (let i = 1; i < stockPrices.length; i++) {
			runner.push(stockPrices[i]);
		}
		console.log(runner);
		// console.log(...stockPrices.pop())
		secondHighest = Math.max(...runner);
		console.log("secondHighest", secondHighest);
		if (secondHighest >= 0) {
			bestProfit = -(stockPrices[0] - secondHighest);
		} else {
			bestProfit = -(stockPrices[0] - secondHighest);
		}
		return bestProfit;
	} else {
		//go through each value in the list
		for (let i = 0; i < stockPrices.length; i++) {
			// if we reach a new low
			if (stockPrices[i] < lowestSoFar || i == stockPrices.length - 1) {
				console.log("im the new low", stockPrices[i]);
				currentRun = [];
				//make an array
				for (let j = lowestSoFarIndex; j <= i; j++) {
					currentRun.push(stockPrices[j]);
				}
				console.log(currentRun);
				//then take the difference from this past high& low
				lowToHighDifference = Math.max(...currentRun) - lowestSoFar;
				console.log(lowToHighDifference, lowestSoFar, lowestSoFarIndex);
				//if it's bigger than biggestProfit, replace it
				console.log(
					lowToHighDifference,
					lowestSoFar,
					lowestSoFarIndex,
					bestProfit
				);
				if (lowToHighDifference > bestProfit) {
					bestProfit = lowToHighDifference;
				}
				//(and don't forget to update it)
				lowestSoFar = stockPrices[i];
				lowestSoFarIndex = i;
				//if not, keep going... just keeeeep going :)
				console.log(
					"as we loop again, I'm the new low",
					lowestSoFar,
					bestProfit
				);
			}
			// just a scope test. hopefully they're the same
			console.log(
				"no changes, business as usual",
				i,
				stockPrices[i],
				lowestSoFar,
				bestProfit
			);
		}
		// console.log("now we're at the end, we have", lowestSoFar, bestProfit)
		// lowToHighDifference = Math.max(...stockPrices)-lowestSoFar
		//     //if it's bigger than biggestProfit, replace it
		//     //(and lowest so far)
		//     if (lowToHighDifference > bestProfit){
		//       bestProfit = lowToHighDifference
		//     }
		console.log("I win, not how i thought though", bestProfit);
	}
}
result = winning(stockPrices);

console.log(result);

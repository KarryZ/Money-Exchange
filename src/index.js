// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
		// Your code goes here!
		// Return an object containing the minimum number of coins needed to make change
		if (currency <= 0) return {};
		if (currency >= 10000) return {
			error: "You are rich, my friend! We don't have so much coins for exchange"
		};
		let moneyExchange = {};
		let half = 50;
		let quarters = 25;
		let dimes = 10;
		let nickels = 5;
		let pennies = 1;
		if (currency >= half) {
			let sumHalf = Math.floor(currency / half);
			moneyExchange.H = sumHalf;
			currency = currency - half * sumHalf;
		}
		if (currency >= quarters) {
			let sumQuarters = Math.floor(currency / quarters);
			moneyExchange.Q = sumQuarters;
			currency = currency - quarters * sumQuarters;
		}
		if (currency >= dimes) {
			let sumDimes = Math.floor(currency / dimes);
			moneyExchange.D = sumDimes;
			currency = currency - dimes * sumDimes;
		}
		if (currency >= nickels) {
			let sumNickels = Math.floor(currency / nickels);
			moneyExchange.N = sumNickels;
			currency = currency - nickels * sumNickels;
		}
		if (currency < nickels && currency >= pennies) {
			moneyExchange.P = currency;
		}
		//console.log(moneyExchange);
		return moneyExchange;
	}
	//makeExchange(91) // {"H":1,"Q":1,"D":1,"N":1,"P":1}
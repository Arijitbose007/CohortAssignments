/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const obj = {};
  transactions.forEach(transactions => {
    const {category , price} = transactions;
      if(obj[category]){
        obj[category] += price;
      }
      else{
        obj[category] = price;
      }
});

const result = Object.keys(obj).map(category => ({
  category: category,
  totalSpent: obj[category]
}));

return result;

}
module.exports = calculateTotalSpentByCategory;

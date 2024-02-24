function mincost(arr)
{ 
	// Sort the array
	arr.sort((a,b) => a-b);

	while(arr.length > 1){
		// Add the first two elements
		let sum = arr[0] + arr[1];
		
		// Remove the first two elements
		arr.shift();
		arr.shift();
		
		// Insert the sum back into the array
		arr.unshift(sum);

		// Sort the array again
		arr.sort((a,b) => a-b);
	}
	let minCost = arr[0];
	return minCost;
}

module.exports=mincost;

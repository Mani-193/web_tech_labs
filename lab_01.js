function addition(a, b){
    return a+b;
}
console.log(addition(2,3))
console.log("Task1 ended here")
function bitwiseAND(a, b){
    return a & b;
}
console.log(bitwiseAND(3,2))
function bitwiseOR(a, b){
    return a | b;
}
console.log(bitwiseOR(3,2))
function bitwiseXOR(a, b){
    return (a ^ b);
}
console.log(bitwiseXOR(3,2))
console.log("Task2 ended here")
function addUp(a){
    return a*(a+1)/2;
}
console.log(addUp(10))
console.log("Task3 ended here")
function progressBar(a){
    let hash = Math.min(Math.floor(a/10), 10), hashremain = 10- hash;
    let str = ""
    for(let n = 1; n <= hash; n++){
        str += "#"
    }
    for(let n = 1; n <= hashremain; n++ ){
        str += "-"
    }
    return str;
}
console.log(progressBar(149))
console.log("Task4 ended here")
function paginateData(items, pageNumber, pageSize = 5) {
    let index = pageNumber - 1;
    index = index * pageSize;
    let size = items.length;
    return {
        data: items.slice(index, index + pageSize),
        currentPage: pageNumber,
        totalPages: Math.ceil(size / pageSize),
        hasNext: (index + pageSize < size),
        hasPrev: index > 0
    }
}
const allProducts = ['Laptop', 'Mouse', 'Keyboard', 'Monitor','Desk', 'Chair', 'Webcam', 'Headphones']
const result = paginateData(allProducts, 2, 3);
console.log(result);
console.log("Task5 ended here")
function calculateRepoStats(repos){
    const starCounts = repos.map(repo => repo.stars);
   const maxStars = Math.max(...starCounts);
   const minStars = Math.min(...starCounts);
   let tot = 0;
   for(let num of starCounts){
    tot += num;
   }
   const avgStars = Math.floor(tot / starCounts.length);
   const varianceScore = Math.abs(maxStars + minStars*(-1) );
    return {
        maxStars,
        minStars,
        avgStars,
        varianceScore
    }
}
const repos = [ { name: 'repo-a', stars: 12 }, { name:
'repo-b', stars: 45 }, { name: 'repo-c', stars: 3 } ];
console.log(calculateRepoStats(repos))
console.log("Task6 ended here")
function calculateFinalPrice(basePrice, taxRate, discountPercentage)
{
    let discount = basePrice * (1 - discountPercentage / 100);
    let result = discount + (discount * taxRate / 100);
    result = Number(result.toFixed(2));
    let loyaltyPoints = Math.ceil(result);
    return {
        finalPrice: result,
        loyaltyPoints: loyaltyPoints
    };
}
console.log(calculateFinalPrice(1000, 10, 20));
console.log("Task7 ended here")
function paginateData(items, pageNumber, pageSize = 5) {
    let index = pageNumber - 1;
    index = index * pageSize;
    let size = items.length;
    return {
        data: items.slice(index, index + pageSize),
        currentPage: pageNumber,
        totalPages: Math.ceil(size / pageSize),
        hasNext: (index + pageSize < size),
        hasPrev: index > 0
    }
}
const allProduct = ['Laptop', 'Mouse', 'Keyboard', 'Monitor','Desk', 'Chair', 'Webcam', 'Headphones']
const result1 = paginateData(allProduct, 2, 3);
console.log(result1);
console.log("Task8 ended here")
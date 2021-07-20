
const addSum = (num1, num2, callback) => {
    setTimeout(() => {
        const total = num1 + num2
        callback(total)
    },2000)
}


addSum(2,3, (total) => {
    console.log(total)
})
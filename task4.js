function welcome(){
    console.log("Welcome to Javascript ")
}

welcome()

function studentDetails(name,age,cgpa){

    console.log(name)
    console.log(age)
    console.log(cgpa)
}

studentDetails("Allwin",22,8.9)
studentDetails("Dhev",35,8.8)


function calculatefee(fee){
    return fee
}

let result=calculatefee(200000)
console.log(result)


function discount(percent){
    let fee=200000
    let discountamount=fee* percent /100 
    let finalfee=fee-discountamount


    console.log(finalfee)
}

discount(10)


function studentform(name, age, disability = "no") {
    console.log(name, age, disability)
}

studentform("Allwin", 22, "no")
studentform("Arun", 21, "yes")
studentform("Ravi", 23)



function displaymessage(message) {
    console.log(message)
}

displaymessage("Hello Allwin")



let displayname = function(name) {
    console.log(name)
}

displayname("Allwin")



let printnumber = (num) => {
    console.log(num)
}

printnumber(100)


function checkscope() {
    if (true) {
        var a = 10
        let b = 20
        const c = 30

        console.log(a)
        console.log(b)
        console.log(c)
    }

    console.log(a)
    // console.log(b)
    // console.log(c)
}

checkscope()


console.log(value)
var value = 10

// output
// undefined




function first(callback) {
    console.log("First function")
    callback()
}

function second() {
    console.log("Second function")
}

first(second)



function add(callback, a, b) {
    console.log(a + b)
    callback(a, b)
}

function display(a, b) {
    console.log("Numbers:", a, b)
}

add(display, 10, 5)




function add(callback, a, b) {
    console.log("Addition:", a + b)
    callback(a, b)
}

let sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2)
}

add(sub, 20, 10)



function multiply(callback, a, b) {


    console.log("Multiplication:", a * b)
    callback(a, b)
}

function display(a, b) {
    console.log("Numbers:", a, b)
}

multiply(display, 5, 4)




function calculate(callback, a, b) {

    callback(a, b)
}

function divide(num1, num2) {


    if (num2 === 0) {
        console.log("Cannot divide by zero")
    } else {
        console.log(num1 / num2)
    }
}

calculate(divide, 20, 4)



function student(callback) {
    callback("Allwin")
}


function displayName(name) {

    console.log("Student name:", name)
}


student(displayName)



function* cashback() {
    yield "10% cashback"
    yield "30% cashback"
    yield "Better luck next time"
}

let Result = cashback()

console.log(Result.next().value)
console.log(Result.next().value)
console.log(Result.next().value)




function* numbers() {
    yield 10
    yield 20
    yield 30
}

let num = numbers()

console.log(num.next())
console.log(num.next())
console.log(num.next())


// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }



function* discounts() {
    yield "5% discount"
    yield "10% discount"
    yield "15% discount"
    yield "20% discount"
    yield "25% discount"
}

for (let message of discounts()) {
    console.log(message)
}



function* students() {
    yield "Allwin"
    yield "Arun"
    yield "Ravi"
}

for (let name of students()) {
    console.log(name)
}



function* values() {
    yield 10
    yield 20
    yield 30
    yield 40
}

var solution = values()

console.log(solution.next())
console.log(solution.next())
console.log(solution.next())
console.log(solution.next())
console.log(solution.next())




function add(a, b, c) {
    console.log(a + b + c)
}

add(5, 10, 15)



function add(a) {
    
    return function(b) {
        return function(c) {

            console.log(a + b + c)
        }
    }
}

add(5)(10)(15)




function calculate(a) {
    
    return function(b) {

        return function(c) {
            return a + b + c
        }
    }
}

let r = calculate(5)(10)(15);

console.log(r)



function product(price) {


    return function(discount) {

        return function(quantity) {

            let total = price * quantity
            let discountAmount = total * discount / 100

            return total - discountAmount
        }
    }
}

let s = product(1000)(10)(3)

console.log(s)






function normal(a, b, c) {
    return a + b + c
}

function curried(a) {

    return function(b) {


        return function(c) {
            return a + b + c
        }
    }
}

console.log(normal(5, 10, 15))

console.log(curried(5)(10)(15))





(function(product, discount) {

    console.log(`${product} is available at ${discount}% discount`)

})("Laptop", 15)





function getNumber() {
    return 100

}

let e = getNumber()


console.log(e)



function studentMarks(marks) {
    return marks
}

let t= studentMarks(85)

console.log(t)



function studentfee(fee = 200000, callback) {
    let finalfee = callback(fee)

    return finalfee
}

function calculateDiscount(fee) {
    let discount = fee * 10 / 100

    return fee - discount
}

let l = studentfee(200000, calculateDiscount)

console.log("Final fee:", result)




    
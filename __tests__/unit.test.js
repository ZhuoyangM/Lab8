// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//phone numbers
test("isPhoneNumber returns true 1",()=>{
    let firstNumber="(858) 905-0102"
    expect(functions.isPhoneNumber(firstNumber)).toBe(true);
})

test("isPhoneNumber returns true 2",()=>{
    let secondNumber="858-905-0102"
    expect(functions.isPhoneNumber(secondNumber)).toBe(true);
})

test("isPhoneNumber returns false 1",()=>{
    let thirdNumber="858-905-010"
    expect(functions.isPhoneNumber(thirdNumber)).toBe(false);
})

test("isPhoneNumber returns false 2",()=>{
    let fourthNumber="858-90-0102"
    expect(functions.isPhoneNumber(fourthNumber)).toBe(false);
})

//emails
test("isEmail returns true 1",()=>{
    let firstEmail="zhmeng@ucsd.edu"
    expect(functions.isEmail(firstEmail)).toBe(true);
})

test("isEmail returns true 2",()=>{
    let secondEmail="2023appli@gmail.com";
    expect(functions.isEmail(secondEmail)).toBe(true);
})

test("isEmail returns false 1",()=>{
    let thirdEmail="zhmeng@123.edu"
    expect(functions.isEmail(thirdEmail)).toBe(false);
})

test("isEmail returns false 2",()=>{
    let fourthEmail="zhmeng@ucsd.education"
    expect(functions.isEmail(fourthEmail)).toBe(false);
})

//strong passwords
test("isStrongPassword returns true 1",()=>{
    let firstPassword="zhmeng1208"
    expect(functions.isStrongPassword(firstPassword)).toBe(true);
})

test("isStrongPassword returns true 2",()=>{
    let secondPassword="zhmeng20001208"
    expect(functions.isStrongPassword(secondPassword)).toBe(true);
})

test("isStrongPassword returns false 1",()=>{
    let thirdPassword="zhmeng12##08"
    expect(functions.isStrongPassword(thirdPassword)).toBe(false);
})

test("isStrongPassword returns false 2",()=>{
    let fourthPassword="@zhmeng1208"
    expect(functions.isStrongPassword(fourthPassword)).toBe(false);
})

//valid dates
test("isDate returns true 1",()=>{
    let firstDate="11/16/2022";
    expect(functions.isDate(firstDate)).toBe(true);
})

test("isDate returns true 2",()=>{
    let secondDate="1/16/2022";
    expect(functions.isDate(secondDate)).toBe(true);
})

test("isDate returns false 1",()=>{
    let thirdDate="11/16/22";
    expect(functions.isDate(thirdDate)).toBe(false);
})

test("isDate returns false 2",()=>{
    let fourthDate="2022/11/16";
    expect(functions.isDate(fourthDate)).toBe(false);
})

//hex codes
test("isHexColor returns true 1",()=>{
    let hex="#111";
    expect(functions.isHexColor(hex)).toBe(true);
})

test("isHexColor returns true 2",()=>{
    let hex="#111FFF";
    expect(functions.isHexColor(hex)).toBe(true);
})

test("isHexColor returns false 1",()=>{
    let hex="#1111";
    expect(functions.isHexColor(hex)).toBe(false);
})

test("isHexColor returns false 2",()=>{
    let hex="#111G";
    expect(functions.isHexColor(hex)).toBe(false);
})


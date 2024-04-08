// // function with simple name print
// function hello(name : string) {
//     console.log(`hello ${name}`);
function createDate(dayOrTimestamp, month, yearly) {
    return month === undefined || yearly === undefined
        ? new Date(dayOrTimestamp)
        : new Date(yearly, month, dayOrTimestamp);
}

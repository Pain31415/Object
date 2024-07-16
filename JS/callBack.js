// function fnA(a, b, callback) {
//     console.log(a, b);
//     console.log(callback(a, b));
// }
// function fnB(c, q) {
//     return c + q;
// }
// fnA(12, 4, fnB)
// console.log(fnB(6, 5));

// function callback (){
//     console.log("В середині колбека через 5 секунд");
// }

// console.log("В коді перед таймаутом");
// setTimeout(callback, 5000);
// console.log("В коді після таймауту");

function onGetPositonSuccess(position) {
    console.log("Це виклик onGetPositonSuccess");
    console.log(position);
}
function onGetPositonError(error){
    console.log("Це виклик onGetPositonError");
    console.log(error);
}
window.navigator.geolocation.getCurrentPosition(onGetPositonSuccess, onGetPositonError);
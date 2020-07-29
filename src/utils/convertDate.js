export const convertDate = (date) => {
    let d = new Date(date);


    return {

    }
} 


const d = new Date('2020-08-08T03:50:00.000Z');
let duration = 1108;
let minutes = duration%60
let hours = (1108-minutes)/60;
let arrivalHour = Math.floor((d.getHours()*60 + d.getMinutes() + duration)/60-24)
let arrivalMinutes = Math.floor((((d.getHours()*60 + d.getMinutes() + duration)/60-24) - arrivalHour)*60)
console.log(hours + ":" + minutes)


console.log(arrivalHour + ":" + arrivalMinutes)
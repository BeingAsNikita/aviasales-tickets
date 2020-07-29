const formatDate = (date) => {
    if (date < 10) return '0' + date
    return date + ""
}

export const getTime = (date, duration) => {

    let d = new Date(date);
    let arrivalHour = Math.floor((d.getHours() * 60 + d.getMinutes() + duration) / 60);
    let arrivalMinutes = Math.floor( ((d.getHours() * 60 + d.getMinutes() + duration) / 60 - arrivalHour) * 60);
    if (arrivalHour > 24) {
        arrivalHour = arrivalHour - 24
    }
    return {
        departureHour: formatDate(d.getHours()),
        departureMinutes: formatDate(d.getMinutes()),
        arrivalHour: formatDate(arrivalHour),
        arrivalMinutes: formatDate(arrivalMinutes),
        durationHours: formatDate(Math.floor(duration / 60)),
        durationMinutes: formatDate(duration % 60),
    }
}
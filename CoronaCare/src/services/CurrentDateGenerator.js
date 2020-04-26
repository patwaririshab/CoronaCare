export const FullDateLocalTimeZone = () => {
    const dateGenerator = new Date()
    const date = dateGenerator.getDate()
    const month = dateGenerator.getMonth() + 1 // Month returns 0 - 11, hence +1
    const year = dateGenerator.getFullYear()
    return `${year}-${month}-${date}`
}

export const CurrentTimeLocalTimeZone = () => {
    const dateGenerator = new Date()
    const hours = dateGenerator.getHours()
    const minutes = dateGenerator.getMinutes()
    const seconds = dateGenerator.getSeconds()
    return `${hours}:${minutes}:${seconds}`
}



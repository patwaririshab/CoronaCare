import firestore from '@react-native-firebase/firestore'

 var dateGenerator = new Date;

export const FullDateLocalTimeZone = () => {
    dateGenerator = new Date()
    const date = dateGenerator.getDate()
    const month = dateGenerator.getMonth() + 1 // Month returns 0 - 11, hence +1
    const year = dateGenerator.getFullYear()
    return `${year}-${month}-${date}`
}

export const CurrentTimeLocalTimeZone = () => {
    const hours = dateGenerator.getHours()
    const minutes = dateGenerator.getMinutes()
    const seconds = dateGenerator.getSeconds()
    return `${hours}:${minutes}:${seconds}`
}

export const CreateFirebaseTimestamp = () => {
    const fireStoreTimeStamp = firestore.Timestamp.fromDate(dateGenerator)
    console.log("Date: " + fireStoreTimeStamp)
    return fireStoreTimeStamp
}



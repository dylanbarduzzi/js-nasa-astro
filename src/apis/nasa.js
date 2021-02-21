import axios from "axios"
import moment from "moment"

const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
const DATE_FMT = "YYYY-MM-DD"

export const getAPOD = async () => {
  try {
    const endDate   = generateEndDate()
    const startDate = generateStartDate(endDate, 14)

    const apodURL  = BASE_URL + `&start_date=${startDate}&end_date=${endDate}`

    const response = await axios.get(apodURL)
    const reversed = response.data.map(item => item).reverse()

    return [reversed, null]

  } catch (err) {
    console.log(`[ERROR] - ${err}`)

    if (err.response.status === 429) {
      return [null, "Too many requests. Please try again in 1 hour!"]
    }

    return [null, "Something went wrong. Please try again later!"]
  }
}

const generateEndDate = () => {
  return moment().format(DATE_FMT)
}

const generateStartDate = (endDate, daysAgo) => {
  return moment(endDate).subtract(daysAgo, "days").format(DATE_FMT)
}
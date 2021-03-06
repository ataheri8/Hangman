const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle1')
    }
}


const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=9c951deced5594')
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('unable to fetch location')
    }
}


const countryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200){
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch countries')
    }
}


const getCurrentCountry = async () => {
    const data = await getLocation()
    return countryDetails(data.country)
}
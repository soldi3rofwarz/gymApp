export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5fb61300eemsh734be7e2da9b4a8p122822jsn82518756f6b4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json()
    return data;
}
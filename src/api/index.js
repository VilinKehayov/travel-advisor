import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async(sw, ne) => {
    try {
        const {data: {data}}= await axios.get(URL, {
  
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'a923e9e379msha1d2cd4e73ada32p11e8ffjsnd5cd6c9c49a9',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
       } catch (error) {
        console.log(error)

    }

}
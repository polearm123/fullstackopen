import React , {useState,useEffect} from 'react';
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY


function App() {

  const [newFilter,setFilter] = useState('nothing')
  const [countries,setCountries] = useState([])

  //effect that retrieves a list of countries from country API
  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(response => {
        console.log("promise fulfilled")
        setCountries(response.data)
        console.log("promise data: ",response.data)
      })
  },[])

  //sets the current country filter using input value
  const setCurrentFilter = (event) => {
    console.log("current filter on change is: ", event.target.value)
    setFilter(event.target.value)

  }

  return (
   
  <div>
    <p>find countries</p>
    <input value={newFilter} onChange={setCurrentFilter} />
    {<Countries retrievedCountries={countries} newFilter={newFilter}/> }
  </div>
  );
}


//Component filters the objects in the list axios retrieved
//to those only containing the characters in the new filter
//renders different things depending on how many results are returned
//**MULTITPLE COUNTRIES: returns a list of components stating name of countries */
//**ONE country: returns a different component rendering more specific details of the country */
const Countries = ({retrievedCountries,newFilter}) => {
  const countryList = retrievedCountries.filter((element) => element.name.includes(newFilter))
  if(countryList.length > 1 && countryList.length <=10)
  {
    return(
    <ul>{countryList.map((element) => 
      <CountryName key={element.name} countryName={element.name} />
    )}

    
    </ul>
    );
  }

  else if(countryList.length > 10)
  {
    return(
    <h3>Too many matches, please specify another filter</h3>
    );
  }
  
  else if(countryList.length===1)
  {
    return(
      <SpecificCountry specificCountry={countryList[0]}/>
    );
  }

  return null;

}

//component that renders a single country if the filter result
//returns more than one item
const CountryName = ({countryName}) => {

  return(
    <div>
      <li>
        {countryName}
      </li>
    </div>
  );

}


//component responsible for rendering specific information about a 
//country
const SpecificCountry = (specificCountry) => {
  

  return(
    <div>
      <h1>{specificCountry.specificCountry.name}</h1>
      <p>capital : {specificCountry.specificCountry.capital}</p>
      <p>population: {specificCountry.specificCountry.population}</p>

      <b><h3>languages:</h3></b>
      <ul>
        {specificCountry.specificCountry.languages.map((languages) =>
        <Language key={languages.name} language={languages.name}/>)}
      </ul>

      <img 
      src={specificCountry.specificCountry.flag}
      alt="new" width="300" height="300"
      />

      <Weather capitalName = {specificCountry.specificCountry.capital}/>
    </div>
  );

}

const Weather = ({capitalName}) => {
  const params = {
    access_key: api_key,
    query: capitalName
  }

  console.log(params)

  
  const weatherResponse = 
  axios.get('http://api.weatherstack.com/current',{params})
  .then((response) => {
    const apiResponse = response.data
    return apiResponse
  }).catch(error => {
    console.log(error)
  })

  console.log("weather response is",weatherResponse)

  return(
    <div>
    <b><p>{weatherResponse.temperature}</p></b>
    </div>

  );
  
}

//component rendering a singular language of a country
//if a country has multiple spoken languages, many of 
//these components will be rendered
const Language = ({language}) => {
  return(
    <li>
      {language}
    </li>

  );

}

export default App;

import React , {useState,useEffect} from 'react';
import axios from 'axios'

function App() {

  const [newFilter,setFilter] = useState('nothing')
  const [countries,setCountries] = useState([])


  //effect that retrieves a list of countries from country API
  useEffect(() => {
    console.log("effect")
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

const Countries = ({retrievedCountries,newFilter}) => {
  const countryList = retrievedCountries.filter((element) => element.name.includes(newFilter))
  console.log(countryList)
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

const CountryName = ({countryName}) => {

  return(
    <div>
      <li>
        {countryName}
      </li>
    </div>
  );

}

const SpecificCountry = (specificCountry) => {
  console.log(specificCountry.specificCountry.language)
  

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
    </div>
  );

}

const Language = ({language}) => {
  return(
    <li>
      {language}
    </li>

  );

}

export default App;

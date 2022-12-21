import axios from "axios";
import { useState, useEffect } from "react";
import Country from "./components/Country";
import { CountryType } from "./types";



function App() {
  
  const [countries, setCountries]= useState <CountryType[]> ([]);
  const [loading, setLoading]=useState<boolean>(false);
  
  const getCountries = async()=>{
    setLoading(true);
    try{
  const {data} = await axios.get<CountryType[]>("https://restcountries.com/v2/all");
      setCountries(data);
  } catch{  
    console.log("ülkeleri alırken hata oluştu.")
  }finally{
    setLoading(false);
  }
  };

  useEffect(()=>{
getCountries();
  },[]);

  console.log({countries} );

  return (
    <div className="App">
      {loading ? "Loading..." : countries.map((country)=>{

return(
    <Country key={country.name} country={country}/> )
      }
      )}
    </div>
  );
}

export default App;

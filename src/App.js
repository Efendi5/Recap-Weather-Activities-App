import "./App.css";
import EntryForm from "./components/EntryForm/EntryForm";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List";
import Entry from "./components/Entry/Entry";
import { useEffect, useState } from "react";

function App() {
  const [entries, setEntries] = useLocalStorageState("weather-entries", {
    defaultValue: [],
  });
  const weather = useWeatherApi(`https://example-apis.vercel.app/api/weather`);

  function useWeatherApi(url) {
    const [weatherData, setweatherData] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(url);
        if(response.ok){ 
          const data = await response.json();
          setweatherData(data);
        }
      }

      startFetching();
    }, [url]);
    return weatherData;
  }


  function handleAddEntry(newEntry) {
    setEntries([
      {
        id: uid(),
        name: newEntry.name,
        isGoodWeather: newEntry.isGoodWeather ? true : false,
      },
      ...entries,
    ]);
  }

  function handleDeleteActivity(id) {
    setEntries(
      entries.filter(entry => entry.id !== id)
    )
  }

  return (
    weather ?
    <div>
      <List data={weather}>
        {entries
          .filter((entry) =>
            weather.isGoodWeather ? entry.isGoodWeather : !entry.isGoodWeather
          )
          .map((entry) => {
            return <Entry handleDelete={() => handleDeleteActivity(entry.id) } key={entry.id}  description={entry.name} />;
          })}
      </List>
      <EntryForm onAddActivity={handleAddEntry} />
    </div>
    :
    <div>Loading ...</div>
  );
}

export default App;

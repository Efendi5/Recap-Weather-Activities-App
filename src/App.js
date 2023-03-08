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
    const [isGoodWeather, setIsGoodWeather] = useState();

    useEffect(() => {
      async function startFetching() {
        const response = await fetch(url);
        const data = await response.json();

        setIsGoodWeather(data.isGoodWeather);
      }

      startFetching();
    }, [url]);
    console.log(isGoodWeather);
    return isGoodWeather;
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

  console.log(entries);
  return (
    <div>
      <List isGoodWeather={!weather}>
        {entries
          .filter((entry) =>
            weather ? entry.isGoodWeather : !entry.isGoodWeather
          )
          .map((entry) => {
            return <Entry key={entry.id} description={entry.name} />;
          })}
      </List>
      <EntryForm onAddActivity={handleAddEntry} />
    </div>
  );
}

export default App;

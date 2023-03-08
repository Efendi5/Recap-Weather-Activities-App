import "./App.css";
import React, { useState } from "react";
import EntryForm from "./components/EntryForm/EntryForm";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";
import List from "./components/List/List"
import Entry from "./components/Entry/Entry";

function App() {
  const [entries, setEntries] = useLocalStorageState("weather-entries", {
    defaultValue: [],
  });

  function handleAddEntry(newEntry) {
    setEntries([{ id: uid(), name: newEntry.name, isGoodWeather: newEntry.isGoodWeather}, ...entries]);
  }

  return (
    <div>
      <List>
        {
          entries.map((entry) => {
            return <Entry key={entry.id} description={entry.name} />
          })
        }
      </List>
      <EntryForm onAddActivity={handleAddEntry} />
    </div>
  );
}

export default App;

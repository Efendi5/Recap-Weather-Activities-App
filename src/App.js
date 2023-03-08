import "./App.css";
import React, { useState } from "react";
import EntryForm from "./components/EntryForm/EntryForm";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [entries, setEntries] = useLocalStorageState("weather-entries", {
    defaultValue: [],
  });

  function handleAddEntry(newEntry) {
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
  }

  return (
    <div>
      <EntryForm onAddActivity={handleAddEntry} />
    </div>
  );
}

export default App;

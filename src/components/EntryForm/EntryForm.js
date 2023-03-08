import Button from "../Button/Button";
import React from "react";
import { useState } from "react";
import { uid } from "uid";

export default function EntryForm({ onAddActivity }) {
  const [activityName, setActivityName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState("false");

  function handleSubmit(event) => {
    event.preventDefault();
    const newActivity = { name: activityName, id: uid() };
    event.target.reset();
  }

  onAddActivity();

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">Add new activity:</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="activityName">Name</label>
          <input type="text" id="activityName" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="isForGoodWeather">Good-weather activity</label>
          <input type="checkbox" id="isForGoodWeather"></input>
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

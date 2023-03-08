import Button from "../Button/Button";
import React from "react";

export default function EntryForm({ onAddActivity }) {

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if(data){
      onAddActivity(data);
    }
    console.log(data)

    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">Add new activity:</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="activityName">Name</label>
          <input name="name" type="text" id="activityName" required/>
        </div>
        <div className="entry-form__field">
          <label htmlFor="isForGoodWeather">Good-weather activity</label>
          <input name="isGoodWeather" type="checkbox" id="isForGoodWeather"></input>
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

import Button from "../Button/Button";

export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEntry(data);
    event.target.reset();
  }

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">Add new activity:</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Name</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="activity">Good-weather activity</label>
          <input type="checkbox" id="activity"></input>
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
}

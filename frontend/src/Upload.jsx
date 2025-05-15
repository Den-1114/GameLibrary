function Upload() {
  return (
    <>
      <div className="form">
        <form action="">
          <label for="title">Game Title:</label>
          <input type="text" id="title" name="title" />

          <label for="description">Description:</label>
          <textarea type="text" id="description" name="description" />

          <label for="title">Photo:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="URL for the photo"
          />

          <label for="genre">Genre:</label>
          <select id="genre" name="genre" required="">
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Simulation">Simulation</option>
          </select>

          <label for="platform">Platform:</label>
          <input type="text" id="platform" name="platform" />

          <label for="price">Price ($):</label>
          <input type="number" id="price" name="price" step="0.01"/>
          <input type="submit" value="Upload" />
        </form>
      </div>
    </>
  );
}

export default Upload
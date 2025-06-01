import axios from "axios";
import { useRef } from "react";

function Upload() {
  const title = useRef();
  const description = useRef();
  const photo = useRef();
  const genre = useRef();
  const platform = useRef();
  const price = useRef();

  return (
    <>
      <div className="form">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(title.current.value);
            console.log(description.current.value);
            console.log(photo.current.value);
            console.log(genre.current.value);
            console.log(platform.current.value);
            console.log(price.current.value);

            axios.post("http://localhost:3000/upload", {
              title: title.current.value,
              description: description.current.value,
              photo: photo.current.value,
              genre: genre.current.value,
              platform: platform.current.value,
              price: price.current.value,
            });

            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
          }}
        >
          <label htmlFor="title">Game Title:</label>
          <input type="text" id="title" name="title" ref={title} />

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            name="description"
            ref={description}
          />

          <label htmlFor="photo">Photo:</label>
          <input
            type="text"
            id="photo"
            name="photo"
            placeholder="URL for the photo"
            ref={photo}
          />

          <label htmlFor="genre">Genre:</label>
          <select id="genre" name="genre" required="" ref={genre}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Puzzle">Puzzle</option>
            <option value="RPG">RPG</option>
            <option value="Strategy">Strategy</option>
            <option value="Simulation">Simulation</option>
          </select>

          <label htmlFor="platform">Platform:</label>
          <input type="text" id="platform" name="platform" ref={platform} />

          <label htmlFor="price">Price ($):</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            ref={price}
          />
          <input type="submit" value="Upload" />
        </form>
      </div>
    </>
  );
}

export default Upload;

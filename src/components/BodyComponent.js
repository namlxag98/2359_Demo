/**
 * /* eslint-disable jsx-a11y/alt-text
 *
 * @format
 */

/** @format */
import React from "react";
const GIPHY_API =
  "https://api.giphy.com/v1/gifs/search?api_key=1N2wFYHXqEw53ZZt1rpChqAgdfgJiFHx&limit=8&offset=0&rating=g&lang=en&q=";
let BodyComponent = () => {
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  let searchGif = () => {
    if (search.length > 0) {
      setLoading(true);
      fetch(GIPHY_API + search)
        .then((res) => {
          setLoading(false);
          return res.json();
        })
        .then((result) => {
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            }),
          );
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
          alert("Something went wrong");
        });
    }
  };
  return (
    <>
      <div className='header'>
        <div>
          <input
            type='text'
            placeholder='Search GIFS'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchGif}>Search</button>
        </div>
      </div>
      <div className='result'>
        <div className='loading'>
          <div className='loader'></div>
        </div>
        <div className='list d-flex flex-wrap'>
          {gifs.map((gif) => {
            return (
              <div className='item w-25' style={{ height: "200px" }}>
                <img src={gif} width='100%' height='100%' />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default BodyComponent;

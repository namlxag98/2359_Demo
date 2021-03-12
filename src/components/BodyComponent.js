/** @format */

import React from "react";
import Paginate from "./Paginate";
const GIPHY_API =
  "https://api.giphy.com/v1/gifs/search?api_key=1N2wFYHXqEw53ZZt1rpChqAgdfgJiFHx&limit=8&offset=3&rating=g&lang=en&q=";
const BodyComponent = () => {
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  // let [currentPage, setCurrentPage] = React.useState(1);
  // let [itemsPerPage, setItemsPerPage] = React.useState(8);
  // let indexOfLastItem = currentPage * itemsPerPage;
  // let indexOffFirstItem = indexOfLastItem - itemsPerPage;
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
              return gif.images.original.url;
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
        <div className='navbar navbar-light bg-light'>
          <div className='container-fluid justify-content-center'>
            <div className='d-flex'>
              <input
                className='form-control me-2'
                type='text'
                placeholder='Start searching for images!'
                onChange={(e) => setSearch(e.target.value)}
                style={{ width: "500px" }}
              />
              <button
                className='btn btn-outline-success'
                type='submit'
                onClick={searchGif}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <div class='row'>
          <div className='result'>
            <div className='loading'>
              <div className='loader'></div>
            </div>
            <div className='list d-flex flex-wrap'>
              {gifs.map((gif) => {
                return (
                  <div
                    className='item'
                    style={{ width: "23%", height: "18vw", margin: "1%" }}>
                    <img
                      key={gif.id}
                      src={gif}
                      width='100%'
                      height='100%'
                      className='d-block'
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <Paginate currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={gifs.length}/> */}
      </div>
    </>
  );
};
export default BodyComponent;

import React, { useState } from "react";
import { toast } from "react-toastify";
// const AlgokiaPlaces = require("algolia-places-react");

const NewHotel: React.FC = () => {
  const [values, setValues] = useState({
    //state
    title: "",
    content: "",
    location: "",
    image: "",
    price: "",
    from: "",
    to: "",
    bed: "",
  });
  // destructuring variables from state
  const { title, content, location, image, price, from, to, bed } = values;

  const handleSubmit = (e: React.FormEvent) => {
    //
  };

  const handleImageChange = (e: React.ChangeEvent) => {};

  const handleChange = (e: React.ChangeEvent) => {};

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Hotel</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="btn btn-outline-secondary btn-block m-2 text-left">
                  Image
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    hidden
                  />
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Title"
                  className="form-control m-2"
                  value={title}
                />
                <textarea
                  name="content"
                  onChange={handleImageChange}
                  placeholder="Title"
                  className="form-control m-2"
                  value={content}
                />

                <input
                  type="number"
                  name="price"
                  onChange={handleChange}
                  placeholder="Price"
                  value={price}
                  className="form-control m-2"
                />
                <input
                  type="number"
                  name="bed"
                  onChange={handleChange}
                  placeholder="Number of Beds"
                  value={bed}
                  className="form-control m-2"
                />
              </div>
              <button className="btn btn-outline-primary m-2">
                Save
              </button>
            </form>
          </div>
          <div className="col-md-2">Image <pre>{JSON.stringify(values, null, 4)}</pre></div>
        </div>
      </div>
    </>
  );
};

export default NewHotel;

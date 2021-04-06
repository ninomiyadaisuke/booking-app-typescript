import React, { useState } from "react";
import { toast } from "react-toastify";
import { hotelRegistration } from "../types";
import AlgoliaPlaces from "algolia-places-react";
import { DatePicker } from "antd";
import moment from "moment";

const NewHotel: React.FC = () => {
  const [values, setValues] = useState<hotelRegistration>({
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

  type locationValue = {
    suggestion: {
      value: string;
    };
  };

  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  // destructuring variables from state
  const { title, content, location, image, price, from, to, bed } = values;

  const handleSubmit = (e: React.FormEvent) => {
    //
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    setPreview(URL.createObjectURL(file));
    setValues({ ...values, image: file });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
                  onChange={handleChange}
                  placeholder="Title"
                  className="form-control m-2"
                  value={content}
                />
                <AlgoliaPlaces
                  className="form-control ml-2 mr-2"
                  placeholder="Location"
                  defaultValue={location}
                  // // options={config}
                  onChange={({ suggestion }: locationValue) =>
                    setValues({ ...values, location: suggestion.value })
                  }
                  style={{ height: "50px" }}
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
              <DatePicker
                placeholder="From date"
                className="form-control m-2"
                onChange={(date: any, dateString: string) =>
                  setValues({ ...values, from: dateString })
                }
                disabledDate={(current: any) =>
                  current.valueOf() < moment().subtract(1, "days")
                }
              />

              <DatePicker
                placeholder="To date"
                className="form-control m-2"
                onChange={(date: any, dateString: string) =>
                  setValues({ ...values, to: dateString })
                }
                disabledDate={(current: any) =>
                  current.valueOf() < moment().subtract(1, "days")
                }
              />
              <button className="btn btn-outline-primary m-2">Save</button>
            </form>
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHotel;

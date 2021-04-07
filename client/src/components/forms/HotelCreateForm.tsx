import React from "react";
import { locationValue, hotelFormProps } from "../../types";
import { toast } from "react-toastify";
import AlgoliaPlaces from "algolia-places-react";
import { DatePicker, Select } from "antd";
import moment from "moment";

const Option = Select;

const HotelCreateForm: React.FC<hotelFormProps> = (props) => {
  const {
    values,
    location,
    setLocation,
    handleImageChange,
    handleChange,
    handleSubmit,
    setValues,
  } = props;
  const { title, content, price } = values;

  return (
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
            setLocation(suggestion.value)
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

        <Select
          onChange={(value: string) => setValues({ ...values, bed: value })}
          className="w-100 m-2"
          size="large"
          placeholder="Nmber of beds"
        >
          <Option key={1}>{1}</Option>
          <Option key={2}>{2}</Option>
          <Option key={3}>{3}</Option>
          <Option key={4}>{4}</Option>
        </Select>
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
  );
};

export default HotelCreateForm;

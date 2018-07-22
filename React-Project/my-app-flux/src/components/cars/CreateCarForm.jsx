import React from 'react'
import Input from '../common/Input'

const CreateCarForm = (props) => {

  const { make, model, image, year, engine, price, mileage, onChange, onSubmit } = props

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="make"
        type="text"
        value={make}
        onChange={onChange}
        label="Make"
      />
      <Input
        name="model"
        type="text"
        value={model}
        onChange={onChange}
        label="Model"
      />
      <Input
        name="year"
        type="number"
        value={year}
        onChange={onChange}
        label="Year"
      />
      <Input
        name="engine"
        type="text"
        value={engine}
        onChange={onChange}
        label="Engine"
      />
      <Input
        name="mileage"
        type="number"
        value={mileage}
        onChange={onChange}
        label="Mileage"
      />
      <Input
        name="price"
        type="number"
        value={price}
        onChange={onChange}
        label="Price"
        step="0.01"
      />
      <Input
        name="image"
        type="url"
        value={image}
        onChange={onChange}
        label="Image"
      />
      <input id="submit" type="submit" value="Create" />
    </form>
  )
}

export default CreateCarForm
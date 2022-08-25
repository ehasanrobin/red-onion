import React from 'react';
import { useForm } from "react-hook-form";
import useProdcuts from '../../Hooks/useProdcuts';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/menus",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res=> res.json())
    .then(data => alert("data inserded"))
    data.target.reset();
  };

  const [products] = useProdcuts();

  const handleDel = id => {
    const proceed = window.confirm("are you want to delete?");
    if(proceed){
        fetch(`http://localhost:5000/menus/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.json()) // or res.json()
          .then(res => console.log("delete"))
      }
    }
   

    return (
        <div className='w-50 mx-auto  mt-4 mb-3'>
             <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Menus</h2>
      <input className='mb-2' placeholder='image URL' type="text" {...register("img")} />
      <input className='mb-2' placeholder='text' {...register("name")} />
      <select {...register("menu")} placeholder="menus">
        
        <option value="1">breakfast</option>
        <option value="2">lunch</option>
        <option value="3">dinner</option>
      </select>
      <textarea className='mb-2' placeholder='description' {...register("description")} />
      <input className='mb-2' placeholder='price' type="number" {...register("price")} />
      <input type="submit" />
    </form>

    <div className='mt-4 mb-4'>
        <h2>All Menus</h2>
        <ol>
            {
                products.map(p => <li key={p._id}>
                    {p.name} <button onClick={() => handleDel(p._id)}>x</button>
                    
                    </li>)
            }
        </ol>
    </div>
        </div>
    );
};

export default AddProduct;
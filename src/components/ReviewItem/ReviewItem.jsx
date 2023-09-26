import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product,handleRemoveFromCart}) => {
  // console.log(product);
  const { id, img, price, name, shipping } = product;
  return (
    <div className=" flex  border-2 rounded p-3 w-full items-center  my-5 ">
      <div className="text-center">
        <img src={img} alt="" className="w-24 h-24 mx-auto rounded" />
      </div>
    
    <div className=" ps-5 mx-0 my-1  grow ">
        <p className="font-normal font-base leading-6 tracking-wide	">{name}</p>
        <p>
          Price: <span className="text-orange-500">${price}</span>
        </p>
        <p>
          Shipping Charge: <span className="text-orange-500">${shipping}</span>
        </p>
      </div>
      <button onClick={()=>handleRemoveFromCart(id)} className="w-12 h-12 rounded-full flex-grow-1  bg-red-200">
          <span>
            <FontAwesomeIcon icon={faTrashAlt} />
          </span>
        </button>  
    </div>

  );
};

export default ReviewItem;

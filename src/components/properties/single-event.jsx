import Image from "next/image";
import React, { useRef, useState } from "react";

import { ImPriceTag, BsHouseDoorFill, BsTextareaResize, BsTruckFlatbed } from "react-icons/bs";

const SingleEvent = ({ data }) => {
  return (

    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={700} height={500} alt={data.title} />
      <table>
        <tr>
          <td><ImPriceTag/>{data.price}</td>
          <td><BsHouseDoorFill/>{data.type}</td>
        </tr>
        <tr>
          <td><BsTextareaResize/>{data.size}</td>
          <td><BsTruckFlatbed/>{data.places}</td>
        </tr>
      </table>
      <p> {data.description} </p>
      <div className="email_registration">
        <h1> Contact us!</h1>
        <a href="tel:+1 501-673-5559">501-673-5559</a><br />
      </div>
    </div>
  );
};

export default SingleEvent;

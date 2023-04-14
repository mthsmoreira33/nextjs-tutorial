import Image from "next/image";
import React, { useRef, useState } from "react";

const SingleEvent = ({ data }) => {
  return (

    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={700} height={500} alt={data.title} />
      <h2>Info:</h2>
      <table>
        <tr>
          <td>Price: {data.price}</td>
          <td>Type: {data.type}</td>
        </tr>
        <tr>
          <td>Size: {data.size}</td>
          <td>Data: {data.places}</td>
        </tr>
      </table>
      <h2>Description:</h2>
      <p> {data.description} </p>
      <div className="email_registration">
        <h2> Contact us!</h2>
        <a href="tel:+1 501-673-5559">501-673-5559</a><br />
      </div>
    </div>
  );
};

export default SingleEvent;

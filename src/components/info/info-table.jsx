import { useRouter } from "next/router";
import React, { useRef, useState } from "react";


export const Info = ({data}) => {
    return(
        <table>
        <tr>
          <td>{data.price}</td>
          <td>{data.type}</td>
        </tr>
        <tr>
          <td>{data.size}</td>
          <td>{data.places}</td>
        </tr>
      </table>
    )
}

import React from "react";
import { BsSearch as Search } from "react-icons/bs";
import { useParams } from "react-router-dom";
import CountryDetail from "./CountryDetail";

function GetCountryId() {
  const { id } = useParams();
  //console.log(id);

  return <CountryDetail params={id} />;
}
export default GetCountryId;

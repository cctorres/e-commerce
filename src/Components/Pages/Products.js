import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Products = () => {
  let { search } = useParams();

  useEffect(() => {

  }, []);

  return <div className="products-container">{search}</div>;
};

export default Products;

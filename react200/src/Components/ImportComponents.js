// import React, { Component } from "react";
import { useEffect, useState } from "react";

function ImportComponent({ props }) {
  console.log(`3. render called component`);

  useEffect((props) => {
    console.log("1. Props Called");
  }, []);

  return <h2>This is Imported Component</h2>;
}

export default ImportComponent;


import React, { Component } from "react";
import csv from "csvtojson";

class FileReader extends React.Component {
    render() {
        const csvFilePath='C:/Users/rajit/OneDrive/Documents/GitHub/HTML_5-CSS_3-Javascript-React/React/Olmatic/graphical-user-interface/src/test.csv'
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
            /**
             * [
             * 	{a:"1", b:"2", c:"3"},
             * 	{a:"4", b:"5". c:"6"}
             * ]
             */ 
        })
         
        // Async / await usage
        // const jsonArray=await csv().fromFile(csvFilePath);
      return (
        <div>
        </div>
      );
    }
  }
  
  export default FileReader;
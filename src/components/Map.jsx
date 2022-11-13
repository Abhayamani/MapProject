import axios from "axios";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import schoolData from "../data/export.json";
import { data } from "../body";
function Map() {

  var totalschool = schoolData.length;
  console.log(totalschool);
  
  

  // https://overpass-api.de/api/interpreterS
  // const getData = async () => {
  //   console.log(data, "datafetch");
    // const formData = new FormData();

    // formData.append('data',`[out:json][timeout:25];area(id:3604583125)->.searchArea;(node["amenity"="school"](area.searchArea);way"amenity"="school"](area.searchArea);relation["amenity"="school"](area.searchArea););out body; >; out skel qt;`)
    // const searchParams = Object.keys(dataBody).map((key) => {
    //   // @ts-ignore
    //   return encodeURIComponent(key) + '=' + encodeURIComponent(dataBody[key]);
    // }).join('&');
    
    
  //   const response = await fetch("https://overpass-api.de/api/interpreter", {
  //     method: "POST",
  //     headers: {
  //       // Accept:"application/json",
  //       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //     },
      
  //     body: new URLSearchParams({
  //       data: `[out:json][timeout:25];area(id:3604583125)->.searchArea;(node["amenity"="school"](area.searchArea);way"amenity"="school"](area.searchArea);relation["amenity"="school"](area.searchArea););out body; >; out skel qt;`
  //       ,
      
  //     })
  //       }
  //   )
  //   return response.json();
  // };

  // await data()

  // async function func() {
  //   await getData();
  // }
  // func();
  //  useEffect(() => {
  //  data()
  //  }, [])

  // const submitUser = async () => {
  //   // console.log(name,email,role,address,password,mobile)
  //   await axios
  //     .post(
  //       `https://overpass-api.de/api/interpreter`,
  //       {
  //         data: `[out:json][timeout:25];
  //         area(id:3604583125)
  //          ->.searchArea;
  //         (
  //          node["amenity"="school"]
  //          (area.searchArea);
  //          way["amenity"="school"]
  //          (area.searchArea);
  //          relation["amenity"="school"]
  //          (area.searchArea);
  //         );
  //         out body; >; out skel qt`,
  //         // phone:phone
  //       }

  //     )
  //     .then((result) => {

  //       console.log(result.data,'a');
  //     });
  // };

  // async function callapi(){

  //   await submitUser();
  // }
  // callapi();

  return (
    <MapContainer
      center={[27.717245, 85.323959]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {schoolData.map((school) => {
        if (school.lat && school.lon ) {
          return (
            <> 
            <Marker key={school.id} position={[school.lat, school.lon]}>
          
            <Popup position = {[school.lat,school.lon]}>
              <div>
                <h2>{"Name:" + school.tags.name}</h2>
                {school.tags.address &&
                <h3>{"Address:" + school.tags.address}</h3>

               }
               {school.tags.phone &&
                <h4>{"Contact No:" + school.tags.phone}</h4>
               }
              </div>

            </Popup>
            </Marker>
              
              
            
          
            
            </>
          );
        }
      })}
    </MapContainer>
  );
}

export default Map;

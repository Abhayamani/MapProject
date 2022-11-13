import React from 'react'
import schoolData from "../data/export.json";
import {Card, Stack} from '@mui/material';

const Dashboard = () => {
    
  var totalschool = schoolData.length;

  
  var total_filter = schoolData.filter(obj=> obj.tags.oit === "government");
  

  var totalgovernment = total_filter.length;

  var privatefilter = schoolData.filter(obj=>obj.tags.oit === "private");

  var totalprivate = privatefilter.length;
  
  
  return (
    <>
    <Stack 
        
    >
    <Card 
        
        style={{display:'flex',textDecoration:'none', color: '#3A1212',justifyContent : 'space-between', marginTop:'12vh' }}
        
    >
        <div><h2>Total no of schools in Kathmandu:-</h2></div>
        <div><h3>{totalschool}</h3></div>

    </Card>
    <Card 
        
        style={{display:'flex',textDecoration:'none', color: '#3A1212',justifyContent : 'space-between' }}
    >
        <div><h2>Total no of government schools in Kathmandu:-</h2></div>
        <div><h3>{totalgovernment}</h3></div>

    </Card>
    <Card 
        
        style={{display:'flex',textDecoration:'none', color: '#3A1212', justifyContent : 'space-between'}}
    >
        <div><h2>Total no of private schools in Kathmandu:-</h2></div>
        <div><h3>{totalprivate}</h3></div>

    </Card>

    </Stack>
    
    </>
  )
}

export default Dashboard
import React from 'react'
import schoolData from "../data/export.json";
import {Card, Stack} from '@mui/material';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
    
  var totalschool = schoolData.length;

  
  var total_filter = schoolData.filter(obj=> obj.tags.oit === "government");
  

  var totalgovernment = total_filter.length;

  var privatefilter = schoolData.filter(obj=>obj.tags.oit === "private");

  var totalprivate = privatefilter.length;
  
  
  return (
    <>
    <Stack 
    direction="row"
    justifyContent="space-between"
        
    >
    <Card 
        
        style={{textDecoration:'none', color: '#3A1212',justifyContent : 'space-between', marginTop:'12vh' }}
        
    >
        <div><h2>Total no of schools in Kathmandu:-</h2><i class="fa-solid fa-school fa-3x"></i><h3>{totalschool}</h3></div>
        <div className="progressBar">
        <ProgressBar striped variant="success" now={100} />
        
        </div>
        
        

    </Card>
    <Card 
        
        style={{textDecoration:'none', color: '#3A1212',justifyContent : 'space-between', marginTop:'12vh' }}
    >
        <div><h2>Total no of government schools in Kathmandu:-</h2><i class="fa-solid fa-school-flag fa-3x"></i><h3>{totalgovernment}</h3></div>

        <div className="progressBar">
   
        
        <ProgressBar striped variant="warning" now={20} />
        
    </div>
    </Card>
    <Card 
        
        style={{textDecoration:'none', color: '#3A1212', justifyContent : 'space-between', marginTop:'12vh'}}
    >
       <div><h2>Total no of private schools in Kathmandu:-</h2><i class="fa-solid fa-school-lock fa-3x"></i><h3>{totalprivate}</h3></div>

       <div className="progressBar">
        <ProgressBar striped variant="info" now={70} />
    </div>
    
    </Card>

    </Stack>
    
    
    </>
  )
}

export default Dashboard
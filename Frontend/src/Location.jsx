import  {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Location() {
    const navigate=useNavigate();
    const[position,setposition]=useState([11.0168, 76.9558]);
   
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
    const lati=position.coords.latitude;
    const longi=position.coords.longitude;
    setposition([lati,longi])
        })
    
    
      }
    
  return (
    <div >
        <div className='d-flex'>
            <h3 className='fw-semibold m-2 map'>LeafLet Map</h3>
<div className='btn btn-primary m-2 ms-auto but' onClick={()=>navigate('/ser')}>
    back
</div>
</div>
{position &&

  <MapContainer center={position} zoom={13} style={{ height: "610px", width: "100%",border:"black 2px solid" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>You are here 📍</Popup>
        </Marker>
      </MapContainer>
}

    </div>
  )
}

export default Location
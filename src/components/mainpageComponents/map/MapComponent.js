//import classes from './MapComponent.module.css'
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";


const center = { lat: 52.4064, lng: 16.9252 };

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBVLBJkTjS1HzH_XHxSxOep1TCZXGgNLDc',
  });

  if (!isLoaded) {
    return <p>Empty Text</p>;
  }

  return (
    <GoogleMap
      center={center}
      zoom={13}
      mapContainerStyle={{
        width: "93%",
        height: "80%",
        borderRadius: "15px",
        opacity: '.9'
    }}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false
      }}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MapComponent;

//AIzaSyBVLBJkTjS1HzH_XHxSxOep1TCZXGgNLDc
//

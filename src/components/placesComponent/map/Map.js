import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";


const Map = ({mapCenter}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyBVLBJkTjS1HzH_XHxSxOep1TCZXGgNLDc',
  });

  if (!isLoaded) {
    return <p>Empty Text</p>;
  }

  console.log(mapCenter)

  return (
    <GoogleMap
      mapContainerClassName='test-map'
      center={mapCenter}
      zoom={18}
      mapContainerStyle={{
        width: "100%",
        height: "100%",
        borderRadius: "15px",
        opacity: '.9'
    }}
      options={{
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControl: false
      }}
    >
      <Marker position={mapCenter} />
    </GoogleMap>
  );
};

export default Map;
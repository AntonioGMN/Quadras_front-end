import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { Box, Button } from "@mui/material";

export default function HandlerMap({ setSearching }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBbHskgHw328YYFNX8ZCnuQ8k69_dwx74Y",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map setSearching={setSearching} />;
}

function Map({ setSearching }) {
  const center = useMemo(
    () => ({ lat: -5.812012999999999, lng: -35.204903 }),
    []
  );
  const [selected, setSelected] = useState(null);

  return (
    <Box sx={boxStyle}>
      <Box style={PlacesAutocompleteStyle}>
        <PlacesAutocomplete setSelected={setSelected} />
        <Button
          onClick={() => {
            setSearching(false);
          }}
        >
          Concluido
        </Button>
      </Box>

      <GoogleMap
        zoom={10}
        center={selected ? selected : center}
        mapContainerStyle={mapStyle}
        options={{
          streetViewControl: false,
        }}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </Box>
  );
}

function PlacesAutocomplete({ setSelected }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  async function handleSelect(address) {
    console.log(address);
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  }

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Pesquise e Marque no mapa"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
const mapStyle = {
  width: "100%",
  height: "600px",
};

const PlacesAutocompleteStyle = {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "15px",
  left: "40%",
  zIndex: "10",
  width: "300px",
};

const boxStyle = {
  width: "100%",
  height: "100%",
  position: "relative",
};

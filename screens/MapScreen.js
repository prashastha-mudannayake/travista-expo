import { createStackNavigator } from "react-navigation";
import Map from "./Map/Map";
import Search from "./Map/Search";
import MapPic from "./Map/MapPic";
import CreateTrip from "./Chat/CreateEvent";

const MapStackNavigator = createStackNavigator(
  {
    Map: Map,
    Search: Search,
    MapPic: MapPic,
    CreateTrip: CreateTrip
  },
  { initialRouteName: "Map" }
);

export default MapStackNavigator;

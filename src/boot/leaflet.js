// import something here
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export { Icon }

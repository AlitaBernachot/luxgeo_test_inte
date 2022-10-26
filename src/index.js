import {mapService, MapService, Dropdown} from "../node_modules/luxembourg-geoportail/module.esm";
// import "luxgeo/module/module.css";

// alert("mapService");

console.log(mapService);
console.log(MapService);
console.log(Dropdown);

const luxDropdown = document.createElement("lux-dropdown");
luxDropdown.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];
document.getElementsByTagName('body')[0].appendChild(luxDropdown);

const luxCatalog = document.createElement("lux-catalog");
// luxDropdown.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];
document.getElementsByTagName('body')[0].appendChild(luxCatalog);
luxCatalog.addEventListener('parent-toggle', (e) => {alert(e); console.log(e)})
import {mapService, MapService, Dropdown} from "luxgeo/module";
// import "luxgeo/module/module.css";

// alert("mapService");

console.log(mapService);
console.log(MapService);
console.log(Dropdown);

const luxDropdown = document.createElement("lux-dropdown");
luxDropdown.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];

document.getElementsByTagName('body')[0].appendChild(luxDropdown);
// import Catalog from "../node_modules/luxembourg-geoportail/src/components/catalog/catalog-tree.vue";

// import DropdownList from "../node_modules/luxembourg-geoportail/src/components/common/dropdown-list.vue";
// import * as css from "../node_modules/luxembourg-geoportail/bundle/assets/style-85969ff6.css";
import { DropdownList, Catalog } from "../node_modules/luxembourg-geoportail/bundle/my-lib.mjs";

import { defineCustomElement } from 'vue';

const DropdownListElement = defineCustomElement(DropdownList)
customElements.define('dropdown-list', DropdownListElement)

const CatalogElement = defineCustomElement(Catalog)
customElements.define('catalog-tree', CatalogElement)
// DropdownListElement.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];

// console.log(DropdownListElement.options)

import MyButton from "../node_modules/luxembourg-geoportail/src/MyButton.vue";

const MyButtonElement = defineCustomElement(MyButton)
customElements.define('my-button', MyButtonElement)


const ddlist = document.querySelector('dropdown-list');
ddlist.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];
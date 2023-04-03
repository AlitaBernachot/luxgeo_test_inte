// import Catalog from "../node_modules/luxembourg-geoportail/src/components/catalog/catalog-tree.vue";

// import DropdownList from "../node_modules/luxembourg-geoportail/src/components/common/dropdown-list.vue";

// import { defineCustomElement } from 'vue';

// const DropdownListElement = defineCustomElement(DropdownList)
// customElements.define('dropdown-list', DropdownListElement)
// DropdownListElement.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];

import MyButton from "../node_modules/luxembourg-geoportail/src/MyButton.vue";

import { defineCustomElement } from 'vue';

const MyButtonElement = defineCustomElement(MyButton)
customElements.define('my-button', MyButtonElement)
// import Catalog from "../node_modules/luxembourg-geoportail/src/components/catalog/catalog-tree.vue";

// import DropdownList from "../node_modules/luxembourg-geoportail/src/components/common/dropdown-list.vue";
// import * as css from "../node_modules/luxembourg-geoportail/bundle/assets/style-85969ff6.css";
import { app, i18next, createElementInstance, createPinia, VueDOMPurifyHTML, backend, I18NextVue, DropdownList, CatalogTree } from "../node_modules/luxembourg-geoportail/bundle/my-lib.mjs";



// i18next.use(backend)
// i18next.init({
//   lng: 'fr',
//   debug: false,
//   defaultNS: 'client',
//   supportedLngs: ['de', 'en', 'fr', 'lb'],
//   ns: ['client', 'legends', 'server', 'tooltips'],
//   fallbackLng: 'fr',
//   backend: {
//     loadPath: `./assets/locales/{{ns}}.{{lng}}.json`, // ! use assets instead of ./assets because of theme path in url
//   },
// })

// app.use(createPinia())
// app.use(I18NextVue, { i18next })
// app.use(VueDOMPurifyHTML)
// app.mount('#app')



import { defineCustomElement } from 'vue';

const DropdownListElement = createElementInstance(DropdownList)
customElements.define('dropdown-list', DropdownListElement)

const CatalogElement = createElementInstance(CatalogTree)
customElements.define('catalog-tree', CatalogElement)

// console.log(DropdownListElement.options)

import MyButton from "../node_modules/luxembourg-geoportail/src/MyButton.vue";

const MyButtonElement = defineCustomElement(MyButton)
customElements.define('my-button', MyButtonElement)


const ddlist = document.querySelector('dropdown-list');
ddlist.options = [{ label: "toto", value: "toto" }, { label: "toto1", value: "toto1" }];
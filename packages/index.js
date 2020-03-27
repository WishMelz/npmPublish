import Cad from './cad/index.js';
import Uve from './uve/index.js'
const components = [
    Cad,Uve
]

const install = function(Vue) {
    components.forEach(component => {
      Vue.component(component.name, component);
    });
};

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

export default { 
    Cad,
    install,
    Uve
}
import Cad from './src/main';

Cad.install = function(Vue) {
  Vue.component(Cad.name, Cad);
};

export default Cad;
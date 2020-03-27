import Uve from './src/main'
Uve.install = function(Vue) {
    Vue.component(Uve.name, Uve);
  };
export default Uve;
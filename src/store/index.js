import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

/* Reactotron-Redux */
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;
/* Reactotron-Redux */

const store = createStore(rootReducer, enhancer);

export default store;

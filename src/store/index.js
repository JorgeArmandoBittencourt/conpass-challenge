import { createStore } from 'redux';
import reducers from './reducers'
import { loadData, saveData } from './localstorage';

/**
 * Get localstorage info if exits.
 * @returns {Array} List of hotspots.
 */

const store = createStore(reducers, loadData(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    saveData('reduxState', store.getState())
})

export default store

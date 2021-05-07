import { createStore } from 'vuex'
import Todos from './todos'
export default createStore({
    modules: {
        Todos
    },
    // strict: process.env.NODE_ENV !== 'production',
});
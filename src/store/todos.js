export default {
    namespaced: true,
    state() {
        return {
            count: 10,
            todos: [],
        }
    },
    getters: {
        Todos(state) {
            return state.todos
        },

        todoLength(state) {
            return state.todos.length + 1
        },

        getCount(state) {
            return state.count
        },
        getRandom() {
            return Math.floor(Math.random() * (10000 - 1) + 1)
        },
        getTodo({ todos }) {
            return function(id) {
                return todos.find(el => el.id == id)
            }
        }
    },


    mutations: {
        increment(state) {
            state.count += 1
        },

        decrement(state) {
            state.count > 1 ? state.count -= 1 : state.count
        },

        filterTodos(state, i) {
            state.todos = state.todos.filter(todo => todo.id !== i)
        },
        addTodo(state, obj) {
            let elem = state.todos
            elem.push(obj)
        },
        localSet({ todos }) {
            localStorage.setItem('TodoList', JSON.stringify(todos))
        },
        localGet(state) {
            let todoLocal = JSON.parse(localStorage.getItem('TodoList', ))
            state.todos = todoLocal
        },
    },


    actions: {
        doneTodo({ commit, }, i) {
            console.log(i);
            commit('filterTodos', i);
            commit('localSet')
        },
        addTodo({ commit, getters }, { title, text }) {
            console.log();
            let obj = { title: title, id: getters.getRandom, text: text }
            commit('addTodo', obj)
            commit('localSet')
        },

    },
}
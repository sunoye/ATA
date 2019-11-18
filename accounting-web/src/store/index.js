import {action, observable} from "mobx";

class AppStore {
    @observable todos;

    constructor() {
        this.todos = [{checked: false, text: "hello"}, {checked: true, text: "world"}]
    }

    @action.bound handleClick(index) {
        let todos = this.todos
        todos[index].checked = !todos[index].checked
    }
}

export default AppStore;
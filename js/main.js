// localStorage p
var STORAGE_KEY = 'todos-vuejs'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

var app = new Vue({
    
    el: "#toDoVueApp",
    data: {
        checked: false,
        title: 'Todos',
        lists: [
           {id: 0, item:'play games ', status: 'incomplete'},
            {id: 1, item:'do the dishes ', status:'incomplete'},
            {id: 2, item:'buy food ', status: 'incomplete'},
            {id: 3, item:'get gas ', status: 'incomplete'}
        ],
        // initialize newItem to be empty 
        newItem:'',
    },
    methods: {
        addItem: function(){
            let newId = this.lists.length + 1;

            if(this.newItem !== ''){
                // new list instance
                const newList = {
                    id:newId,
                    item: this.newItem
                }
                
                // add new entry to existing list
                this.lists.push(newList);

                // reset the input
                this.newItem = '';

            }
        },

        checkboxHandler: function(){
        var checkbox = document.getElementById('box');
        var text = document.getElementById('text');

        if(checkbox.checked == true){
            text.innerHTML = 'complete'
        }
        else {
            text.innerHTML = 'incomplete'
        }
        },

        deleteItem: function(){
          this.lists.splice(0,1);
        }
    },
    mounted() {

    },
});

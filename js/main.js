// localStorage JSON parser
var STORAGE_KEY = 'todos-vuejs'
var listStorage = {
  fetch: function () {
    var lists = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    lists.forEach(function (item, index) {
      item.id = index
    })
    listStorage.uid = lists.length
    return lists
  },
  // save to local 
  save: function (lists) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))
  }
}

var app = new Vue({
    
    el: "#toDoVueApp",
    data: {
        title: 'Todos',
        lists: listStorage.fetch(),
        // initialize newItem to be empty 
        newItem:'',
    },
    methods: {
        addItem: function(){
            let newId = this.lists.length + 1;

            if(this.newItem !== ''){
                // new list instance with id, item and status
                const newList = {
                    id:newId,
                    item: this.newItem,
                    status: false
                }
                
                // add new entry to existing list
                this.lists.push(newList);

                // reset the input
                this.newItem = '';

            }
        },

        deleteItem: function(key){
          this.lists.splice(key,1);
        }
    },

    mounted() {

    },

    watch: {
      lists:{
        handler: function(lists){
          listStorage.save(lists);
        },
        // watches the changes
        deep: true
      }
    }
});
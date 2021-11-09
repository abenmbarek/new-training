<template>
  <div id="app" class="center">
    <h1>To-Do List</h1>
    <to-do-form @todo-added="addToDo" ></to-do-form>
    <!--  <ul aria-labelledby="list-summary" class="stack-large" >
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :id="item.id" :label="item.label" :done="item.done" ></to-do-item>
      </li>
    </ul> -->
    <ul aria-labelledby="list-summary" class="stack-large" >
      <li v-for="item in listArray" :key="item.id">
        <to-do-item :id="item.id" :label="item.name" ></to-do-item>
      </li>
    </ul>
    
  </div>
  
</template>
<script>
import ToDoItem from './ToDoItem.vue';
import ToDoForm from './ToDoForm.vue';
import uniqueId from 'lodash.uniqueid';

import {clientServices} from '../service.js';

export default ({
  name: 'App',
  components: { ToDoItem,ToDoForm },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId('todo-'),label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'),label: 'Create a Vue project with the CLI', done: true },
        { id: uniqueId('todo-'),label: 'Have fun', done: true },
        { id: uniqueId('todo-'),label: 'Create a to-do list', done: false }
      ],
      listArray : []
    };
  },
  mounted(){
    //this.getList();
    clientServices().then(res=> {
      console.log(res);
      this.listArray = res;
    });

  },
  methods: {
    addToDo(toDoLabel) {
      this.ToDoItems.push({id:uniqueId('todo-'), label: toDoLabel, done: false});
    },
    /* getList() {
      clientServices().then(res=> {
        console.log(res);
        this.listArray = res;
      }
      );
    } */
  },
});
</script>



import ToDoForm from './components/ToDoForm.vue';
import ToDoItem from './components/ToDoItem.vue';

const components = {
  'to-do-form': ToDoForm,
  'to-do-item ': ToDoItem,
};

for (const key in components) {
  Vue.component(key, components[key]);
}

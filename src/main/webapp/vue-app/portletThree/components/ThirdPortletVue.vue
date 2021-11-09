<template>
  <div>
    <form @submit.prevent="onSubmit">
      <table>        
        <tr>
          <td>  
           
            <input
              id="new-todo-input"
              v-model.lazy.trim="newData.name"
              name="name"
              type="text"
              autocomplete="off"
              class="input__lg"
              placeholder="Add name ..."
            /> 
          </td>
          <td>  
           
            <input
              id="new-todo-input"
              v-model.lazy.trim="newData.prenom"
              name="prenom"
              type="text"
              autocomplete="off"
              class="input__lg"
              placeholder="Add Prenom ..."

            /> 
          </td>
          <td> 
       
            <input
              id="new-todo-input"
              v-model.lazy.trim="newData.adresse"
              name="adresse"

              type="text"
              autocomplete="off"
              class="input__lg"
              placeholder="Add Adresse ..."
            />
          </td>
          <td> 

            <input
              id="new-todo-input"
              v-model.lazy.trim="newData.email"
              name="email"

              type="text"
              autocomplete="off"
              class="input__lg"
              placeholder="Add Email ..."

            />
          </td>

          <td>
            <button type="submit" class="btn btn-primary">
              Add
            </button>
          </td>
        </tr>
    
       
      </table>
     
    
    </form>
  
    <clients-list :list="listArray" @delete-client="deleteC" />

  </div>
</template>
<script>

import {getClients,addClientBody,deleteClient} from '../service.js';

export default ({
  data() {
    return {
      label: '',
      listArray : [],
      newData : {
        'adresse': '',
        'name': '',
        'prenom': '',
        'email': ''
      }
    };
  },
  mounted(){
    getClients().then(res=> {
      //console.log(res);
      this.listArray = res;
    });

  },
  methods: {
    onSubmit() {
      if(!Object.values(this.newData).includes('')){

        addClientBody(this.newData).then(()=> {
          this.newData = {
            'adresse': '',
            'name': '',
            'prenom': '',
            'email': ''
          };

          getClients().then(res=> {
            console.log(res);
            this.listArray = res;
          });

        });
      
      }
      else {alert('empty fields');}
      
    },
    deleteC(id){
      deleteClient(id).then(()=> {
        getClients().then(res=> {
          console.log(res);
          this.listArray = res;
        });
      });
    }
  },
});
</script>

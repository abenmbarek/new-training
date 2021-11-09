<template>
  <div class="center" > 

    <table>        
      <tr>
        <td> <b> #</b> </td>
        <td> <b> Name :</b> </td>
        <td> <b> Prenom :</b></td>
        <td> <b> Adresse :</b> </td>
        <td> <b> Email :</b> </td>
        <td> <b> Actions </b> </td>
      </tr>
      <tr v-for="item in list" :key="item.id_client" :id="item.id_client">
        

        <td> {{ item.id_client }} </td>
        <td>
<!--           <form :key="item.id_client" @submit.prevent="save(item.id_client)" >
 -->            <input ref="name" :value="item.name" :class="!isEditing? 'view' : 'edit-view'" disabled
                   type="text" 
                   placeholder="Edit name ..."
            />
<!--           </form>
 -->        </td>
        <td>
          <input ref="prenom" :value="item.prenom" class="view" disabled
              
                 type="text" 
                 placeholder="Edit prenom ..."
          />
      
        </td>
        <td>
          <input ref="adresse" :value="item.adresse" class="view" disabled
                 type="text" 
                 placeholder="Edit adresse ..."
          />
      
        </td>
        <td>
          <input ref="email" :value="item.email" class="view" disabled
                 type="text" 
                 placeholder="Edit Email ..."
          />
      
        </td>
        
        <td> <button @click="onDelete(item.id_client)" > <i class="fas fa-trash-alt" style="color:red" ></i>
        </button>
          <button v-if="!isEditing && editFiledId!=item.id_client " :key="item.id_client" @click="onEdit(item.id_client)" >
            Edit
          </button>

          <button v-else-if="isEditing && editFiledId===item.id_client " @click="save(item.id_client)">
            Save
          </button>
  
          <button v-if="isEditing && editFiledId===item.id_client " @click="onCancel(item.id_client)">Cancel</button>

        </td>

      
      </tr>

       
    </table>
    <v-layout class="transparent">
      <v-btn
        icon
        class="uiApplicationIconButton"
        @click="openTimeTrackingDrawer()">
        <v-icon class="timeTrackingIcon">
          mdi-clock
        </v-icon>
      </v-btn>
    </v-layout>


    <time-tracking-drawer ref="timeTrackingDrawer" />
  </div>
</template>

<script>

import {updateClient,getClients} from '../service.js';
import  '../initComponents.js';

export default {
  props : {
    list: { required: true, type: Array },
  },

  data(){
    return{
      editFileds : false,
      isEditing: false,
      

      user: {
        'adresse': '',
        'name': '',
        'prenom': '',
        'email': ''
      },

    };
  },

 
  methods:{
    openTimeTrackingDrawer() {
      this.$refs.timeTrackingDrawer.open();
    }, 
    onDelete(id){
      this.$emit('delete-client', id);
    },

    onEdit(id){
      this.isEditing = !this.isEditing;

      this.onDisable(false,id);
      this.editFiledId = id;
    },
    onCancel(id){
      this.isEditing = false;
      this.editFiledId = null;

      this.onDisable(true,id);
    },
    save(id) {
      this.user.name = this.$refs['name'][0].value;
      this.user.adresse = this.$refs['adresse'][0].value;
      this.user.prenom = this.$refs['prenom'][0].value;
      this.user.email = this.$refs['email'][0].value;
      console.log(this.user);
      if(!Object.values(this.user).includes('') ){

        updateClient(this.user,id).then(()=> {

          this.onDisable(true,id);
          this.isEditing = false;
          this.editFiledId = null;

          getClients().then(res=> {
            console.log(res);
            this.list = res;
          });
        });
       

      }
      else {alert('empty fields !!');}

      
    },
    // disable or enable every input text after cancelling or saving
    onDisable(status,id){
      document.getElementById(id).querySelectorAll('input').forEach(element => {
        element.disabled = status;
      });
    }

  }
};
</script>

<style scoped>
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}
.edit-view{
    border-color: black;
  background-color: initial;
  color: initial
}
</style>
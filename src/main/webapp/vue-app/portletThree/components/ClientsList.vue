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
          <input ref="name" :value="item.name" :class="!isEditing? 'view' : 'edit-view'" disabled
                 type="text" 
                 placeholder="Edit name ..."
          />
        </td>
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
        
        <td> <button v-if="!isEditing && editFiledId!=item.id_client " @click="deleteItem(item.id_client)" > <i class="fas fa-trash-alt" style="color:red" ></i>
        </button>
          <button v-if="!isEditing && editFiledId!=item.id_client " :key="item.id_client" @click="onEdit(item.id_client)" >
            <i class="fas fa-edit" style="color:green" ></i>
          </button>

          <button v-else-if="isEditing && editFiledId===item.id_client " @click="save(item.id_client)">
            Save
          </button>
  
          <button v-if="isEditing && editFiledId===item.id_client " @click="onCancel(item.id_client)">Cancel</button>


       

        </td>

      
      </tr>

       
    </table>
    <v-dialog v-model="dialogDelete" max-width="500px" >
      <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="onDelete">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
             
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

      dialogDelete: false,
      deletedItem : null


    };
  },

 
  methods:{

    // delete
    deleteItem (id) {
      this.deletedItem = id;

      this.dialogDelete = true;
    },
    onDelete(){
      this.$emit('delete-client',  this.deletedItem );
      this.closeDelete();
    },

    closeDelete () {
      this.dialogDelete = false;
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
      
    },

   
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
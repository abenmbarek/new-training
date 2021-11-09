<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      :loading="loadingArticles"
      sort-by="calories"
      class="elevation-1"
      loading-text="Loading... Please wait"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click="createItem()"
          >
            New Article
          </v-btn>
         
          <v-dialog v-model="dialogDelete" max-width="500px" >
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template> 
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initializeArticles"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>

    <time-tracking-drawer ref="timeTrackingDrawer" :clients="selectableClients" :index="editedIndex" @save-article-data="save" />
   
  </div>

  
</template>


<script>
import { getClients } from '../../portletThree/service.js';
import {getArticles,deleteArticle,updateArticle,addArticle} from '../service.js';
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'code article',
        align: 'start',
        sortable: true,
        value: 'codeArticle',
      },
      { text: 'client', value: 'client.name',sortable: true, },
      { text: 'designation', value: 'designation',sortable: true, },
      { text: 'prixUnitaireHT', value: 'prixUnitaireHT',sortable: true, },
      { text: 'prixTVA', value: 'prixTVA',sortable: true, },
      { text: 'prixUnitaireTTC', value: 'prixUnitaireTTC',sortable: true, },
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    data: [],
    loadingArticles : true,
    editedIndex: -1,
    editedItem: {
      codeArticle: 0,
      designation: '',
      prixUnitaireHT: 0,
      prixTVA: 0,
      prixUnitaireTTC: 0,
      client:null
    },

    selectableClients:[],
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Article' : 'Edit Article';
    },
  },

  created () {
    this.initializeArticles();
  },

  methods: {
    
    initializeArticles(){
      getArticles().then(res => {
        this.data = res;
        this.loadingArticles =false;
      });
    },
    initializeClients(){
      getClients().then(res =>{
        this.selectableClients = res;
      });
    },
       
    createItem(){
      this.editedIndex = -1;
      this.openTimeTrackingDrawer();

    },

    editItem (item) {
      this.editedIndex = item.idArticle;
      this.editedItem = Object.assign({}, item);
      this.openTimeTrackingDrawer();
    },

    deleteItem (item) {
      this.editedIndex = item.idArticle;
      this.dialogDelete = true;
    },

    deleteItemConfirm () {
      deleteArticle(this.editedIndex).then(()=>{
        this.initializeArticles();
      });
      this.closeDelete();
    },

    closeDelete () {
      this.dialogDelete = false;
    },

    save (data) {


      const newArticle = {
        codeArticle: data.codeArticle,
        designation: data.designation,
        prixTVA: parseInt(data.prixTVA),
        prixUnitaireHT: parseInt(data.prixUnitaireHT),
        prixUnitaireTTC: parseInt(data.prixUnitaireTTC),
      }; 

      if (this.editedIndex > -1) {
        updateArticle(newArticle,data.idArticle).then(()=>{
          this.initializeArticles();
        });

      } else {
        addArticle(newArticle,data.client.id_client).then(()=>{
          this.initializeArticles();

        }); 

      }
      this.closeTimeTrackingDrawer();  
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    openTimeTrackingDrawer() {
      this.initializeClients();
      this.$refs.timeTrackingDrawer.setItem(this.editedItem);
      this.$refs.timeTrackingDrawer.open();
    },
    closeTimeTrackingDrawer (){
      this.$refs.timeTrackingDrawer.cancel();

    }

  },
};

</script>


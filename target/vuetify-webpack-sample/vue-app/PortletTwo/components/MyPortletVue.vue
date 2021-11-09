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
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                color="primary"
                dark
                class="mb-2"
                v-on="on"
              >
                New Article
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.codeArticle"
                        label="Code Article"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.designation"
                        label="Designation"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.prixUnitaireHT"
                        type="number"
                        label="P rix Unitaire HT"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.prixTVA"
                        type="number"
                        label="Prix TVA"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.prixUnitaireTTC"
                        type="number"
                        label="Prix Unitaire TTC"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-combobox
                        v-if="editedIndex === -1"
                        v-model="editedItem.client"
                        :items="selectableClients"
                        item-text="name"

                        item-value="id_client"
                        clearable
                        label="Client"
                      ></v-combobox>

                      <p v-else >Client : {{ editedItem.client.name }}</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
      <template v-slot:item="{ item }">
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
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>

    <!--     <v-app
      id="timeTrackingApp"
      class="VuetifyApp timeTrackingApp"
      color="transaprent">
      <main>
        <v-container px-0 py-0>
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
        </v-container>
      

        <time-tracking-drawer ref="timeTrackingDrawer" />
      </main>
    </v-app> -->
   
  </div>

  
</template>


<script>
import { getClients } from '../../portletThree/service.js';
import {getArticles,addArticle,deleteArticle,updateArticle} from '../service.js';
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
    desserts:[],
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
    defaultItem: {
      codeArticle: 0,
      designation: '',
      prixUnitaireHT: 0,
      prixTVA: 0,
      prixUnitaireTTC: 0,
      client:null
    },

    selectableClients:[],

    //drawer
    openDrawer: false
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Article' : 'Edit Article';
    },
  },

  created () {
    this.initialize();
  },

  methods: {
    
    initialize () {
  
      getArticles().then(res => {
        this.data = res;
        this.loadingArticles =false;
      });

      getClients().then(res =>{
        this.selectableClients = res;
      });
    },

       

    editItem (item) {
      this.editedIndex = item.idArticle;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem (item) {
      this.editedIndex = item.idArticle;
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm () {
      deleteArticle(this.editedIndex).then(()=>{
        this.initialize();
      });
      this.closeDelete();
    },

    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete () {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save () {
      const newArticle = {
        codeArticle: this.editedItem.codeArticle,
        designation: this.editedItem.designation,
        prixTVA: parseInt(this.editedItem.prixTVA),
        prixUnitaireHT: parseInt(this.editedItem.prixUnitaireHT),
        prixUnitaireTTC: parseInt(this.editedItem.prixUnitaireTTC)
      };
      if (this.editedIndex > -1) {
        updateArticle(newArticle,this.editedItem.idArticle).then(()=>{
          this.initialize(0);
        });

      } else {
        //console.log( this.editedItem);
        addArticle(newArticle,this.editedItem.client.id_client).then(()=>{
          getArticles().then(res => {
            this.data = res;
            this.loadingArticles =false;
          });
        }); 
        //this.desserts.push(this.editedItem);

      }
      this.close();
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    openTimeTrackingDrawer() {
      this.$refs.timeTrackingDrawer.open();
    }, 
  },
};

</script>


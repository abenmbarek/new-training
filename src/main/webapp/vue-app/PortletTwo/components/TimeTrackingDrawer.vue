
<template>
  <exo-drawer
    ref="timeTrackingDrawer"
    :right="!$vuetify.rtl"
    @closed="cancel">
    <template slot="title">
      <span class="text-h5">{{ formTitle }}</span>
    </template>
    <template slot="content">
      <form @submit.prevent="onSubmit">
  

        <v-text-field
          v-model="editedItem.codeArticle"
          label="Code Article"
        ></v-text-field>

        <v-text-field
          v-model="editedItem.designation"
          label="Designation"
        ></v-text-field>
       
        <v-text-field
          v-model="editedItem.prixUnitaireHT"
          type="number"
          label="P rix Unitaire HT"
        ></v-text-field>
      
        <v-text-field
          v-model="editedItem.prixTVA"
          type="number"
          label="Prix TVA"
        ></v-text-field>
      
        <v-text-field
          v-model="editedItem.prixUnitaireTTC"
          type="number"
          label="Prix Unitaire TTC"
        ></v-text-field>
       
        <v-combobox
          v-if="index === -1"
          v-model="editedItem.client"
          :items="clients"
          item-text="name"

          item-value="id_client"
          clearable
          label="Client"
        ></v-combobox>

     
      </form>
  

    </template>
    <template slot="footer">
      <v-btn
        color="blue darken-1"
        text
        @click="cancel"
      >
        Cancel
      </v-btn>
      <v-btn
        color="blue darken-1"
        text
        @click="onSubmit"
      >
        Save
      </v-btn>
    </template>
  </exo-drawer>
</template>

<script>


export default {

  props : {
    clients : {
      type: Array[Object],
      default : []
    },
    index : { 
      type : Number,
      require : true,
      default : -1
    },
  },

  data(){

    return{
      editedItem: {
        codeArticle: 0,
        designation: '',
        prixUnitaireHT: 0,
        prixTVA: 0,
        prixUnitaireTTC: 0,
        client:null
      },
      

    };
  },
    
  computed: {
    formTitle () {
      return this.index === -1 ? 'New Article' : 'Edit Article';
    },
  },

  methods:{
    
    cancel() {

      this.editedItem.codeArticle = 0;
      this.editedItem.designation = '';
      this.editedItem.prixUnitaireHT = 0;
      this.editedItem.prixTVA = 0;
      this.editedItem.prixUnitaireTTC = 0;
      this.editedItem.client = null;

      this.$refs.timeTrackingDrawer.close();
    },
    open() {
      this.$refs.timeTrackingDrawer.open();
    },
    // called from parent
    setItem(item){
      this.editedItem = item;
    },

    onSubmit(){
      this.$emit('save-article-data',this.editedItem);
    }
  }
};
</script>


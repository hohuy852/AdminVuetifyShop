<template>
  <v-container>
    <v-data-table
      :headers="headers"
      item-key="name"
      :items="products"
      disable-sort
    >
      <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
             <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Name"
                      dense
                      outlined
                      rounded
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
    data(){
        return{
            dialog: false,
            headers: [
                {
                    text: 'ID',
                    value: 'id',
                    align: 'left'
                },
                 {
                    text: 'Title',
                    value: 'title',

                },
                {
                    text: 'Price',
                    value: 'price',

                },
                {
                    text: 'Image',
                    value: 'image'
                },
                {
                    text:'Description',
                    value: 'description'
                },
                {
                    text: 'Ventor',
                    value: 'ventor'
                },
                {
                    text: 'Category',
                    value: 'category'
                },
                {
                    text: 'Preview Image',
                    value:'previewImage'
                },
                {
                    text: 'Actions',
                    value: 'actions'
                }
            ],

        }
    },
    computed:{
        formTitle(){
            return ''
        }
    },
    methods:{
        close(){
            this.dialog = false
        }
    }
};
</script>

<style>
</style>
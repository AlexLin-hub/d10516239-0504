<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-10">人員清單</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4" cols="12">
        <v-card class="d-flex flex-column px-5 py-3 rounded-lg" height="150px">
          <div class="d-flex align-center flex-grow-0">
            <h3 class="primary--text"><strong>王小明</strong></h3>
            <h4 class="gray--text ml-auto">男</h4>
          </div>

          <div class="flex-grow-0">
            <span class="gray--text"> 202120120120120 </span>
          </div>

          <div class="flex-grow-1 d-flex align-end">
            <v-icon left color="secondary"> mdi-gmail </v-icon>
            <span class="secondary--text"> Takming001@gs.takming.edu.tw </span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style>
</style>
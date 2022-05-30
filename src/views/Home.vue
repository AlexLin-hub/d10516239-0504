<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-10">人員清單</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" cols="12" v-for="i in 9" :key="i">
        <v-card height="150px" class="d-flex flex-column px-5 py-3 rounded-lg">
          <div class="d-flex align-center flex-grow-0">
            <h3 class="primary--text">
              <strong>{{user.name}}</strong>
            </h3>
            <h4 class="gray--text ml-auto">{{user.gender}}</h4>
          </div>
          <div class="flex-grow-0">
            <span class="gray--text">{{user.UID}}</span>
          </div>
          <div class="d-flex flex-grow-1 align-end">
            <v-icon left color="secondary">mdi-gmail</v-icon>
            <span class="secondary--text">{{user.email}}</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-8">
      <v-col cols="12">
        <v-pagination :value="1" :length="6" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import admin from "../assets/admin.json";
export default {
  data() {
    return {
      user: {
        UID: "2021062012003739",
        SID: "ROOT",
        CID: "",
        name: "Am",
        phone: "0987654334",
        gender: "M",
        email: "Takming014@takming.edu.tw",
        zip: 300,
        address: "新竹縣湖口鄉德和路228號",
        createTime: "2021-06-20 12:00:37",
        updateTime: "2021-06-20 12:00:37",
        isDelete: null
      },
      users: [],
      page: 1
    };
  }
};
</script>

<style scoped>
</style>
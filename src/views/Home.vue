<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center py-10">人員清單</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" cols="12" v-for="user in currentUsers" :key="user.UID">
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
        <v-pagination v-model="page" :length="totalPages" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import admin from "../assets/admin.json";
export default {
  data() {
    return {
      users: [],
      page: 1
    };
  },
  created() {
    this.getUsers();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / 9);
    },
    currentUsers() {
      const begin = (this.page - 1) * 9;
      const end = begin + 9;
      return this.users.slice(begin, end);
    }
  },
  methods: {
    getUsers() {
      this.users = admin.data.user;
    }
  }
};
</script>

<style scoped>
</style>
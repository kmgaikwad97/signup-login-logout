<template>
  <div>
    <div class="container">
      <div class="box">
        <div class="search-box-main">
          <input
            placeholder="Search Name"
            type="text"
            class="search"
            v-model="search"
          />
          <i class="icon fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="text-end logout">
          <a class="icon-logout" @click="logout"
            ><i class="fa-solid fa-right-from-bracket"></i>Logout</a
          >
          <!-- <router-link @click="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</router-link> -->
        </div>
      </div>

      <!-- Pagination Starts -->

      <div class="overflow-auto">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows1"
          :per-page="perPage"
          aria-controls="my-table"
          align="center"
        ></b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>

        <b-table
          striped
          hover
          dark
          class="pagination-table"
          id="tableflow"
          :fields="fields"
          :items="this.searchBox || this.list"
          :per-page="perPage"
          :current-page="currentPage"
          small
        >
          <template v-slot:cell(actions)="{}">
            <span>
              <button
                type="button"
                class="btn btnyellowchange btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalUpdate"
              >
                Update
              </button>
            </span>

            <span>
              <button
                type="button"
                class="btn btnredchange btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete
              </button>
            </span>
          </template>
        </b-table>
      </div>

      <!-- comment out section
     <template v-slot:cell(actions)="{  }" >
          <span>
            <b-btn>Edit</b-btn>
          </span>
          
          <span >
            <b-btn  @click="deletedata()" class="btnred btn btn-danger">Delete</b-btn>
            <button type="button" class="btn btnred btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Delete
</button>

          </span>

      

        </template>
        -->

      <!-- Pagination Ends -->

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Data</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container pt-10">
                <div class="box">
                  <div class="search-box-main">
                    <input
                      placeholder="Search Name"
                      type="text"
                      class="search"
                      v-model="search"
                    />
                    <i class="icon fa-solid fa-magnifying-glass"></i>
                  </div>

                  <div class="text-end logout">
                    <a class="icon-logout" @click="logout"
                      ><i class="fa-solid fa-right-from-bracket"></i>Logout</a
                    >
                    <!-- <router-link @click="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</router-link> -->
                  </div>
                </div>

                <!-- <div class="search-box">
            <div class="search-box-main text-start">
              <input placeholder="Search Name" type="text" class="search" v-model="search" />
            <i class="icon fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div class="text-end logout">
                <a href=""><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
            </div>

        </div> -->

                <table
                  id="tableflow"
                  class="
                    tableflow
                    table table-bordered table-secondary table-striped
                  "
                >
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Age</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in searchBox" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td v-text="user.firstname"></td>
                      <td v-text="user.lastname"></td>
                      <td v-text="user.phone"></td>
                      <td v-text="user.age"></td>
                      <td v-text="user.email"></td>
                      <td>******</td>
                      <td>
                        <button
                          @click="deletedata(user.id)"
                          class="btnred btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--Modal 1-->

      <div
        class="modal"
        id="exampleModalUpdate"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Data</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="box">
                  <div class="search-box-main">
                    <input
                      placeholder="Search Name"
                      type="text"
                      class="search"
                      v-model="search"
                    />
                    <i class="icon fa-solid fa-magnifying-glass"></i>
                  </div>

                  <div class="text-end logout" data-bs-dismiss="modal">
                    <a class="icon-logout" @click="logout"
                      ><i class="fa-solid fa-right-from-bracket"></i>Logout</a
                    >
                    <!-- <router-link @click="logout"><i class="fa-solid fa-right-from-bracket"></i>Logout</router-link> -->
                  </div>
                </div>

                <!-- <div class="search-box">
            <div class="search-box-main text-start">
              <input placeholder="Search Name" type="text" class="search" v-model="search" />
            <i class="icon fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div class="text-end logout">
                <a href=""><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
            </div>

        </div> -->

                <table
                  id="tableflow"
                  class="
                    tableflow
                    table table-bordered table-secondary table-striped
                  "
                >
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Mobile Number</th>
                      <th scope="col">Age</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                      <th scope="col">Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in searchBox" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td v-text="user.firstname"></td>
                      <td v-text="user.lastname"></td>
                      <td v-text="user.phone"></td>
                      <td v-text="user.age"></td>
                      <td v-text="user.email"></td>
                      <td>******</td>
                      <td>
                        <button class="btnyellow1 btn btn-warning">
                          <router-link
                            class="btnyellow"
                            :to="'/update/' + user.id"
                            >Update</router-link
                          >
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="search-box">
            <div class="search-box-main text-start">
              <input placeholder="Search Name" type="text" class="search" v-model="search" />
            <i class="icon fa-solid fa-magnifying-glass"></i>
            </div>
            
            <div class="text-end logout">
                <a href=""><i class="fa-solid fa-right-from-bracket"></i>Logout</a>
            </div>

        </div> -->

      <!-- <table
        id="tableflow"
        class="tableflow table table-bordered table-secondary table-striped"
      >
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in searchBox" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td v-text="user.firstname"></td>
            <td v-text="user.lastname"></td>
            <td v-text="user.phone"></td>
            <td v-text="user.age"></td>
            <td v-text="user.email"></td>
            <td>******</td>
            <td>
              <button class="btnyellow1 btn btn-warning">
                <router-link class="btnyellow" :to="'/update/' + user.id"
                  >Update</router-link
                >
              </button>
            </td>
            <td>
              <button
                @click="deletedata(user.id)"
                class="btnred btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "UserData",

  data() {
    return {
      list: [],
      hideMe: true,
      search: "",
      perPage: 3,
      currentPage: 1,
      fields: [
        "id",
        "firstname",
        "lastname",
        "email",
        "phone",
        "age",
        "password",
        "actions",
      ],
    };
  },

  methods: {
    async deletedata(id) {
      console.log("id", id);
      let result = await axios.delete("http://localhost:3001/user/" + id);

      console.log(result);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      const result = await axios.get("http://localhost:3001/user");

      console.log(result);
      console.log("IMP", result.data);
      this.list = result.data;
    },

    logout() {
      console.log("LOGOUT");
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    rows1() {
      return this.list.length;
    },

    searchBox() {
      if (this.search) {
        return this.list.filter((item) => {
          console.log("items", item);
          return this.search
            .toLowerCase()
            .split("")
            .every(
              (data) =>
                item.firstname.toLowerCase().includes(data) ||
                item.lastname.toLowerCase().includes(data) ||
                item.age.toLowerCase().includes(data) ||
                item.email.toLowerCase().includes(data)
            );
        });
      } else {
        return this.list;
      }
    },
  },

  async mounted() {
    this.loadData();

    let user = localStorage.getItem("login-info");
    if (!user) {
      this.$router.push({
        name: "Home",
      });
    }
  },
};
</script>





<style>
ul {
  text-align: justify !important;
}

.search-box-main {
  width: 20%;
  margin-bottom: 5px;
  position: relative;
}

.icon {
  position: absolute;
  right: 12%;
  top: 20%;
}

.search {
  /* border-radius: 10px !important;
  width: 50%; */
  padding-left: 10px;
  border: none;
  border-radius: 7px;
  height: 32px;
}

.btnyellow {
  text-decoration: none !important;
  color: white;
  /* transition: 2s; */
}

.btnyellow1:hover {
  background: #ffa700 !important;
  /* background: red; */
  transition: 1s;
}

.btnred:hover {
  background: #aa303c;
  transition: 1s;
}

.box {
  display: flex;
  /* align-content: space-between; */
  justify-content: space-between;
}

.icon-logout {
  cursor: pointer;
  color: #2c3e50 !important;
}
.icon-logout:hover {
  color: white !important;
}

.pagination-table {
  margin: 0 auto;
}

.modal-backdrop,
.modal-backdrop.show {
  opacity: 0 !important;
  z-index: -1 !important;
}

.btnyellowchange {
  margin-right: 7px !important;
}

.modal-open {
  overflow: auto !important;
}
</style>

<template>
  <div class="nav-container">
    <nav>
      <button class="toggle-button" @click="toggleMenu">
        <svg
          v-if="!menuOpen"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
        <svg
          v-else
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <ul :class="{ open: menuOpen }">
        <li @click="toggleMenu">
          <router-link to="/">Home</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link to="/Categories">Сategories</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link to="/product">Product Details</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <h1 class="Logo-name">RUBY</h1>
    </div>
    <div>
      <div class="srchBar ">
        <form method="GET">
          <div class="relative text-gray-400 focus-within:text-gray-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 text-sm text-white bg-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              autocomplete="off"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="icons">
      <div v-for="(img, index) in icons" :key="index">
        <img :src="img" alt="logo" class="logoImg" />
      </div>
    </div>
  </div>
</template>

<script>
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import like from "../assets/Images/saved.png";
import profile from "../assets/Images/account (1).png";
import bag from "../assets/Images/bag (1).png";
export default {
  name: "Navbar",
  data() {
    return {
      searchQuery: "",
      icons: [like, profile, bag],
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  components: {},

  icons: {
    faSearch,
  },
};
</script>

<style scoped>
nav {
  background-color: white;
  color: #333;
}
ul {
  list-style-type: none;
  padding: 0;
  background-color: #f6f1ec;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 16px;
  font-weight: 500;
}
li {
  display: inline;
  margin-right: 10px;
}
a {
  color: #333;
  text-decoration: none;
}
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
}
.Logo-name {
  font-size: 46px;
  color: #302e2d;
}
.icons {
  display: flex;
  align-items: center;
  gap: 36px;
}
nav {
  width: 40%;
}
.toggle-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  display: none;
}


@media (max-width: 931px) {
  .toggle-button {
    display: block;
    position: relative;
  }
  nav {
    width: 8%;
    background: none;
  }
  ul {
    display: none;
  }

  .open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #f6f1ec;
    width: fit-content;
    z-index: 10;
    padding: 1rem 2rem;
  }

  ul {
    flex-direction: column;
    align-items: flex-start;
  }
  .Logo-name {
    font-size: 25px;
  }
  .logoImg {
    width: 19px;
  }
  .icons {
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .logoImg {
    width: 14px;
  }
  .srchBar{
    display: none;
  }
  
}
</style>

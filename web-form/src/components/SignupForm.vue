<template>
  <label for="email">Email</label>
  <input type="email" required v-model="email" />
  <br />
  <label for="password">Password</label>
  <input type="password" required v-model="password" />
  <br />

  <select name="" id="" v-model="role">
    <option value="designer">Web Designer</option>
    <option value="developer">Web Developer</option>
  </select>

  <br />
  <input type="checkbox" v-model="terms" />
  <label for="terms">Accept terms and conditions</label>
  <br />
  <label for="name">Abc</label>
  <input type="checkbox" value="abc" v-model="names" />
  <br />
  <label for="def">Def</label>
  <input type="checkbox" value="def" v-model="names" />
  <br />

  <label for="ghi">Ghi</label>
  <input type="checkbox" value="ghi" v-model="names" />
  <br />
  <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
  <p v-for="skill in skills" :key="skill">{{ skill }}</p>
  <br />

  <p>Email - {{ email }}</p>
  <p>Password - {{ password }}</p>
  <p>Role - {{ role }}</p>
  <p>Terms - {{ terms }}</p>
  <p>Names - {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      names: [],
      skills: [],
      tempSkill: "",
      terms: "",
    };
  },

  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
      }
      this.tempSkill = "";
    },
  },
};
</script>

<style></style>

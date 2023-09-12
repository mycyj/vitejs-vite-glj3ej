      <template>
          <div>{{a}}</div>
          <input type="text" v-model="a">
      </template>
      <script setup lang="ts">
      import {ref} from "vue"
      let a = ref("A");
      </script>
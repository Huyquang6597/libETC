<template>
  <a-form
      :model="movies"
      v-bind="layout"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
  >
<!--    <a-form-item :name="['movies', 'id']" label="Id" :rules="[{ required: true }]">-->
<!--      <a-input v-model:value="movies.movie.id" />-->
<!--    </a-form-item>-->
    <a-form-item :name="['movies', 'name']" label="Name" :rules="[{ required: false}]">
      <a-input v-model:value="movies.movie.name" />
    </a-form-item>
    <a-form-item :name="['movies', 'type']" label="Type" :rules="[{required: false}]">
      <a-input v-model:value="movies.movie.type" />
    </a-form-item>
    <a-form-item :name="['movies', 'price']" label="Price" :rules="[{required: false}]">
      <a-input v-model:value="movies.movie.price" />
    </a-form-item>
    <a-form-item :name="['movies', 'time']" label="Time">
      <a-textarea v-model:value="movies.movie.time" />
    </a-form-item>
    <a-form-item :name="['movies', 'premiereDate']" label="Premiere Date">
      <a-textarea v-model:value="movies.movie.premiereDate" />
    </a-form-item>
    <a-form-item :name="['movies', 'description']" label="Description" :rules="[{required: false}]">
      <a-textarea v-model:value="movies.movie.description" />
    </a-form-item>
    <a-form-item :name="['movies', 'statuss']" label="Status" :rules="[{ required: false, min: 1, max: 99 }]">
      <a-textarea v-model:value="movies.movie.statuss" />
    </a-form-item>
    <a-form-item :name="['movies', 'tickets']" label="Tickets" :rules="[{required: false, min:1, max: 200000}]">
      <a-textarea v-model:value="movies.movie.tickets" />
    </a-form-item>
    <a-form-item :name="['movies', 'production']" label="Production" :rules="[{required: false}]">
      <a-textarea v-model:value="movies.movie.production" />
    </a-form-item>
    <a-form-item :name="['movies', 'director']" label="Director" :rules="[{required: false}]">
      <a-textarea v-model:value="movies.movie.director" />
    </a-form-item>
    <a-form-item :name="['movies', 'actor']" label="Actor" :rules="[{required: false}]">
      <a-textarea v-model:value="movies.movie.actor" />
    </a-form-item>


    <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <a-button type="primary" html-type="submit" @click="addMovie">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
const baseUrl = 'http://localhost:8051/swagger-resources/smovie';
import { defineComponent, reactive } from 'vue';
import axios from "axios";
export default defineComponent({
  setup() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
    const movies = reactive({
      user: {
        name: '',
        age: undefined,
        email: '',
        website: '',
        introduction: '',
      },
      movie: {
        id: 1,
        name: '',
        type: '',
        time: '',
        premiereDate: '',
        description: '',
        statuss: '',
        tickets: '',
        production: '',
        director: '',
        actor: '',
      },
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    return {
      movies,
      onFinish,
      layout,
      validateMessages,
    };
  },

  methods:{
    addMovie() {
      axios.post(`${baseUrl}/save`, this.movies.movie)
          .then(response => {
            console.log(response)
            console.log(this.valueAdd)
            this.showMessage('success', 'Create!', 'Tạo mới thành công');
            this.getAll();

          })
          .catch(error => {
            // console.log(this.valueAdd)
            console.log(error);
          })
    },
  }

});
</script>
<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, record }">

      <template v-if="column.dataIndex === 'action'">
        <a-button type="primary" >Edit</a-button>
        <a-button type="danger" @click="this.deleteMovie(record.id)">Delete</a-button>
      </template>
    </template>
    <template #title>Header</template>
    <!--    <template #footer>Footer</template>-->
  </a-table>
</template>
<script>
const baseUrl = 'http://localhost:8051/swagger-resources/smovie';
import {defineComponent , ref} from 'vue';
import axios from "axios";


// const data = [{
//   key: '1',
//   name: 'John Brown',
//   typee: '￥300,000.00',
//   price: 'New York No. 1 Lake Park',
//   time: 'New York No. 1 Lake Park',
//   premiereDate: 'New York No. 1 Lake Park',
//   description: 'New York No. 1 Lake Park',
//   status: 'New York No. 1 Lake Park',
//   tickets: 'New York No. 1 Lake Park',
//   production: 'New York No. 1 Lake Park',
//   director: 'New York No. 1 Lake Park',
//   actor: 'New York No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   money: '￥1,256,000.00',
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '3',
//   name: 'Joe Black',
//   money: '￥120,000.00',
//   address: 'Sidney No. 1 Lake Park',
// }];
export default defineComponent({

  data() {

    const columns = ref([{

        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Time',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: 'Premiere Date',
        dataIndex: 'premiereDate',
        key: 'premiereDate',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Status',
        dataIndex: 'statuss',
        key: 'statuss',
      },
      {
        title: 'Tickets',
        dataIndex: 'tickets',
        key: 'tickets',
      },
      {
        title: 'Production',
        dataIndex: 'production',
        key: 'production',
      },
      {
        title: 'Director',
        dataIndex: 'director',
        key: 'director',
      },
      {
        title: 'Actors',
        dataIndex: 'actor',
        key: 'actor',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
      }]);


    return {
      data: [],
      columns,
    };
  },
  mounted() {
    this.getMovies();
},

  methods: {
    async getMovies() {
      await axios.get(`${baseUrl}/get-all`)
          .then(response => {
            console.log(response.data);
            this.data = response.data;
            return response.data;
          });
    },

    deleteMovie(id) {
      console.log(id)
      axios.delete(`${baseUrl}/delete?id=${id}`)
          .then(response => {
            console.log(response)
            this.getMovies();
          }
          )
          .catch(error => {
            console.log(error);
          });
  },

    findMoviesById(id) {
      axios.get(`${baseUrl}/search-by-id?id=${id}`)
          .then(response => {
            this.valueAdd = response.data[0];
          })
          .catch(error => {
            console.log(error);
          })
    },
  },
});


</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>

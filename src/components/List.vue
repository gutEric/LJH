<template>
  <div>
    <!--<h3>遍历数组</h3>-->
    <h3>排序</h3>
    <div>
      <button @click="orderByAge(0)">默认</button>
      <button @click="orderByAge(1)">升序</button>
      <button @click="orderByAge(2)">降序</button>
    </div>
    <div>
      <h3>搜索列表</h3>
      <input type="text" name="name" value="" placeholder="请输入要搜索的名字" v-model="searchName" />
    </div>
    <ul>
      <li v-for="(persons,index) in filterNames" :key="listKey[index]" @click="show(persons)" >
        <div v-if ="persons.bol" >id:{{listKey[index]}}:  名字：{{persons.Name}}，年龄：{{persons.age}}，性别：{{persons.sex}}</div> 
      </li>
    </ul>
    <!--<input type="text" name="name" value="" v-model="name"/><button @click="add">add</button>
                                                            <ul>
                                                              <li v-for="(item,index) in ListAdd" :key="item.ID" ><input  type="radio" name="name" value="" />{{item.name}}</li>

                                                            </ul>-->
  </div>
</template>
<script>
  import shortId from 'shortid'
  export default {
  name: 'List',
  data () {
    return {
      searchName:'',
      List: [
        { Name: '赵一', age: 18, sex: '男', bol:true},
        { Name: '钱二', age: 120, sex: '男', bol: true },
        { Name: '孙三', age: 19, sex: '男', bol: false },
        { Name: '李四', age: 30, sex: '男', bol: true},
        { Name: '周五', age: 18, sex: '男', bol: true},
        { Name: '吴六', age: 17, sex: '男', bol: true},
        { Name: '郑七', age: 15, sex: '男', bol: true},
        { Name: '王八', age: 10, sex: '男', bol: true},
      ],
      listKey: [],
      orderType: 0,
      name: '',
      ListAdd: [
        {name:'111',ID:1},
        {name:'222',ID:2},
        {name:'333',ID:3},
        {name:'444',ID:4},
      ]
    }
    },
    mounted() {
      this.listKey = this.List.map(v => shortId.generate())
    },
    computed: {
      filterNames() {
        //1.获取数据
        let { searchName, List, orderType } = this;

        //2.取出数组的数据
        let arr = [...List];

        //3、过滤数组
        if (searchName.trim()) {
          arr = List.filter(p => p.Name.indexOf(searchName) !== -1);

        }

        //排序
        if (orderType) {
          arr.sort((p1, p2) => {
            if (orderType === 1) {
              return p2.age - p1.age
            } else {
              return p1.age - p2.age
            }
          })
        }

        return arr;
      }
    },
    methods: {
      orderByAge(orderType) {
        this.orderType = orderType;
      },
      show(e) {
        //e.Name = '修改'
        console.log(e)
      },
      add() {
        this.ListAdd.unshift({ name: this.name, ID: this.ListAdd.length+1})
      },
      choice(e) {
        e.name = '修改了'
      }
    }
}
</script>

<style scoped>
  li, ul {
    list-style:none;
  }
</style>

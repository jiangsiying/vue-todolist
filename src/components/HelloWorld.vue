<template>
  <div class = "todolist">
        <div class ="addList">
            <span class="spanName">ToDoList</span>
            <input type = "text" class="input" v-model="inputValue"
             @keyup.enter="addTodoTask" autofocus="autofocus" autocomplete="off" placeholder="请输入任务">
        </div>
        <div class="listContent">
            <span class ="font">正在进行 </span> 
            {{this.todoList.length}}
            <div class="doingList">
                    <div class="todo" v-for="(item,index) in todoList" :item=item :key=item>
                        <div class="view">
                            <input type = "checkbox" @click="completeDoingTask(index,item)">
                            <label>{{ item }}</label>
                            <button class="delete" @click="removeDoingTask(index)">Delete</button>
                        </div>
                    </div>
            </div>
            <br>
            <span class ="font">已经完成</span>
             {{this.doneList.length}}
            <div class="doneList">
                  <div class="todo" v-for="(item,index) in doneList" :item=item :key=item>
                        <div class="view">
                            <label>{{ item }}</label>
                            <button class="delete" @click="removeDoneTask(index)">Delete</button>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {  //es6暴露当前组件对象
  name: 'HelloWorld',
  el:"#todoapp",
  data() {
    return{
    //  总数据
    todoList: [],
    doneList: [],
    //  输入的内容
    inputValue: "",
    }
    
  },
  // 方法
  methods: {
    // 增加待完成任务
    addTodoTask() {
      this.todoList.push(this.inputValue);
    },
    // 删除已做完的任务
    removeDoneTask(index){
      this.doneList.splice(index, 1);
    },
    //删除正在做的任务
    removeDoingTask(index){
      this.todoList.splice(index, 1);
    },
    // 完成任务
    completeDoingTask(index, task){
      this.todoList.splice(index, 1);
      this.doneList.push(task);
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todolist{
  height:600px;
  background: #d9dadb;
}
.addList{
    background-color: black;
    text-align: center;
}
.spanName {
    color: white;
    font-size: 20px;
}
.input{
    width: 300px;
    margin-left: 100px;
}
.listContent {
    text-align: center;
    margin-top:20px;
}

.font {
    font-weight: bold;
    font-size: 20px;
}

.delete {
    margin-left:10px;
    padding:2px;
}

</style>

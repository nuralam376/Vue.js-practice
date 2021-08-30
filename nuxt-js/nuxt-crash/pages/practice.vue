<template>
  <div>
      <h1 >Volume - {{ volume }}</h1>

      <button @click = "volume += 2">Increase</button>
      <button @click = "volume -= 2">Decrease</button>
      <input type="text" v-model = "task" />
      <input type="text" v-model = "person.name" />
      <input type="text" v-model = "person.age" />
      <button @click = "taskList.concat('task2')">Add Task</button>
  </div>
</template>

<script>
export default {
    data()
    {
        return {
            volume : 0,
            task : "Task 1",
            person : {
                name : "",
                age : ""
            },
            taskList : []
        };
    },

    watch : {
        volume(newValue, oldValue)
        {
            if(newValue > oldValue && newValue === 16)
            {
                alert("Volume is too high");
            }
        },
        task : {
            handler(newValue)
            {
                console.log("Task running", newValue);
            },
            immediate : true
        },
        person : {
            handler(newValue)
            {
                console.log("Person running", newValue);
            },
            deep : true
        },

        taskList : {
            handler(newValue)
            {
                console.log("TaskList running", newValue);
            },
            deep : true
        }
    }
}
</script>

<style>

</style>
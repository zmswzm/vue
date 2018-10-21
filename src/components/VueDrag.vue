<template>
<div class='drag-content'>
  <div class='project-content'>
    <div class='select-item' draggable='true' @dragstart='drag($event)' v-for='pjdt in projectdatas' :key='pjdt.id'>{{pjdt.name}}</div>
  </div>
  <div class='people-content'>
    <div class='drag-div' v-for='ppdt in peopledata' :key='ppdt.id' @drop='drop($event)' @dragover='allowDrop($event)'>
      <div class='select-project-item'>
        <label class='drag-people-label'>{{ppdt.name}}:</label>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.select-item {
  background-color: #5bc0de;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  margin-right: 10px;
  cursor: pointer;
  padding: 6px 20px;
  color: #fff;
}
.cursored {
  cursor: default;
}
.project-content,
.people-content {
  margin: 30px 50px;
}
.people-content {
  margin-top: 30px;
}
.drag-div {
  border: 1px solid #5bc0de;
  padding: 10px;
  margin-bottom: 10px;
  width: 800px;
  cursor: pointer;
}
.select-project-item {
  display: inline-block;
  text-align: center;
  border-radius: 3px;
}
.drag-people-label {
  margin-bottom: 0;
  padding-right: 10px;
}
</style>

<script>
let dom = null
export default {
  name: 'VueDrag',
  components: {},
  ready () {},
  methods: {
    drag (event) {
      dom = event.currentTarget
    },
    drop (event) {
      event.preventDefault()
      event.target.appendChild(dom)
    },
    allowDrop (event) {
      event.preventDefault()
    }
  },
  data () {
    return {
      projectdatas: [
        {
          id: 1,
          name: '葡萄'
        },
        {
          id: 2,
          name: '芒果'
        },
        {
          id: 3,
          name: '木瓜'
        },
        {
          id: 4,
          name: '榴莲'
        }
      ],
      peopledata: [
        {
          id: 1,
          name: '小颖'
        },
        {
          id: 2,
          name: 'hover'
        },
        {
          id: 3,
          name: '空巢青年三'
        },
        {
          id: 4,
          name: '丢丢'
        }
      ]
    }
  }
}
</script>

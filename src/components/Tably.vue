<template>
  <div class="row">    
    
    <div class="col s12">

      <div class="create-button">
        <a @click="addTab" class="waves-effect waves-light btn left"><i class="material-icons left">add</i>add tab</a>
      </div>
    
      <ul class="tabs tably">
        <li v-for="(tab,index) in tabs" class="tab" :key="index">
          <a :href="'#'+tab.target" class="select-tab" tabindex="0">
            <span @click="selectTab(tab.target)" class="title">{{tab.title}}</span>
            <span @click="removeTab(index)" class="close-item">
              <i class="material-icons right">close</i>
            </span>
          </a>
        </li>
        <li class="tab create-tab">
          <a @click="addTab" class="waves-effect waves-light btn-flat" tabindex="0">
            <i class="material-icons">add</i>
          </a>
        </li>
      </ul>
      
      <div class="tabs-content-wrapper" ref="tabContent">  
        <div v-for="(tab,i) in tabs" :key="i" :id="tab.target" :style="'display:none'" :ref="tab.target" class="col s12">{{tab.content}}</div>
      </div>

    </div>

  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.css'
import '../../dist/css/vue-tably.css'
export default {
  name: 'Tably',
  data: function() {
    return {
      id: 0,
      title: '',
      content: '',
      tabs: [],      
    }
  },

  methods: {
    
    addTab() {      
      this.tabs.push({
        id: this.id,
        target: 'tab'+this.id,
        title: 'Tab ' + this.id,
        content: 'Content Tab ' + this.id
      })     
      this.id++
    },

    removeTab(index) {
      this.tabs.splice(index,1)
    },

    selectTab(target) {
      let targetChild = this.$refs.tabContent.children
      targetChild.forEach(element => {
        if(element.id !== target) {
          element.style.display = "none"          
          element.classList.remove("active")
        } else {          
          element.classList.add("active")
        }
      })
    }
  },

  mounted() {
    
    this.addTab(this)    
    this.$nextTick(() => {
      let firstTab = 'tab0'
      this.$refs[firstTab][0].setAttribute('style','display: "block"')      
    })    

    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit()
      let ta = document.querySelectorAll('.tabs');
      M.Tabs.init(ta, {swipeable: false});       
    })
    
  }  
}
</script>

<style>

</style>

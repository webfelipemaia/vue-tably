<template>
  <div class="row">    
    
    <div class="row">
      <div class="col s12">      
        <a @click="addTab" class="waves-effect waves-light btn left"><i class="material-icons left">add</i>add tab</a>
      </div>
    </div>
    
    <div class="col s12">

      <ul class="tabs">
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

    </div>

    <div class="tab-content" ref="tabContent">  
      <div v-for="(tab,i) in tabs" :key="i" :id="tab.target" :style="'display:none'" :ref="tab.target" class="col s12">{{tab.content}}</div>
    </div>

  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'
import 'materialize-css/dist/css/materialize.css'
export default {
  name: 'Vue Tably',
  
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

<style lang="scss" scoped>

ul {
  display: flex;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  flex-grow: 0 !important;
  &.create-tab {
    max-width: 48px;
  }
}

a.select-tab { 
  display: flex !important;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-right: 0.275rem;
}

span.close-item {
  margin-left: 0.5rem;
  width: 39.48px;
  opacity: 0.5;  
  display: flex;
  align-items: center;
  justify-content: center;
}
span.close-item:hover, span.close-item:focus {
  opacity: 1;
}

.create-tab {

  .btn-flat i {
    padding-top: 12px;
    font-size: 24px;
    line-height: 1;
    color: #848484;
  }

  &:hover .btn-flat i {
    color: #444444;
  }

  &:focus {
    color: red;
  }
  
}
</style>

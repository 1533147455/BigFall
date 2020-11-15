<template>
  <div>
     <form action="get">
       行数：<input type="text" id="rows">
       列数：<input type="text" id="cols">
       <input type="button" value="submit" @click="displayTable()">
     </form>
     <div id="table" ></div>
  </div>
</template>

<script>
export default {
  methods: {
    displayTable() {
    
      let oldTable = document.querySelector('table');
        if(oldTable){
          oldTable.parentNode.removeChild(oldTable);
        }
          //  创建table节点
      let table = document.createElement('table');
      //  获取输入的行数，列数
      let rows = document.getElementById('rows').value;
      let cols = document.getElementById('cols').value;
   
      //  创建行和列
      for (let i=0; i<rows; i++) {
          let tr = document.createElement('tr');
          for (let j=0; j<cols; j++) {
            let td = document.createElement('td');
            td.innerHTML = Math.floor(Math.random()*100)
            td.style.border = "1px solid red"
            td.style.width = "100px"
            //  td节点插入到tr中
            tr.appendChild(td);
          }
          //  tr节点插入到table中
          table.appendChild(tr);
      }
      document.getElementById('table').appendChild(table)
    }
  }
}
</script>

<style lang="scss" scoped>
// tr :hover {
//   background-color: red;
// }
td {
  width: 100px;
  border: 1px solid red;
}

</style>
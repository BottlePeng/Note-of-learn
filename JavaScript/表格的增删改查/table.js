//新增数据函数
function addRow() {
  let table = document.getElementById("table1");
  // 获取插入位置
  let length = table.rows.length;
  //   console.log(length);

  //插入行节点
  let newRow = table.insertRow(length);
  //通过insertRow 方法创建一行，传递index参数，index表示创建第几行，
  //0 表示第一行，同时返回一个已经创建的行对象，如果index 小于 0 或 大于表格
  //中的行数，则会抛出 INDEX_SIZE_ERR 异常

  //插入节点内容
  let nameCol = newRow.insertCell(0);
  let phoneCol = newRow.insertCell(1);
  let actionCol = newRow.insertCell(2);
  //这里的insertCell 几乎等同于insertRow ，不过一个是创建行，一个是创建列。
  //同样会返回一个TableCell对象。

  //修改节点文本内容
  nameCol.innerHTML = "名字";
  phoneCol.innerHTML = "地址";
  actionCol.innerHTML = "<button onclick='editRow(this)'>编辑</button><button onclick='deleteRow(this)'>删除</button>";
}

//删除数据函数
function deleteRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

//编辑数据函数
function editRow(button) {
  let row = button.parentNode.parentNode;
  //   console.log(button);
  let name = row.cells[0];
  let phone = row.cells[1];

  //prompt()为浏览器自带的弹窗输入窗口,第一个参数为提示词
  let inputName = prompt("请输入名字:");
  let inputPhone = prompt("请输入联系方式:");

  if (inputName == "" || inputPhone == "") {
    alert("请完整输入");
  } else {
    name.innerHTML = inputName;
    phone.innerHTML = inputPhone;
  }
}

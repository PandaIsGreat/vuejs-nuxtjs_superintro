var data = {
  message: "Hello world!",
  items: ["one", "two", "three", "four", "five"]
};
var app = new Vue({
  el: "#app",
  data: data,
  render: (elem) => {
    var p = elem("p", { style: "font-size:20pt;" }, data.message);
    var li = data.items.map((item) => elem("li", item));
    var ol = elem("ol", li);
    var div = elem("div", [p, ol]);
    return div;
    // return element("ol", [
    //   element("li", "item 1"),
    //   element("li", "item 2"),
    //   element("li", "item 3")
    // ]);
    // return element("p", { style: "font-size:20pt; color:red;" }, data.message);
  }
});

function doAction() {
  data.message = "You Clicked!!!";
  var newdata = ["ichi", "ni", "san", "yon", "go"];
  data.items[0] = "zero";
  for (n in data.items) {
    data.items[n] = newdata[n];
  }
}

let data2 = {
  messages: "<li>Hello vue!</li>"
};
let app2 = new Vue({
  el: "#app2",
  data: data2
});
function doInput(event) {
  data2.message2 = event.target.value;
}
function doAction2() {
  data2.messages = "<li>" + data2.message2 + "</li>" + data2.messages;
}

let data3 = {
  message: "Hello Vue!",
  style: "font-size:20px; color: red;"
};
let app3 = new Vue({
  el: "#app3",
  data: data3
});
function doChange3(event) {
  data3.style = "font-size:" + event.target.value + "px; color:red;";
}
let data4 = {
  message: "Hello Vue!",
  isRed: true,
  isBlue: false
};
let app4 = new Vue({
  el: "#app4",
  data: data4
});
function doAction4() {
  data4.isRed = !data4.isRed;
  data4.isBlue = !data4.isBlue;
}

let classObj = { red: true, blue: false };
let data5 = {
  message: "Hello Vue!",
  classes: classObj
};
let app5 = new Vue({
  el: "#app5",
  data: data5
});
function doAction5() {
  classObj.red = !classObj.red;
  classObj.blue = !classObj.blue;
}
let data6 = {
  message: "Hello Vue!",
  styles: {
    margin: "10px",
    padding: "5px 20px",
    fontSize: "20px",
    color: "red",
    backgroundColor: "#fee",
    border: "3px solid blue"
  }
};
let app6 = new Vue({
  el: "#app6",
  data: data6
});

let data7 = {
  flag: true
};
let app7 = new Vue({
  el: "#app7",
  data: data7
});
function doAction7() {
  data7.flag = !data7.flag;
}

let data8 = {
  flag: true
};
let app8 = new Vue({
  el: "#app8",
  data: data8
});
function doAction8() {
  data8.flag = !data8.flag;
}
let data9 = {
  items: [
    { name: "taro", mail: "taro@yamada" },
    { name: "hanako", mail: "hanako@flower" }
  ]
};
let app9 = new Vue({
  el: "#app9",
  data: data9
});

let data10 = {
  items: { taro: { mail: "taro@yamada" }, hanako: { mail: "hanako@flower" } }
};
let app10 = new Vue({
  el: "#app10",
  data: data10
});

let data11 = {
  items: [
    { name: "taro", mail: "taro@yamada" },
    { name: "hanako", mail: "hanako@flower" },
    { name: "sachiko", mail: "sashico@flower" },
    { name: "sachiko2", mail: "sashico2@flower" },
    { name: "sachiko3", mail: "sashic3o@flower" }
  ]
};
let app11 = new Vue({
  el: "#app11",
  data: data11
});

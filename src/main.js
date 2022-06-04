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

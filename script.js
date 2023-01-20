const form = document.querySelector("form");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-BR").slice(0, 5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Day already exists");
    return;
  }

  nlwSetup.addDay(today);
}

function save() {
  const data = nlwSetup.data;
  const stringifyData = JSON.stringify(data);
  localStorage.setItem("NLWSetup@habits", stringifyData);
}

function setAllDataOnInit() {
  const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};
  nlwSetup.setData(data);
  nlwSetup.load();
}

(function init() {
  setAllDataOnInit();
})();

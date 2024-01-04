function toggleContent() {
  let menu = document.getElementById("menu");
  let selectedValue = menu.options[menu.selectedIndex].value;
  let content1 = document.getElementById("content1");
  let content2 = document.getElementById("content2");
  let content3 = document.getElementById("content3");
  content1.classList.add("hidden");
  content2.classList.add("hidden");
  content3.classList.add("hidden");
  document.getElementById(selectedValue).classList.remove("hidden");
}

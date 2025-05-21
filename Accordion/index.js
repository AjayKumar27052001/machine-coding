const accordionHandler = (id) => {
  const clickedItem = document.getElementById(id);
  //close other items

  const allItems = document.querySelectorAll(".accordion-item");
  allItems.forEach((item) => {
    if (item !== clickedItem) {
      item.classList.remove("active");
    }
    clickedItem.classList.toggle("active");
  });
};

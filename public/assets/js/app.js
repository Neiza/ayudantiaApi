"use strict";
const render = (root) =>{
  root.empty();
   const wrapper = $('<div class="wrapper"></div>');
   wrapper.append(PeopleData());
   root.append(wrapper);
}


const state = {
  datos: null
}


$( _ => {
  $.get("https://randomuser.me/api/", (json) => {
    alert("see");
    state.datos = json;

    const root = $('.root');
    render(root);

  });
});

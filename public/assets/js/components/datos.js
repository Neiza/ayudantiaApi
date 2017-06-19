"use strict";

const PeopleData = () => {
  const div = $('<div class="container"></div>');
  const name = $('<h4>"nombre: "' + state.datos.results[0].name.first+ '</h4>');

  div.append(name);

  return div;
}

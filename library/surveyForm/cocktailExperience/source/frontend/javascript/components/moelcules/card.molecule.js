
const Card = (cmp) => {
  const component = cmp;
  console.log(component);
};

(function () {
  document.querySelectorAll('[data-js-component="card"]').forEach((cmp) => {
    Card(cmp);
  });
})();

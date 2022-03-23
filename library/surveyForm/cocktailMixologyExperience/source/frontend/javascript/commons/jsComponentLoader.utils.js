export const getJsComponents = () => {
  const existingJsComponentElements = document.querySelectorAll(
    "[data-js-component]"
  );

  const jsComponents = [];

  existingJsComponentElements.forEach((el) => {
    jsComponents.push({
      element: el,
      name: el.dataset.jsComponent,
      cmpType: el.dataset.cmpType,
    });
  });

  return {
    jsComponents: jsComponents,
  };
};

export const getScriptSourcePath = () => {
  const mainJavascriptFile = document.querySelector('[data-id="init-js"]');
  const pathTokens = mainJavascriptFile.getAttribute("src").split("/");
  pathTokens.pop();
  return pathTokens;
};

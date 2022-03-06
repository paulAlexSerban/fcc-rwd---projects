import {
  getJsComponents,
  getScriptSourcePath,
} from "./jsComponentLoader.utils";

const loadResource = (path, scriptName, container) => {
  const fullPath = `${path.join("/")}/${scriptName}.js`;
  const newScriptEl = document.createElement("script");
  newScriptEl.setAttribute("src", fullPath);
  container.appendChild(newScriptEl);
};

const initIntersectionObserver = (components) => {
  const bodyEl = document.querySelector("body");
  const loadedComponents = {};

  let observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach(async (entry) => {
      const name = entry.target.dataset.jsComponent.toLowerCase();
      if (entry.isIntersecting) {
        observerRef.unobserve(entry.target);
        if (!loadedComponents[name]) {
          loadedComponents[name] = true;
          const componentProps = components.jsComponents.find(
            (cmp) => cmp.name === name
          );
          loadResource(
            getScriptSourcePath(),
            `${componentProps.name}.${componentProps.cmpType}`,
            bodyEl
          );
        }
      } else if (entry.boundingClientRect.top <= 0) {
        observerRef.unobserve(entry.target);
        if (!loadedComponents[name]) {
          loadedComponents[name] = true;
          const componentProps = components.jsComponents.find(
            (cmp) => cmp.name === name
          );
          loadResource(
            getScriptSourcePath(),
            `${componentProps.name}.${componentProps.cmpType}`,
            bodyEl
          );
        }
      }
    });
  });

  let options = {
    threshold: 0.01,
  };

  for (const value of Object.values(components)) {
    value.forEach((el) => {
      observer.observe(el.element, options);
    });
  }
};

export const jsComponentLoader = () => {
  const components = getJsComponents();
  initIntersectionObserver(components);
};

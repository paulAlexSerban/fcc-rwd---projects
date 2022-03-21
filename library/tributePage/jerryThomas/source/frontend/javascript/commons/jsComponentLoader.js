import {
  getJsComponents,
  getScriptSourcePath,
} from "./JsComponentLoader.utils";

const components = getJsComponents();
const loadedComponents = {};
const bodyEl = document.querySelector("body");

const loadResource = (path, scriptName, container) => {
  const fullPath = `${path.join("/")}/${scriptName}.js`;
  const newScriptEl = document.createElement("script");
  newScriptEl.setAttribute("src", fullPath);
  container.appendChild(newScriptEl);
};

const setupObserver = new IntersectionObserver((entries, observerRef) => {
  entries.forEach(async (entry) => {
    let name = entry.target.dataset.jsComponent;
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

const observerOptions = {
  threshold: 0.01,
};

const scanComponents = (components) => {
  for (const value of Object.values(components)) {
    value.forEach((el) => {
      const childElements = el.element.querySelectorAll("[data-js-component]");
      if (childElements.length > 0 && el.cmpType !== "template") {
        childElements.forEach((el) => {
          setupObserver.observe(el, observerOptions);
        });
      }
      setupObserver.observe(el.element, observerOptions);
    });
  }
};

const init = () => {
  scanComponents(components, bodyEl);
};

export const jsComponentLoader = () => {
  init();
};

function waitForElementToRender(selector: any) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
  
      const observer = new MutationObserver(() => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
  
      observer.observe(document, {
        childList: true,
        subtree: true,
      });
    });
  }
  
  export default waitForElementToRender;
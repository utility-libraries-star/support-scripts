const iframe = document.createElement("iframe");
iframe.style.display = "none";
document.body.appendChild(iframe);

const originalConsole = iframe.contentWindow.console;
for (let key in originalConsole) {
  if (typeof originalConsole[key] === "function") {
    console[key] = originalConsole[key].bind(window);
  }
}

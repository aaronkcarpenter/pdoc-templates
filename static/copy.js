document.addEventListener("DOMContentLoaded", () => {
  // Add copy buttons to all code blocks
  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(pre.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
      });
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
});

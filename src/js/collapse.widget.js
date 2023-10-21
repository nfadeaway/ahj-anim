export default class CollapseWidget {
  constructor(btnTitle, textBlock, parentContainer) {
    this.btnTitle = btnTitle;
    this.textBlock = textBlock;
    this.parentContainer = parentContainer;
  }
  render() {
    const divCollapse = document.createElement("div");
    divCollapse.classList.add("collapse");
    const divCollapseBtn = document.createElement("div");
    divCollapseBtn.classList.add("collapse__button");
    divCollapseBtn.textContent = this.btnTitle;
    const divCollapseTextBlock = document.createElement("div");
    divCollapseTextBlock.classList.add("collapse__text-block");
    divCollapseTextBlock.classList.add("collapsed");
    divCollapseTextBlock.textContent = this.textBlock;
    divCollapse.appendChild(divCollapseBtn);
    divCollapse.appendChild(divCollapseTextBlock);
    this.parentContainer.appendChild(divCollapse);

    divCollapseBtn.addEventListener("click", () => {
      divCollapseBtn.classList.add("shadow");
      if (!divCollapseTextBlock.classList.contains("active")) {
        divCollapseTextBlock.classList.add("active");
      }
      divCollapseTextBlock.classList.toggle("expanded");
      divCollapseTextBlock.classList.toggle("collapsed");
    });
  }
}

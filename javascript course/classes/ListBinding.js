class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = ["hii", "fuzz", "burp"];
  }
  //makes an <li> tag
  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }
  update() {
    //remove all existing <li> elements
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    //fill <ul> <ol> tags
    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }
  add(text) {
    this.textList.push(text);
    this.update();
  }
  remove(index){
   this.textList.pop(index,1);
   this.update();
  }
}

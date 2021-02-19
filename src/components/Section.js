export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }
  renderItems(renderedItems) {
    this._renderedItems = renderedItems;
    this._renderedItems.forEach(item => this._renderer(item))
  }

  setItem(element) {
    this._container.prepend(element);
  }
}
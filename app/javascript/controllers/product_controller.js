import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Connected")
  }
  disconnect(){
  console.log("Disconnected")
}
  handleClick(event) {
      console.log("Hi!")
    var popup = this.element.children[2];
      if(popup.style.display == 'flex') {
          popup.style.display = 'none';
      }
      else {
          popup.style.display = 'flex';
      }
  }

  handleBuy(event){
    event.stopPropagation()
    event.preventDefault()
  }
}

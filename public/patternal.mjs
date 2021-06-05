import { ListTemplate } from './components/ListTemplate.mjs';
import { Interactor } from './Interactor.mjs';

class PureComponent extends HTMLElement {

  constructor() {

    super();

    this.state = this.createState({

      name: 'Abercrombie And Fitch',
      
      title: 'Exercise 1',

      entries: [{
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mactopus/128.jpg",
        createdAt: "2021-03-31T15:59:27.302Z",
        id: "14",
        name: "Tina White"
      }]

    });

    console.log(this.state);


    this.defineTemplates();
    this.listenEvents();


    Interactor();
  }

  connectedCallback() {
    
    this.innerHTML = `<div>
      <items-list></items-list>
    </div>`;

    this.passParams();

  }

  disconnectedCallback() {}
  
  attributeChangedCallback() {}

  listenEvents() {

    window.addEventListener('data-request', e => this.listenAPIEvents(e));

    window.addEventListener('child-calling', e => this.listenChildrenEvents(e));

  }

  defineTemplates() {

    customElements.define('items-list', ListTemplate);

  }

  passParams() {

    const itemsList = document.querySelector("items-list");

    itemsList.entries = this.state.entries;

  }

  createState = (state) => {

    const self = this;

    return new Proxy(state, {
      
      set(target, property, value) {

        self.reportWatcher(target[property], value);

        target[property] = value;

        return true;

      }

    });

  }

  listenAPIEvents(e) {

    if (e) {
      this.state.entries = e.detail.payload;
    }

  }

  listenChildrenEvents({ detail }) {

    console.log(detail);

  }
  
  reportWatcher(oldValue, newValue) {

    console.log(oldValue, newValue);

  }
    
}

customElements.define('pure-component', PureComponent);
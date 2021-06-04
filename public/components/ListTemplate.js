class ListTemplate extends HTMLElement {

  constructor() {
    super();

    this.expanded = '';

    this.addEventListener('click', 
      (e) => {
        const idOfExp = e.target.dataset.content || e.target.parentNode.dataset.content;
        const selected = document.querySelector(`div[data-content="${idOfExp}"]`)
        const classBase = selected.className;
        
        selected.className = 
          `${classBase === 'expanded' ? 'released' : 'expanded'}`;

        selected.className === 'released' && setTimeout(() => {
          selected.className = '';
        }, 310)
        
      });

    window.addEventListener('data-request', e => this.listenAPIEvents(e));

  }

  set entries(value) {
    this._entries = value;

    this.render();
  }

  connectedCallback() {
  
    this._entries && this.render();

  }

  listenAPIEvents(e) {
    if (e.detail.payload) {
      this._entries = e.detail.payload;

      this.render();
    }
  }

  sendToParent(ei, ec) {
    const childData = new CustomEvent('child-calling', {
      detail: {
        payload: {
          indx: ei,
          content: ec
        }
      },
      bubbles: true
    });
  
    window.dispatchEvent(childData);
  }

  render() {
    this.innerHTML = this._entries.map((entr, indx) =>  `
      <div class="custom-elem">
        <div 
          data-indx="${indx}" 
          data-content="${entr.id}"
        >
          <img src="${entr.avatar}" alt="avatar of ${entr.id}" />
          <span class="name">Name: ${entr.name}</span>
          <div class="details">
            <span class="unique-id">ID: ${entr.id}</span>
            <span class="creation-date">Created at: ${entr.createdAt}</span>
          </div>
        </div>
        
      </div>`).join("");
  }
}

export { ListTemplate };
class Notiasdinacas extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'cardLeft');

    const autor = document.createElement('span');
    const linkTitle = document.createElement('a');
    const newContent = document.createElement('p');
    cardLeft.appendChild(autor);
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'anonimus');

    cardLeft.appendChild(linkTitle);
    linkTitle.textContent = this.getAttribute('title');
    linkTitle.href = this.getAttribute('link-hrf');

    cardLeft.appendChild(newContent);
    newContent.textContent = this.getAttribute('content');

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'cardRight');
    const newImagem = document.createElement('img');
    newImagem.src = this.getAttribute('photo') || 'assets/img/download.jfif';
    newImagem.alt = 'foto darth vedh';
    cardRight.appendChild(newImagem);
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
      width: 80%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      }

      .cardLeft {
      display: flex;
      flex-direction: column;
       justify-content: center;
       padding-left: 10px;
       }

       .cardleft span {
       font-weight: 400;
       }

       div.cardleft >a {
       margin-top: 15px;
       text-decoration: none;
       font-size: 25px;
       color: black;
       font-weight: bold;
       }
    
    `;
    return style;
  }
}

customElements.define('card-news', Notiasdinacas);

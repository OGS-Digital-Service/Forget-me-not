document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('nysds-banner');
    document.body.appendChild(div);
    var closeclose = document.getElementById("nysds-close");
        if(closeclose){
        closeclose.addEventListener("click", closetranslate);
        function closetranslate () {
        document.getElementById("nysds-hide-this").style.display = "none";
        }
    }
}, false);

class nysdsBanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <article id="nysds-hide-this" class="nysds-static-banner">
        <div class="nysds-static-wrap">
            <div class="nysds-disclaimer"> This website has been translated using automated translation technology. No automated translation is perfect, nor is it intended to replace human translators.</div>
            <button id="nysds-close" class="nysds-close-button nysds-close-icon" aria-labelledby="close-button-label">
                <span class="sr-only" id="close-button-label">Close this notification banner</span>
            </button>
        </div>
    </article>
      `;
  }
}
customElements.define("nysds-banner", nysdsBanner);
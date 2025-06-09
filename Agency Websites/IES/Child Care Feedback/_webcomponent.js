class digitalFeedback extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.render();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    const feedbackUrl = 'https://forms.ny.gov/s3/Child-Support-Online-Enrollment-Feedback'
    const colorPrimary ='#43285d'
    const colorSecondary = '#d3d5e3'
    const questionPrompt = 'Was it easy to enroll?'
    shadow.innerHTML = `
        <style>
            .sr-only {
                position:absolute;
                width:1px;
                height:1px;
                padding:0;
                margin:-1px;
                overflow:hidden;
                clip:rect(0,0,0,0);
                white-space:nowrap;
                border-width:0
            }
            .nysds-feedback {
                display: flex;
                flex-direction: column;
                background-color:${colorSecondary};
                padding: 15px;
                margin: 30px auto;
                align-items: center;
                font-family: Proxima Nova,sans-serif;
            }

            .nysds-feedback-heading {
                font-size: 18px !important;
                font-weight: bold;
                color: ${colorPrimary};
                margin: 0 30px;
            }

            .nysds-feedback-landing {
                justify-content: center;
                background-color: ${colorSecondary};
                max-width: 1160px;
                border-radius: 15px;
            }

            .nysds-feedback-options {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 10px;
            }

            .nysds-feedback-thumbs {
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--%3E%3Cpath d='M104 224H24c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V248c0-13.3-10.7-24-24-24zM64 472c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zM384 81.5c0 42.4-26 66.2-33.3 94.5h101.7c33.4 0 59.4 27.7 59.6 58.1 .1 17.9-7.5 37.2-19.4 49.2l-.1 .1c9.8 23.3 8.2 56-9.3 79.5 8.7 25.9-.1 57.7-16.4 74.8 4.3 17.6 2.2 32.6-6.1 44.6C440.2 511.6 389.6 512 346.8 512l-2.8 0c-48.3 0-87.8-17.6-119.6-31.7-16-7.1-36.8-15.9-52.7-16.2-6.5-.1-11.8-5.5-11.8-12v-213.8c0-3.2 1.3-6.3 3.6-8.5 39.6-39.1 56.6-80.6 89.1-113.1 14.8-14.8 20.2-37.2 25.4-58.9C282.5 39.3 291.8 0 312 0c24 0 72 8 72 81.5z'/%3E%3C/svg%3E");
                display: block;
                height: 14px;
                width: 14px;
                background-size: 100% 100%;
                background-position: 50% 50%;
                background-repeat: no-repeat;
                filter: invert(100%) sepia(100%) saturate(486%) hue-rotate(165deg) brightness(107%) contrast(120%);
                margin-right: 8px;
                color: #fff;
            }

            .nysds-feedback-transform {
                transform: scaleY(-1);
            }

            .nysds-feedback-link {
                background-color: ${colorPrimary};
                color: #fff !important;
                text-decoration: none !important;
                text-transform: uppercase;
                font-weight: bold;
                font-size: 0.8rem;
                padding: 15px;
                border-radius: 15px;
                margin: 10px 10px;
                min-width: 100px;
                display: flex;
                justify-content: center;
            }

            .nysds-feedback-link:hover {
                background-color: #000;
                text-decoration: underline;
            }

            .nysds-feedback-link:focus {
                background-color: #000;
                text-decoration: underline;
            }

            /* desktop */
            @media (min-width: 1280px) {
                .nysds-feedback {
                    flex-direction: row;
                }
                .nysds-feedback-options {
                    margin-top: 0;
                }
            
            }
        </style>
        <section class="nysds-feedback nysds-feedback-landing">
            <h3 class="nysds-feedback-heading" id="nysds-feedback-helpful">${questionPrompt}</h3>
            <div class="nysds-feedback-options" id="nysds-feedback-options-area">
                <a  href="${feedbackUrl}?thumbs=Up" 
                    class="nysds-feedback-link" 
                    data-feedback="yes"
                    target="_blank"
                    id="nysds-feedback-yes"
                    >
                    <span class="nysds-feedback-thumbs" aria-hidden="true"></span>
                    Yes
                    <span class="sr-only"> easy to enroll. Opens new window with survey.</span>
                </a>
                <a  href="${feedbackUrl}?thumbs=Down" 
                    class="nysds-feedback-link" 
                    data-feedback="no"
                    target="_blank"
                    id="nysds-feedback-no"
                    >
                    <span class="nysds-feedback-thumbs nysds-feedback-transform" aria-hidden="true"></span>
                    No
                    <span class="sr-only"> not easy to enroll. Opens new window with survey.</span>
                </a>
            </div>
        </section>
      `;
        const feedbackText = this.shadowRoot.getElementById('nysds-feedback-helpful');
        const feedbackArea = this.shadowRoot.getElementById('nysds-feedback-options-area');
        const feedbackLink = this.shadowRoot.querySelectorAll('a.nysds-feedback-link');
        for (let i = 0; i < feedbackLink.length; i++) {
            feedbackLink[i].addEventListener("click", feedbackChange) // change area on click
                function feedbackChange () {
                    feedbackArea.setAttribute("style", "display:none;");
                    feedbackText.innerText = "Thank you for your feedback!"
                }
        }  
    }
}
customElements.define("digital-feedback", digitalFeedback);

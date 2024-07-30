import { LitElement, html, css, TemplateResult, CSSResultArray, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import splashImage from "../assets/benjamin-combs-wuU_SSxDeS0-unsplash.jpg";
import pageCopy from "../i18n/en.json";

@customElement("contact-page")
export class ContactPage extends LitElement {
    public static styles: CSSResultArray = [
        css`
            :host {
                display: block;
            }

            .parallax {
                perspective: 3px;
                height: 100vh;
                overflow-x: hidden;
                overflow-y: auto;
            }

            .parallax-group {
                margin-top: 2.875rem;
                position: relative;
                z-index: -1;
                height: 50vh;
                transform-style: preserve-3d;
            }

            .parallax-layer {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                object-fit: cover;
            }

            .parallax-back {
                transform: translateZ(-2px) scale(2);
                background-image: url(${unsafeCSS(splashImage)});
                box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.5);
                z-index: -2;
                background-position: center;
                background-attachment: fixed;
                background-size: cover;
                background-repeat: no-repeat;
            }

            .parallax-base {
                transform: translateZ(0) scale(1);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            main {
                background-color: #242424;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            hr {
                width: 20%;
                border-top: 1px solid #808080;
                color: transparent;
                margin: 4rem 0;
            }

            hr:after {
                background: none repeat scroll 0% 0% #808080;
                content: "";
                margin: -4px auto auto -4px;
                width: 0.375rem;
                height: 0.375rem;
                left: 50%;
                position: absolute;
                transform: rotate(45deg);
            }

            .contact {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 0 4rem;
                margin-top: -1rem;
            }

            section.contact h2 {
                padding: 0;
                margin: 0;
            }

            section.contact p {
                max-width: 50rem;
                font-size: 1.25rem;
            }

            footer {
                margin-top: 6rem;
                padding: 1rem 0;
                background-color: #111;
                display: flex;
                justify-content: center;
                font-size: 0.875rem;
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`
            <div class="parallax">
                <header class="parallax-group">
                    <div class="parallax-layer parallax-back">Test</div>
                    <div class="parallax-layer parallax-base">
                        <div class="title">
                            <h1>Contact us</h1>
                            <h2>Selling you things you want or need</h2>
                        </div>
                    </div>
                </header>
                <main>
                    <hr />
                    <section class="contact">
                        <h2>Let's connect!</h2>
                        <p>${pageCopy.contact.cta}</p>
                    </section>
                </main>
                <footer>
                    <i>Created by DerangedCreations</i>
                </footer>
            </div>
        `;
    }
}

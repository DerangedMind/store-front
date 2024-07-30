import { LitElement, html, css, TemplateResult, CSSResultArray, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import splashImage from "../assets/stephanie-krist-zziuyr_T3jQ-unsplash.jpg";
import pageCopy from "../i18n/en.json";

@customElement("home-page")
export class HomePage extends LitElement {
    public static styles: CSSResultArray = [
        css`
            :host {
                display: block;
            }

            /* .hero {
                min-height: 80vh;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .hero h2 {
            } */

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
                height: 90vh;
                transform-style: preserve-3d;
                /* transform: translate3d(700px, 0, -800px) rotateY(30deg); */
            }

            .parallax-layer {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                /* height: 100%;
                width: 100%; */
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
                margin: 8rem 0;
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

            .hero .ctas a {
                text-decoration: none;
            }

            .hero .ctas .btn.store-link {
                padding: 1rem 1.5rem;
                background-color: rebeccapurple;
                border-radius: 1rem;
                color: #111;
                font-weight: 500;
                font-size: 1.125rem;
                box-shadow: 0.25rem 0.25rem 2rem 0.125rem rgba(0, 0, 0, 0.75);
            }

            .hero .ctas .btn.about-link {
                margin-top: 0.75rem;
                color: #111;
            }

            .intro {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            section.intro p {
                max-width: 50rem;
                font-size: 1.25rem;
                margin: inherit 2rem;
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
                            <h1>MyStore</h1>
                            <h2>Selling you things you want or need</h2>
                        </div>
                        <div class="ctas">
                            <a href="/store">
                                <div class="btn store-link">Visit store</div>
                            </a>
                            <a href="about">
                                <div class="btn about-link">Learn more about our products...</div>
                            </a>
                        </div>
                    </div>
                </header>
                <main>
                    <hr />
                    <section class="intro">
                        <h2>MyStore Floral Design</h2>
                        <p>${pageCopy.home.intro}</p>
                    </section>
                    <hr />
                    <section class="store-preview">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </section>
                </main>
            </div>
        `;
    }
}

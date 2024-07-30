import { LitElement, html, css, TemplateResult, CSSResultArray, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";
import splashImage from "../assets/stephanie-krist-zziuyr_T3jQ-unsplash.jpg";
import pageCopy from "../i18n/en.json";
import bouquetImg from "../assets/annie-spratt-uiWIMe_dMHU-unsplash.jpg";

@customElement("home-page")
export class HomePage extends LitElement {
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

            .intro,
            .contact {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 0 4rem;
            }

            section.intro p,
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

            .store-preview ul {
                display: flex;
                gap: 2rem;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .preview-item {
                position: relative;
            }

            .preview-item .img-thumb {
                font-size: 0;
            }
            .preview-item .img-thumb img {
                width: 16rem;
                height: auto;
                object-fit: cover;
                object-position: center right;
            }

            .preview-item .overlay {
                position: absolute;
                background-color: rgba(0, 0, 0, 0.5);
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            .preview-item .caption {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                z-index: 2;
                color: white;
            }

            @media only screen and (max-width: 992px) {
                .store-preview ul {
                    flex-direction: column;
                }

                .preview-item {
                    display: flex;
                    justify-content: center;
                    margin: 2rem;
                }

                .preview-item .img-thumb img {
                    max-width: 30rem;
                    width: 100%;
                }

                .preview-item .caption {
                    font-size: 1.5rem;
                }
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
                            <li class="preview-item">
                                <a href="product/1">
                                    <div class="img-thumb">
                                        <img src=${bouquetImg} />
                                    </div>
                                    <div class="overlay"></div>
                                    <div class="caption">Everyday bouquets</div>
                                </a>
                            </li>
                            <li class="preview-item">
                                <div class="img-thumb">
                                    <img src=${bouquetImg} />
                                </div>
                                <div class="overlay"></div>
                                <div class="caption">Everyday bouquets</div>
                            </li>
                            <li class="preview-item">
                                <div class="img-thumb">
                                    <img src=${bouquetImg} />
                                </div>
                                <div class="overlay"></div>
                                <div class="caption">Everyday bouquets</div>
                            </li>
                        </ul>
                    </section>

                    <hr />

                    <section class="contact">
                        <h2>Contact us</h2>
                        <p>${pageCopy.home.contact}</p>
                        <a href="/contact">Click here to get in touch...</a>
                    </section>
                </main>
                <footer>
                    <i>Created by DerangedCreations</i>
                </footer>
            </div>
        `;
    }
}

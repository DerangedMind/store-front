import { LitElement, html, css, TemplateResult, CSSResultArray } from "lit";
import { customElement } from "lit/decorators.js";
import pageCopy from "../i18n/en.json";
import flowerImg from "../assets/joanna-kosinska-ToV0rS9nTYs-unsplash.jpg";
import gardenImg from "../assets/abhishek-koli-PMxTK-bHZhs-unsplash.jpg";
import eventImg from "../assets/nathan-dumlao-5BB_atDT4oA-unsplash.jpg";
import aboutImg from "../assets/annie-spratt-uiWIMe_dMHU-unsplash.jpg";

@customElement("about-page")
export class AboutPage extends LitElement {
    public static styles: CSSResultArray = [
        css`
            main {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 2rem;
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

            .about {
                max-width: 40rem;
                text-align: center;
            }

            section {
                display: flex;
                gap: 4rem;
            }

            section:nth-of-type(even) {
                flex-direction: row-reverse;
            }

            section .copy {
                display: flex;
                gap: 1rem;
                margin-top: 6rem;
            }

            section:nth-of-type(even) .copy {
                flex-direction: row-reverse;
                margin-top: 14rem;
            }

            section h2 {
                writing-mode: sideways-lr;
                height: fit-content;
                margin: 0 1rem 0 0;
                letter-spacing: 0.5rem;
                position: relative;
                top: -0.375rem;
            }

            section:nth-of-type(even) h2 {
                writing-mode: sideways-rl;
            }

            section h2 .angled-text {
                transform: rotate(90deg);
                display: inline-block;
                position: absolute;
                white-space: nowrap;
                top: -100%;
                left: 260%;
            }

            section p {
                max-width: 30rem;
                line-height: 1.75rem;
                margin: 0;
                position: relative;
                top: -0.5rem;
            }

            section ul {
                max-width: 25rem;
            }

            section.blooms {
                gap: 0;
            }

            section.blooms h2 {
                order: 1;
                writing-mode: sideways-lr;
            }
            section.blooms .img-container {
                order: 2;
                margin-right: 4rem;
            }

            .img-container img {
                max-width: 30rem;
                max-height: 30rem;
                width: 100%;
                height: auto;
                background-color: #808080;
            }

            @media only screen and (max-width: 992px) {
                section {
                    flex-direction: column;
                    align-items: center;
                }

                section .copy,
                section:nth-of-type(even) .copy {
                    margin-top: unset;
                }

                section:nth-of-type(even) {
                    flex-direction: column-reverse;
                }

                section.blooms .copy {
                    margin-top: 5rem;
                }

                section.blooms .img-container {
                    margin-right: 0;
                }
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`
            <main>
                <h1>About us</h1>
                <p class="about">${pageCopy.about.welcome}</p>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Our story</h2>
                        <p>${pageCopy.about.story}</p>
                    </div>
                    <div class="img-container">
                        <img src=${aboutImg} />
                    </div>
                </section>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Our flowers</h2>
                        <p>${pageCopy.about.flowers}</p>
                    </div>
                    <div class="img-container">
                        <img src=${gardenImg} />
                    </div>
                </section>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Our services</h2>
                        <div>
                            <p>${pageCopy.about.ourservices}</p>
                            <ul>
                                <li>
                                    <strong>${pageCopy.about.services.weddingflorals.title}: </strong>
                                    <span>${pageCopy.about.services.weddingflorals.copy}</span>
                                </li>
                                <li>
                                    <strong>${pageCopy.about.services.eventarrangements.title}: </strong>
                                    <span>${pageCopy.about.services.eventarrangements.copy}</span>
                                </li>
                                <li>
                                    <strong>${pageCopy.about.services.everydaybouquets.title}: </strong>
                                    <span>${pageCopy.about.services.everydaybouquets.copy}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="img-container">
                        <img src=${eventImg} />
                    </div>
                </section>
                <hr />
                <section class="blooms">
                    <div class="copy">
                        <h2>Beyond <span class="angled-text">the Blooms</span></h2>
                        <p>${pageCopy.about.beyond}</p>
                    </div>
                    <div class="img-container">
                        <img src=${flowerImg} />
                    </div>
                </section>

                <hr />
                <section>
                    <p>${pageCopy.about.thanks}</p>
                </section>
            </main>
        `;
    }
}

import { LitElement, html, css, TemplateResult, CSSResultArray } from "lit";
import { customElement, property } from "lit/decorators.js";
import pageCopy from "../i18n/en.json";

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
            p {
                max-width: 40rem;
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

            section {
                display: flex;
                flex-wrap: wrap;
                gap: 4rem;
            }

            section .copy {
                display: flex;
            }

            section h2 {
                writing-mode: sideways-lr;
                height: fit-content;
                margin: 0 1rem 0 0;
                letter-spacing: 0.5rem;
                position: relative;
                top: -0.375rem;
            }

            section p {
                max-width: 30rem;
                line-height: 1.75rem;
                margin: 0;
                position: relative;
                top: -0.5rem;
            }

            section:nth-of-type(odd) {
                flex-direction: row-reverse;
            }

            section ul {
                max-width: 25rem;
            }

            .img-container {
                width: 256px;
                height: 256px;
                background-color: #808080;
            }
        `,
    ];

    protected render(): TemplateResult {
        return html`
            <main>
                <h1>About us</h1>
                <p>${pageCopy.about.welcome}</p>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Our story</h2>
                        <p>${pageCopy.about.story}</p>
                    </div>
                    <div class="img-container">
                        <img src="" />
                    </div>
                </section>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Our flowers</h2>
                        <p>${pageCopy.about.flowers}</p>
                    </div>
                    <div class="img-container">
                        <img src="" />
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
                        <img src="" />
                    </div>
                </section>
                <hr />
                <section>
                    <div class="copy">
                        <h2>Beyond the Blooms</h2>
                        <p>${pageCopy.about.beyond}</p>
                    </div>
                    <div class="img-container">
                        <img src="" />
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

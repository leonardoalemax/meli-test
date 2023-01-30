import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import Header from "./Header";

test("Should render Default state of Header component", () => {
  const { baseElement } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-header"
        >
          <div
            class="meli-header-content"
          >
            <a
              class="meli-logo"
              href="/"
            >
              Mercado Livre Brasil - Onde comprar e vender de Tudo
            </a>
            <form
              action="/items"
              class="meli-search"
            >
              <input
                aria-label="Digite o que você quer encontrar"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                class="meli-search-input"
                max="120"
                name="search"
                placeholder="Buscar produtos, marcas e muito mais…"
                required=""
                role="combobox"
                spellcheck="false"
                tabindex="3"
                type="text"
                value=""
              />
              <button
                class="meli-search-cta"
                tabindex="4"
                type="submit"
              >
                <div
                  aria-label="Buscar"
                  class="meli-search-icon"
                  role="img"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </body>
  `);
});

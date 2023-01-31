import React from "react";
import axios from "axios";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

import "@testing-library/jest-dom";
import Itens from "./Itens";

test("Should render Itens with breadcomb component", async () => {
	mockAxios.get.mockResolvedValueOnce({
		data: {
			results: [
				{
					id: "MLB3085491615",
					title: "Test Item 1",
					thumbnail_id: "THUMB123213",
					price: 123333,
					shipping: {
						free_shipping: true,
					},
					seller: {
						seller_reputation: {
							level_id: "5_green",
						},
					},
					seller_address: {
						state: {
							name: "Para",
						},
					},
					installments: {
						amount: 12333,
						currency_id: "BRL",
						quantity: 10,
						rate: 0,
					},
				},
				{
					id: "MLB3085491614",
					title: "Test Item 2",
					thumbnail_id: "THUMB123215",
					price: 102,
					currency_id: "BRL",
					shipping: {
						free_shipping: false,
					},
				},
			],
			filters: [
				{
					id: "category",
					name: "category",
					values: [
						{
							name: "Teste 1",
							path_from_root: [
								{
									name: "Teste 2",
								},
								{
									name: "Teste 3",
								},
							],
						},
					],
				},
			],
		},
	});

	await act(() => {
		render(
			<Router>
				<div data-testid='itens-element'>
					<Itens />
				</div>
			</Router>
		);
	});

	expect(screen.queryByTestId("itens-element")).toMatchInlineSnapshot(`
    <div
      data-testid="itens-element"
    >
      <div
        class="meli-breadcomb"
      >
        <a
          class="meli-breadcomb-iten"
          href="/items?search=Teste 2"
        >
          Teste 2
        </a>
        <span>
           
          &gt;
           
        </span>
        <a
          class="meli-breadcomb-iten"
          href="/items?search=Teste 3"
        >
          Teste 3
        </a>
      </div>
      <div
        class="meli-showcase"
      >
        <a
          class="meli-showcase-iten"
          href="items/MLB3085491615"
        >
          <div
            class="meli-showcase-iten-thumb"
            data-index="0"
            tabindex="-1"
          >
            <img
              alt="Test Item 1"
              decoding="async"
              height="140"
              src="https://http2.mlstatic.com/D_NQ_NP_THUMB123213-V.webp"
              width="140"
            />
          </div>
          <div
            class="meli-showcase-iten-description"
          >
            <div
              class="meli-showcase-iten-description-col"
            >
              <div
                class="meli-showcase-iten-description-title"
              >
                <h4>
                  Test Item 1
                </h4>
                <img
                  alt="Vendedor Válidado"
                  class="meli-showcase-iten-valid"
                  src="trophie.svg"
                />
              </div>
              <h1>
                R$ 123.333,00
                 
              </h1>
              <h5>
                <span>
                   em 
                </span>
                10
                x
                 
                R$ 12.333,00
                 Sem Juros
              </h5>
              <h5>
                Frete grátis
              </h5>
            </div>
            <div
              class="meli-showcase-iten-description-col"
            >
              <div
                class="meli-showcase-iten-state"
              >
                Para
              </div>
            </div>
          </div>
        </a>
        <a
          class="meli-showcase-iten"
          href="items/MLB3085491614"
        >
          <div
            class="meli-showcase-iten-thumb"
            data-index="0"
            tabindex="-1"
          >
            <img
              alt="Test Item 2"
              decoding="async"
              height="140"
              src="https://http2.mlstatic.com/D_NQ_NP_THUMB123215-V.webp"
              width="140"
            />
          </div>
          <div
            class="meli-showcase-iten-description"
          >
            <div
              class="meli-showcase-iten-description-col"
            >
              <div
                class="meli-showcase-iten-description-title"
              >
                <h4>
                  Test Item 2
                </h4>
              </div>
              <h1>
                R$ 102,00
                 
              </h1>
              <h5 />
            </div>
            <div
              class="meli-showcase-iten-description-col"
            />
          </div>
        </a>
      </div>
    </div>
  `);
});

import React from "react";
import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Loading from "./Loading";

test("Should render Default state of Loading component", () => {
  const { baseElement } = render(<Loading />);
  expect(baseElement).toMatchInlineSnapshot(`
    <body>
      <div>
        <div
          class="meli-loading-ring"
        >
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </body>
  `);
});

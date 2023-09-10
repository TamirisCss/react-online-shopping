import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

import "jest-styled-components";

describe("Loading component", () => {
  it("should render Loadind component", () => {
    const { getByTestId } = render(<Loading />);
    const SpinnerOverlay = getByTestId("spinner-overlay");
    const SpinnerContainer = getByTestId("spinner-container");

    expect(SpinnerOverlay).toBeInTheDocument();
    expect(SpinnerContainer).toBeInTheDocument();
  });

  it("should have the correct rotation animation", () => {
    const { getByTestId } = render(<Loading />);
    const SpinnerContainer = getByTestId("spinner-container");

    expect(SpinnerContainer).toHaveStyleRule({
      animation: "spin 1s ease-in-out infinite",
    });
  });

  it("should be centered horizontally and vertically", () => {
    const { getByTestId } = render(<Loading />);
    const SpinnerOverlay = getByTestId("spinner-overlay");
    const SpinnerContainer = getByTestId("spinner-container");

    expect(SpinnerOverlay).toHaveStyleRule({ display: "flex" });
    expect(SpinnerOverlay).toHaveStyleRule("justify-content", "center");
    expect(SpinnerOverlay).toHaveStyleRule("align-items", "center");

    // Verifica se o SpinnerContainer está dentro do SpinnerOverlay
    expect(SpinnerOverlay).toContainElement(SpinnerContainer);
  });
});

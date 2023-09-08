import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("should render SearchBar component", () => {
    const { getByPlaceholderText } = render(<SearchBar placeholder="Search" />);
    const inputElement = getByPlaceholderText("Search");

    expect(inputElement).toBeInTheDocument();
  });

  it("should call onChange prop when input value changes", () => {
    const onChange = jest.fn();
    const onSearch = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar placeholder="Search" onChange={onChange} onSearch={onSearch} />
    );

    const inputElement = getByPlaceholderText("Search");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    expect(onChange.mock.calls[0][0].target.value).toBe("test");

    expect(onSearch).toHaveBeenCalledTimes(1);
    expect(onSearch).toHaveBeenCalledWith("test");
  });
});

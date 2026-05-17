import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Busqueda from "./Busqueda";

describe("Busqueda", () => {

  it ("Se renderizan los elementos", () => {
        render (<Busqueda value="" onChange={() => {}} placeholder="Buscar tanque..." />)
        expect(screen.getByRole("textbox")).toBeInTheDocument();
});

  it("Se ejecuta el onChange", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Busqueda value="" onChange={onChange} placeholder="Buscar tanque..." />);
    await user.type(screen.getByRole("textbox"), "test");
    expect(onChange).toHaveBeenCalledTimes(4);
  });
  
});
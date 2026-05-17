import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Boton from "./Boton";

describe("Boton", () => {

  it ("Se renderiza con el children", () => {
        render (<Boton children="Click" onClick={() => {}}/>)
        expect(screen.getByRole("button", { name: /Click/ })).toBeInTheDocument();
});

  it("Se ejecuta el onclick", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Boton onClick={onClick} children="Click" />);
    await user.click(screen.getByRole("button", { name: /Click/ }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  
});
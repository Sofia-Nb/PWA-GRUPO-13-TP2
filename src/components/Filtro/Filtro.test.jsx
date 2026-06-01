import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Filtro from "./Filtro";

describe("Filtro", () => {
    const opcion = [
    { value: "todos", label: "Todos" },
  ];

  it ("Se renderizan los elementos", () => {
        render (<Filtro  opciones={opcion} onChange={() => {}} value="todos"/>)
        expect(screen.getByRole("combobox")).toBeInTheDocument();
});

  it("Se ejecuta el onChange", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<Filtro opciones={opcion} onChange={onChange} value="todos" />);
    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "todos");
    expect(onChange).toHaveBeenCalled();
  });
  
});
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi, describe } from "vitest";
import Select from "./Select";
import { useState } from "react";

// rederiza las opciones, muestra el valor seleccionado, llama a onchange y actualiza el valor seleccionado

describe("Select componente", () => {
    const opcionesSelect = [
        { value: "1", label: "Uno" },
        { value: "2", label: "Dos" }
    ];

    test("renderiza las opciones correctamente", () => {
        render(<Select opciones={opcionesSelect} value="1" onChange={() => { }} />);

        expect(screen.getByText("Uno")).toBeInTheDocument()
        expect(screen.getByText("Dos")).toBeInTheDocument()
    });

    test("muestra el valor seleccionado", () => {
        render(<Select opciones={opcionesSelect} value="2" onChange={() => { }} />);

        const select = screen.getByRole("combobox")
        expect(select.value).toBe("2")
    });

    test("llama a onChange cuando cambia", async () => {
        const handleChange = vi.fn();

        render(
            <Select opciones={opcionesSelect} value="1" onChange={handleChange} />
        );

        const select = screen.getByRole("combobox")

        await userEvent.selectOptions(select, "2")

        expect(handleChange).toHaveBeenCalled()
    });

    test("actualiza el valor seleccionado", async () => {
        const Wrapper = () => {
            const [value, setValue] = useState("1")

            return (
                <Select
                    opciones={opcionesSelect}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            );
        };

        render(<Wrapper />);

        const select = screen.getByRole("combobox")

        await userEvent.selectOptions(select, "2")

        expect(screen.getByDisplayValue("Dos")).toBeInTheDocument()
    });
});
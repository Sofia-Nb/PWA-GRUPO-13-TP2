import Titulo from './Titulo'
import { describe, it, expect} from "vitest"
import { render, screen } from '@testing-library/react'

describe("Titulo Componente", () => {
    it("Se renderiza el titulo", () => {
        render(<Titulo texto="hola" />);
        expect(screen.getByText("hola")).toBeInTheDocument();
    });
})
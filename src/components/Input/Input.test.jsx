import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect , vi} from 'vitest';
import Input from './Input';

describe("Componente Input", () => {
    
    it("debe mostrar el label y el placeholder correctamente", () => {
        render(<Input label="nombre del tanque" placeholder="ingresar tanque" onChange={() => {}}/> );

        expect(screen.getByText("nombre del tanque")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("ingresar tanque")).toBeInTheDocument();
    });

    it("el input tiene que reflejar lo que se pasa en value'", () => {
        render( <Input label="tipo" value="agua" onChange={() => {}}/> );

        const input = screen.getByDisplayValue("agua");
        expect(input).toBeInTheDocument();
    });

    it("debe llamar a onChange cuando el valor del input cambia", async () => {
        const funcionEspia = vi.fn();
        const user = userEvent.setup();
        render( <Input label="tipo" value="" onChange={funcionEspia} /> );

        const input = screen.getByRole('textbox');

        await user.type(input, 'agua');
        expect(funcionEspia).toHaveBeenCalled();
    })
});
import TankItemCard from './TankItemCard'
import { describe, it, expect} from "vitest"
import { render, screen } from '@testing-library/react'

describe("Card de los tanques", () => {
    it("Se renderiza el componente entero", () => {
        const tanquePrueba = {
            nombre: "hola",
            tipo: "tanque",
            descripcion: "descripcion del tanque",
            imagen: "https://www.pngall.com/wp-content/uploads/5/Tank-PNG-High-Quality-Image.png"
        }
        render(<TankItemCard {...tanquePrueba} />);
        expect(screen.getByText(tanquePrueba.nombre)).toBeInTheDocument();
        expect(screen.getByText(tanquePrueba.tipo)).toBeInTheDocument();
        expect(screen.getByText(tanquePrueba.descripcion)).toBeInTheDocument();

        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", tanquePrueba.imagen);
    });
})
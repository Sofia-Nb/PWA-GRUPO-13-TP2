import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { Routes } from "../../const/routes";

// rederiza el titulo y los botones del menu, usa navigate al hacer clic en los botones de navegacion

const navigateMoc = vi.fn()

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      resolvedLanguage: "es",
      changeLanguage: vi.fn()
    },
    t: (key) => {
      const translations = {
        "header.title": "Tanques",
        "header.home": "Inicio",
        "header.favoritos": "Favoritos"
      };
      return translations[key] ?? key
    },
  }),
}));

vi.mock("react-router-dom", async () => {

  const actual = await vi.importActual("react-router-dom")

  return {
    ...actual,
    useNavigate: () => navigateMoc
  };
});

describe("Header componente", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renderiza el título y los botones del menú", () => {
    render(
      <Header />,
      { wrapper: MemoryRouter }
    );

    expect(screen.getByText("Tanques")).toBeInTheDocument()
    expect(screen.getByText("Inicio")).toBeInTheDocument()
    expect(screen.getByText("Favoritos")).toBeInTheDocument()
    expect(screen.getByText("☰")).toBeInTheDocument()
  });

  test("usa navigate al hacer clic en los botones de navegación", async () => {
    render(
      <Header />,
      { wrapper: MemoryRouter }
    );

    await userEvent.click(screen.getByText("Inicio"))
    expect(navigateMoc).toHaveBeenCalledWith(Routes.home)

    await userEvent.click(screen.getByText("Favoritos"))
    expect(navigateMoc).toHaveBeenCalledWith(Routes.favorites)
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach } from "vitest";
import LenguajeSelect from "./LenguajeSelect";

// rederiza las opciones, selecciona el idioma actual, cambia el idioma y guarda la selección en localStorage

const LanguageMockiao = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: LanguageMockiao,
      resolvedLanguage: "es"
    },
    t: (key) => {
      if (key === "spanish") return "español"
      if (key === "english") return "english"
      return key;
    },
  }),
}));

describe("LenguajeSelect componente", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  });

  test("renderiza las opciones y selecciona el idioma actual", () => {
    render(<LenguajeSelect />);

    expect(screen.getByText("español")).toBeInTheDocument()
    expect(screen.getByText("english")).toBeInTheDocument()
    expect(screen.getByRole("combobox").value).toBe("es")
  });

  test("cambia el idioma y guarda la selección en localStorage", async () => {
    render(<LenguajeSelect />);

    const select = screen.getByRole("combobox")
    await userEvent.selectOptions(select, "en")

    expect(LanguageMockiao).toHaveBeenCalledWith("en")
    expect(localStorage.getItem("language")).toBe("en")
  });
});

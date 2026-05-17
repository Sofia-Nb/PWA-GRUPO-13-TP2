import { render, screen } from "@testing-library/react";
import { describe, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

describe("Footer", () => {

  it ("Se renderizan el footer", () => {
        render (<Footer  />)
        expect(screen.getByText(/Type Tanks/i)).toBeInTheDocument();
});
  
});
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Conta from "./Conta";

describe("Component de conta", () => {
  it("Exibir o saolda da conta como valor monetário", () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByTestId("saldo-conta");

    expect(saldo.textContent).toBe("R$ 1000");
  });

  it("Chama a função de realizar transação quando o botão é clicado", () => {
    const funcaoRealizarTransacao = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />);

    fireEvent.click(screen.getByText("Realizar operação"));

    expect(funcaoRealizarTransacao).toHaveBeenCalled();
  });
});

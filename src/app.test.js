import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando acessar o app do banco", () => {
    it("Mostrar o nome do banco", () => {
      render(<App />);
      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });
    it("Mostrar Saldo", () => {
      render(<App />);
      expect(screen.getByText("Saldo:"));
    });
    it("Mostrar botão", () => {
      render(<App />);
      expect(screen.getByText("Realizar operação"));
    });
  });
  describe("Quando realizar transação", () => {
    it("Saque, o valor diminuí", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 50);

      expect(novoSaldo).toBe(0);
    });
    it("Deposito, o valor aumenta", () => {
      const valores = {
        transacao: "deposito",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 0);

      expect(novoSaldo).toBe(50);
    });
    it("Saque,a transação deve ser realizada", () => {
      render(<App />);
      const saldo = screen.getByText("R$ 1000");
      const transacao = screen.getByLabelText("Saque");
      const valor = screen.getByTestId("valor");
      const botaoTransacao = screen.getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});

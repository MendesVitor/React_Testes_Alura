import React from "react";
import { render } from "@testing-library/react";
import Transacao from "./Transacao";

describe("Componente de transaocao do extrato", () => {
  it("O snapshot do component deve permanecer sempre o mesmo", () => {
    const { container } = render(
      <Transacao data="08/11/2021" tipo="saque" valor="20.00" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

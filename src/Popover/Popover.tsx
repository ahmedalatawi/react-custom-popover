import React from "react";
import { PopoverProps } from "./Popover.types";
import Container from "../components/Container";

import "./Popover.scss";

const Popover = ({ theme }: PopoverProps) => (
  <Container>
    <div data-testid="popover" className={`popover popover-${theme}`}>
      <h1 className="heading">I'm the Popover component</h1>
      <h2>Made with love by Ahmed</h2>
    </div>
  </Container>
);

export default Popover;

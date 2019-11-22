import React from "react";
import styled from "styled-components";
import pentacle_animated from "../static/pentacle_animated.svg";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const PentagramImpl: React.SFC<ImplProps> = ({ className }) => (
  <div className={className} />
);

const StyledPentagram = styled(PentagramImpl)`
  height: 130px;
  padding-bottom: 1.25rem;
  transform: rotate(180deg);
  opacity: 0.3;
  background-image: url(${pentacle_animated});
  background-position: center;
  background-repeat: no-repeat;
`;

export default StyledPentagram;

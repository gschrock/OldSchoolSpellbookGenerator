import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const PentagramImpl: React.SFC<ImplProps> = ({ className }) => (
  <img
    className={className}
    src="https://svgshare.com/i/GGu.svg"
    title="pentacle_animated"
    alt="pentagram_img"
  />
);

const StyledPentagram = styled(PentagramImpl)`
  height: 130px;
  padding-bottom: 1.25rem;
  transform: rotate(180deg);
  opacity: 0.3;
`;

export default StyledPentagram;

import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const CreditImpl: React.SFC<ImplProps> = ({ className }) => {
  const urlPath = window.location.pathname;
  return (
    <p className={className}>
      {`${
        urlPath !== "/spellbook"
          ? "This app generates a randomized magic-user or illusionist spellbook compatible with the basic/expert version of one of the world's greatest rpgs. Generated spells reference Old-School Essentials (by Necrotic Gnome) book page numbers for easy rules lookup. Knave spells, courtesy of the rules toolkit Knave (by Questing Beast), may be included in their entirety and are placed at random spell levels."
          : ""
      }`}
      <a
        target="_blank"
        rel="noopener noreferrer" href="https://necroticgnome.com/collections/old-school-essentials"
      >
        ➣ Old-School Essentials by Necrotic Gnome
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://questingbeast.itch.io/knave">
        ➣ Knave by Questing Beast
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/WebSonick">
        ➣ Clouds & stars by WebSonick
      </a>
    </p>
  );
};

const StyledCredit = styled(CreditImpl)`
  font-size: 14px;
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  color: white;

  a {
    color: white;
  }

  a:hover {
    color: red !important;
    opacity: 0.8;
  }
`;

export default StyledCredit;

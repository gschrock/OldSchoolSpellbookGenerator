import React, { useContext } from "react";
import styled from "styled-components";
import Credit from "../components/Credit";
import Pentagram from "../components/Pentagram";
import AppContext from "../context/AppContext";
import { knaveSpellAddendum } from "../spellData/knaveSpells";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const GeneratedSpellbookImpl: React.SFC<ImplProps> = ({ className }) => {
  const { includeKnaveSpells, spellbookSpells } = useContext(AppContext);

  if (!spellbookSpells) return null;

  return (
    <div className={className}>
      <TitleContainer>
        <TitleText>Old-School Spellbook Generator</TitleText>
      </TitleContainer>

      {Object.entries(spellbookSpells).map(
        (spellbookSpellsByLevel: [string, any]) => (
          <SpellsByLevelContainer key={spellbookSpellsByLevel[0]}>
            <SpellLevelText>{`LEVEL ${spellbookSpellsByLevel[0]}`}</SpellLevelText>
            {spellbookSpellsByLevel[1].map(
              (
                spellbookSpell: { name: string; info: string },
                index: number
              ) => (
                <SpellContainer key={spellbookSpell.name}>
                  <SpellName>{`${index + 1}. ${
                    spellbookSpell.name
                  }`}</SpellName>
                  <SpellInfo>{spellbookSpell.info}</SpellInfo>
                </SpellContainer>
              )
            )}
          </SpellsByLevelContainer>
        )
      )}

      {includeKnaveSpells && (
        <TitleContainer>
          <SpellInfo>{knaveSpellAddendum}</SpellInfo>
        </TitleContainer>
      )}

      <Pentagram />

      <Credit />
    </div>
  );
};

const TitleContainer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.25rem;
`;

const TitleText = styled.div`
  color: white;
  text-align: center;
  font-weight: 900;
  font-size: 20px;
`;

const SpellsByLevelContainer = styled.div``;

const SpellLevelText = styled.div`
  color: white;
  font-weight: 900;
  font-size: 20px;
`;

const SpellContainer = styled.div`
  padding-bottom: 1.5rem;
  color: white;
  font-weight: 900;
  font-size: 18px;
`;

const SpellName = styled.div``;

const SpellInfo = styled.div`
  padding-left: 1.25rem;
  font-size: 14px;
`;

const StyledGeneratedSpellbook = styled(GeneratedSpellbookImpl)`
  font-family: "Roboto Mono", monospace;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export default StyledGeneratedSpellbook;

import React, { useContext } from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Credit from "../components/Credit";
import Pentagram from "../components/Pentagram";
import AppContext from "../context/AppContext";
import { knaveSpells } from "../spellData/knaveSpells";
import { getSpells } from "../utils/getSpells";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

const SpellbookOptionsImpl: React.SFC<ImplProps> = ({ className }) => {
  const {
    spellType,
    setSpellType,
    characterLevel,
    setCharacterLevel,
    includeKnaveSpells,
    setIncludeKnaveSpells,
    extraSpells,
    setExtraSpells,
    setSpellbookSpells
  } = useContext(AppContext);

  return (
    <div className={className}>
      <TitleContainer>
        <TitleText>Old-School Spellbook Generator</TitleText>
      </TitleContainer>

      <FlexContainer>
        <Text>Type</Text>
        <SpellTypeDropdown
          id="dropdown-spell-type"
          title={spellType}
          variant="danger"
        >
          {["Magic-user Spells", "Illusionist Spells"].map(type => (
            <Dropdown.Item
              key={type}
              disabled={type === spellType}
              onClick={() => setSpellType(type)}
            >
              {type}
            </Dropdown.Item>
          ))}
        </SpellTypeDropdown>
      </FlexContainer>

      <FlexContainer>
        <Text>Character level</Text>
        <NumberDropdown
          id="dropdown-level-select"
          title={characterLevel}
          variant="info"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(level => (
            <Dropdown.Item
              key={level}
              disabled={level === characterLevel}
              onClick={() => setCharacterLevel(level)}
            >
              {level}
            </Dropdown.Item>
          ))}
        </NumberDropdown>
      </FlexContainer>

      <FlexContainer>
        <Text>Additional spells for each level</Text>
        <NumberDropdown
          id="dropdown-extra-spells"
          title={extraSpells}
          variant="warning"
        >
          {[0, 1, 2, 3].map(extra => (
            <Dropdown.Item
              key={extra}
              disabled={extra === extraSpells}
              onClick={() => setExtraSpells(extra)}
            >
              {extra}
            </Dropdown.Item>
          ))}
        </NumberDropdown>
      </FlexContainer>

      <FlexContainer>
        <Text>Include Knave spells</Text>
        {!includeKnaveSpells ? (
          <MdCheckBoxOutlineBlank
            style={{ fontSize: "1.5em", color: "white" }}
            onClick={() => {
              setIncludeKnaveSpells(true);
            }}
          />
        ) : (
          <MdCheckBox
            style={{ fontSize: "1.5em", color: "white" }}
            onClick={() => {
              setIncludeKnaveSpells(false);
            }}
          />
        )}
      </FlexContainer>

      <LinkAndButtonContainer>
        <StyledLink to="/spellbook">
          <GenerateButton
            variant="success"
            onClick={() => {
              setSpellbookSpells(
                getSpells(
                  spellType,
                  characterLevel,
                  includeKnaveSpells,
                  extraSpells,
                  knaveSpells
                )
              );
            }}
          >
            Generate Spellbook
          </GenerateButton>
        </StyledLink>
      </LinkAndButtonContainer>

      <Pentagram />

      <Credit />
    </div>
  );
};

const TitleContainer = styled.div`
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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.25rem;
`;

const Text = styled.div`
  color: white;
  margin-right: 1rem;
  font-weight: 900;
`;

const SpellTypeDropdown = styled(DropdownButton)`
  width: 220px;
  .btn {
    width: 220px;
    font-weight: 900;
  }
`;

const NumberDropdown = styled(DropdownButton)`
  width: 60px;
  .btn {
    width: 60px;
    font-weight: 900;
  }
  .dropdown-menu {
    min-width: 60px;
  }
`;

const LinkAndButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 200px;
`;

const GenerateButton = styled(Button)`
  font-weight: 900;
`;

const StyledSpellbookOptions = styled(SpellbookOptionsImpl)`
  font-family: "Roboto Mono", monospace;
  justify-content: center;
  display: flex;
  flex-direction: column;

  a:hover {
    text-decoration: none;
  }
`;

export default StyledSpellbookOptions;

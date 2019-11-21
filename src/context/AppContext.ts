import { createContext } from "react";

interface IAppContext {
  spellType: string;
  setSpellType: (spellType: string) => void;
  characterLevel: number;
  setCharacterLevel: (characterLevel: number) => void;
  includeKnaveSpells: boolean;
  setIncludeKnaveSpells: (includeKnaveSpells: boolean) => void;
  extraSpells: number;
  setExtraSpells: (extraSpells: number) => void;
  spellbookSpells: any;
  setSpellbookSpells: (spellbookSpells: number) => void;
}

const AppContext = createContext<IAppContext>({
  spellType: "Magic-user Spells",
  setSpellType: () => {},
  characterLevel: 1,
  setCharacterLevel: () => {},
  includeKnaveSpells: false,
  setIncludeKnaveSpells: () => {},
  extraSpells: 0,
  setExtraSpells: () => {},
  spellbookSpells: null,
  setSpellbookSpells: () => {}
});

export default AppContext;

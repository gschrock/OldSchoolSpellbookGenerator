import { random, sampleSize } from "lodash";
import { illusionistSpells } from "../spellData/illusionistSpells";
import { KnaveSpells } from "../spellData/knaveSpells";
import { magicUserSpells } from "../spellData/magicUserSpells";
import { spellsKnownByLevel } from "../spellData/spellsKnownByLevel";

/**
 * There is some duplication in the logic of this util
 * that could be cleaned up, in particular the handling
 * of knave spell presence and inclusion.
 *
 * @param spellType
 * @param characterLevel
 * @param includeKnaveSpells
 * @param extraSpells
 * @param knaveSpells
 */
export const getSpells = (
  spellType: string,
  characterLevel: number,
  includeKnaveSpells: boolean,
  extraSpells: number,
  knaveSpells: KnaveSpells
) => {
  // Make a copy of the knaveSpells data so we can mutate it
  // as we pull values from it
  let possibleKnaveSpells = Object.assign({}, knaveSpells);
  // Final spellbook spells generated we will return
  let spellbookSpells: any = {};
  // Gets spells known by level of character
  let spellsKnown = spellsKnownByLevel[characterLevel.toString()];

  if (spellType === "Magic-user Spells") {
    for (let i = 1; i <= spellsKnown.length; i++) {
      spellbookSpells[i] = sampleSize(
        magicUserSpells[i],
        spellsKnown[i - 1] + extraSpells
      );
    }

    if (includeKnaveSpells) {
      for (let i = 1; i <= spellsKnown.length; i++) {
        const traditionalSpellCount = random(
          0,
          spellsKnown[i - 1] + extraSpells
        );
        const knaveSpellCount =
          spellsKnown[i - 1] + extraSpells - traditionalSpellCount;

        spellbookSpells[i] = sampleSize(
          magicUserSpells[i],
          traditionalSpellCount
        );

        if (knaveSpellCount > 0) {
          let sampledKnaveSpells = sampleSize(
            possibleKnaveSpells,
            knaveSpellCount
          );

          sampledKnaveSpells.forEach(sampledKnaveSpell => {
            let possibleKnaveSpellEntries = Object.entries(possibleKnaveSpells);
            let indexToDelete = possibleKnaveSpellEntries.findIndex(
              knaveSpellEntry =>
                knaveSpellEntry[1].name === sampledKnaveSpell.name
            );

            delete possibleKnaveSpells[
              possibleKnaveSpellEntries[indexToDelete][0]
            ];
          });

          spellbookSpells[i] = spellbookSpells[i].concat(sampledKnaveSpells);
        }
      }
    }
  } else if (spellType === "Illusionist Spells") {
    for (let i = 1; i <= spellsKnown.length; i++) {
      spellbookSpells[i] = sampleSize(
        illusionistSpells[i],
        spellsKnown[i - 1] + extraSpells
      );
    }

    if (includeKnaveSpells) {
      for (let i = 1; i <= spellsKnown.length; i++) {
        const traditionalSpellCount = random(
          0,
          spellsKnown[i - 1] + extraSpells
        );
        const knaveSpellCount =
          spellsKnown[i - 1] + extraSpells - traditionalSpellCount;

        spellbookSpells[i] = sampleSize(
          illusionistSpells[i],
          traditionalSpellCount
        );

        if (knaveSpellCount > 0) {
          let sampledKnaveSpells = sampleSize(
            possibleKnaveSpells,
            knaveSpellCount
          );

          sampledKnaveSpells.forEach(sampledKnaveSpell => {
            let possibleKnaveSpellEntries = Object.entries(possibleKnaveSpells);
            let indexToDelete = possibleKnaveSpellEntries.findIndex(
              knaveSpellEntry =>
                knaveSpellEntry[1].name === sampledKnaveSpell.name
            );

            delete possibleKnaveSpells[
              possibleKnaveSpellEntries[indexToDelete][0]
            ];
          });

          spellbookSpells[i] = spellbookSpells[i].concat(sampledKnaveSpells);
        }
      }
    }
  }
  return spellbookSpells;
};

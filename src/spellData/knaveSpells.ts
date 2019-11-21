export interface KnaveSpells {
  [key: string]: {
    name: string;
    info: string;
  };
}

/**
 * Knave spells addendum and spells
 */
export const knaveSpellAddendum: string =
  "Knave Spell Rules: “L” is a number equal to the caster’s level, an item is an object able to be lifted with one hand, and an object is anything up to human size. Unless otherwise noted, all spells with ongoing effects last up to L×10 minutes, and have a range of up to 40'. If a spell directly affects another creature, the creature may make a save to avoid it (as described previously). Success reduces or negates the spell’s effects.";

export const knaveSpells: KnaveSpells = {
  1: {
    name: "Adhere",
    info: "Object is covered in extremely sticky slime. (Knave spell #1)"
  },
  2: {
    name: "Animate Object",
    info:
      "Object obeys your commands as best it can. It can walk 15' per round. (Knave spell #2)"
  },
  3: {
    name: "Anthropomorphize",
    info:
      "A touched animal either gains human intelligence or human appearance for L days. (Knave spell #3)"
  },
  4: {
    name: "Arcane Eye",
    info:
      "You can see through a magical floating eyeball that flies around at your command. (Knave spell #4)"
  },
  5: {
    name: "Astral Prison",
    info:
      "An object is frozen in time and space within an invulnerable crystal shell. (Knave spell #5)"
  },
  6: {
    name: "Attract",
    info:
      "L+1 objects are strongly magnetically attracted to each other if they come within 10 feet. (Knave spell #6)"
  },
  7: {
    name: "Auditory Illusion",
    info:
      "You create illusory sounds that seem to come from a direction of your choice. (Knave spell #7)"
  },
  8: {
    name: "Babble",
    info:
      "A creature must loudly and clearly repeat everything you think. It is otherwise mute. (Knave spell #8)"
  },
  9: {
    name: "Beast Form",
    info:
      "You and your possessions transform into a mundane animal. (Knave spell #9)"
  },
  10: {
    name: "Befuddle",
    info:
      "L creatures of your choice are unable to form new short-term memories for the duration of the spell. (Knave spell #10)"
  },
  11: {
    name: "Bend Fate",
    info:
      "Roll L+1 d20s. Whenever you must roll a d20 after casting the spell, you must choose and then discard one of the rolled results until they are all gone. (Knave spell #11)"
  },
  12: {
    name: "Bird Person",
    info: "Your arms turn into huge bird wings. (Knave spell #12)"
  },
  13: {
    name: "Body Swap",
    info:
      "You switch bodies with a creature you touch. If one body dies, the other dies as well. (Knave spell #13)"
  },
  14: {
    name: "Catherine",
    info:
      "A woman wearing a blue dress appears until end of spell. She will obey polite, safe requests. (Knave spell #14)"
  },
  15: {
    name: "Charm",
    info: "L creatures treat you like a friend. (Knave spell #15)"
  },
  16: {
    name: "Command",
    info:
      "A creature obeys a single, three-word command that does not harm it. (Knave spell #16)"
  },
  17: {
    name: "Comprehend",
    info: "You become fluent in all languages. (Knave spell #17)"
  },
  18: {
    name: "Control Plants",
    info:
      "Nearby plants and trees obey you and gain the ability to move at 5 feet per round. (Knave spell #18)"
  },
  19: {
    name: "Control Weather",
    info:
      "You may alter the type of weather at will, but you do not otherwise control it. (Knave spell #19)"
  },
  20: {
    name: "Counterspell",
    info:
      "Make an opposed Intelligence save against the Intelligence of the caster of a nearby spell. You may do this out of turn as a reaction, or against an ongoing magical effect. On a success, you may cancel the spell. (Knave spell #20)"
  },
  21: {
    name: "Deafen",
    info: "All nearby creatures are deafened. (Knave spell #21)"
  },
  22: {
    name: "Detect Magic",
    info:
      "You hear nearby magical auras singing. Volume and harmony signify the aura’s power and refinement. (Knave spell #22)"
  },
  23: {
    name: "Disassemble",
    info:
      "Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them. (Knave spell #23)"
  },
  24: {
    name: "Disguise",
    info:
      "You may alter the appearance of L characters at will as long as they remain humanoid. Attempts to duplicate other characters will seem uncanny. (Knave spell #24)"
  },
  25: {
    name: "Displace",
    info:
      "An object appears to be up to L×10' from its actual position. (Knave spell #25)"
  },
  26: {
    name: "Earthquake",
    info:
      "The ground begins shaking violently. Structures may be damaged or collapse. (Knave spell #26)"
  },
  27: {
    name: "Elasticity",
    info: "Your body can stretch up to L×10'. (Knave spell #27)"
  },
  28: {
    name: "Elemental Wall",
    info:
      "A straight wall of ice or fire L×40' long and 10' high rises from the ground. (Knave spell #28)"
  },
  29: {
    name: "Filch",
    info: "L visible items teleport to your hands. (Knave spell #29)"
  },
  30: {
    name: "Fog Cloud",
    info: "Dense fog spreads out from you. (Knave spell #30)"
  },
  31: {
    name: "Frenzy",
    info: "L creatures erupt in a frenzy of violence.  (Knave spell #31)"
  },
  32: {
    name: "Gate",
    info: "A portal to a random plane opens. (Knave spell #32)"
  },
  33: {
    name: "Gravity Shift",
    info:
      "You can change the direction of gravity (for yourself only) up to once per round. (Knave spell #33)"
  },
  34: {
    name: "Greed",
    info:
      "L creatures develop an overwhelming urge to possess a visible item of your choice. (Knave spell #34)"
  },
  35: {
    name: "Haste",
    info: "Your movement speed is tripled. (Knave spell #35)"
  },
  36: {
    name: "Hatred",
    info:
      "L creatures develop a deep hatred of another creature or group of creatures and wish to destroy it. (Knave spell #36)"
  },
  37: {
    name: "Hear Whispers",
    info: "You can hear faint sounds clearly. (Knave spell #37)"
  },
  38: {
    name: "Hover",
    info:
      "An object hovers, frictionless, 2' above the ground. It can hold up to L humanoids. (Knave spell #38)"
  },
  39: {
    name: "Hypnotize",
    info:
      "A creature enters a trance and will truthfully answer L yes or no questions you ask it. (Knave spell #39)"
  },
  40: {
    name: "Icy Touch",
    info:
      "A thick ice layer spreads across a touched surface, up to L×10' in radius. (Knave spell #40)"
  },
  41: {
    name: "Illuminate",
    info: "A floating light moves as you command. (Knave spell #41)"
  },
  42: {
    name: "Increase Gravity",
    info: "The gravity in an area triples. (Knave spell #42)"
  },
  43: {
    name: "Invisible Tether",
    info:
      "Two objects within 10' of each other cannot be moved more than 10' apart. (Knave spell #43)"
  },
  44: {
    name: "Knock",
    info: "L nearby mundane or magical locks unlock. (Knave spell #44)"
  },
  45: {
    name: "Leap",
    info: "You can jump up to L×10' in the air. (Knave spell #45)"
  },
  46: {
    name: "Liquid Air",
    info: "The air around you becomes swimmable. (Knave spell #46)"
  },
  47: {
    name: "Magic Dampener",
    info:
      "All nearby magical effects have their effectiveness halved. (Knave spell #47)"
  },
  48: {
    name: "Manse",
    info:
      "A sturdy, furnished cottage appears for L×12 hours. You can permit and forbid entry to it at will. (Knave spell #48)"
  },
  49: {
    name: "Marble Madness",
    info:
      "Your pockets are full of marbles, and will refill every round. (Knave spell #49)"
  },
  50: {
    name: "Masquerade",
    info:
      "L characters’ appearances and voices become identical to a touched character. (Knave spell #50)"
  },
  51: {
    name: "Miniaturize",
    info:
      "You and L other touched creatures are reduced to the size of a mouse. (Knave spell #51)"
  },
  52: {
    name: "Mirror Image",
    info:
      "L illusory duplicates of yourself appear under your control. (Knave spell #52)"
  },
  53: {
    name: "Mirrorwalk",
    info:
      "A mirror becomes a gateway to another mirror that you looked into today. (Knave spell #53)"
  },
  54: { name: "Multiarm", info: "You gain L extra arms. (Knave spell #54)" },
  55: {
    name: "Night Sphere",
    info:
      "An L×40' wide sphere of darkness displaying the night sky appears. (Knave spell #55)"
  },
  56: {
    name: "Objectify",
    info:
      "You become any inanimate object between the size of a grand piano and an apple. (Knave spell #56)"
  },
  57: {
    name: "Ooze Form",
    info: "You become a living jelly. (Knave spell #57)"
  },
  58: {
    name: "Pacify",
    info: "L creatures have an aversion to violence. (Knave spell #58)"
  },
  59: {
    name: "Phantom Coach",
    info:
      "A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, including water. (Knave spell #59)"
  },
  60: {
    name: "Phobia",
    info:
      "L creatures become terrified of an object of your choice. (Knave spell #60)"
  },
  61: {
    name: "Pit",
    info: "A pit 10' wide and L×5' deep opens in the ground. (Knave spell #61)"
  },
  62: {
    name: "Primeval Surge",
    info:
      "An object grows to the size of an elephant. If it is an animal, it is enraged. (Knave spell #62)"
  },
  63: {
    name: "Psychometry",
    info:
      "The referee answers L yes or no questions about a touched object. (Knave spell #63)"
  },
  64: {
    name: "Pull",
    info:
      "An object of any size is pulled directly towards you with the strength of L men for one round. (Knave spell #64)"
  },
  65: {
    name: "Push",
    info:
      "An object of any size is pushed directly away from you with the strength of L men for one round. (Knave spell #65)"
  },
  66: {
    name: "Raise Dead",
    info:
      "L skeletons rise from the ground to serve you. They are incredibly stupid and can only obey simple orders. (Knave spell #66)"
  },
  67: {
    name: "Raise Spirit",
    info:
      "The spirit of a dead body manifests and will answer L questions. (Knave spell #67)"
  },
  68: {
    name: "Read Mind",
    info:
      "You can hear the surface thoughts of nearby creatures. (Knave spell #68)"
  },
  69: {
    name: "Repel",
    info:
      "L+1 objects are strongly magnetically repelled from each other if they come within 10 feet. (Knave spell #69)"
  },
  70: {
    name: "Scry",
    info:
      "You can see through the eyes of a creature you touched earlier today. (Knave spell #70)"
  },
  71: {
    name: "Sculpt Elements",
    info:
      "All inanimate material behaves like clay in your hands. (Knave spell #71)"
  },
  72: {
    name: "Shroud",
    info: "L creatures are invisible until they move. (Knave spell #72)"
  },
  73: {
    name: "Shuffle",
    info:
      "L creatures instantly switch places. Determine where they end up randomly. (Knave spell #73)"
  },
  74: {
    name: "Sleep",
    info: "L creatures fall into a light sleep. (Knave spell #74)"
  },
  75: {
    name: "Smoke Form",
    info: "Your body becomes living smoke. (Knave spell #75)"
  },
  76: {
    name: "Snail Knight",
    info:
      "10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy. (Knave spell #76)"
  },
  77: {
    name: "Sniff",
    info: "You can smell even the faintest traces of scents. (Knave spell #77)"
  },
  78: {
    name: "Sort",
    info:
      "Inanimate items sort themselves according to categories you set. The categories must be visually verifiable. (Knave spell #78)"
  },
  79: {
    name: "Spectacle",
    info:
      "A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound. (Knave spell #79)"
  },
  80: {
    name: "Spellseize",
    info:
      "Cast this as a reaction to another spell going off to make a temporary copy of it that you can cast at any time before this spell ends. (Knave spell #80)"
  },
  81: {
    name: "Spider Climb",
    info: "You can climb surfaces like a spider. (Knave spell #81)"
  },
  82: {
    name: "Summon Cube",
    info:
      "Once per second, (6 times per round) you may summon or banish a 3-foot-wide cube of earth. New cubes must be affixed to the earth or to other cubes. (Knave spell #82)"
  },
  83: {
    name: "Swarm",
    info:
      "You become a swarm of crows, rats, or piranhas. You only take damage from area effects. (Knave spell #83)"
  },
  84: {
    name: "Telekinesis",
    info: "You may mentally move L items. (Knave spell #84)"
  },
  85: {
    name: "Telepathy",
    info:
      "L+1 creatures can hear each other’s thoughts, no matter how far apart they move. (Knave spell #85)"
  },
  86: {
    name: "Teleport",
    info:
      "An object disappears and reappears on the ground in a visible, clear area up to L×40' away. (Knave spell #86)"
  },
  87: {
    name: "Thaumaturgic Anchor",
    info:
      "Object becomes the target of every spell cast near it. (Knave spell #87)"
  },
  88: {
    name: "Thicket",
    info:
      "A thicket of trees and dense brush up to L×40' wide suddenly sprouts up. (Knave spell #88)"
  },
  89: {
    name: "Time Jump",
    info:
      "An object disappears as it jumps L×10 minutes into the future. When it returns, it appears in the unoccupied area nearest to where it left. (Knave spell #89)"
  },
  90: {
    name: "Summon Idol",
    info:
      "A carved stone statue the size of a four poster bed rises from the ground. (Knave spell #90)"
  },
  91: {
    name: "Time Rush",
    info:
      "Time in a 40' bubble starts moving 10 times faster. (Knave spell #91)"
  },
  92: {
    name: "Time Slow",
    info: "Time in a 40' bubble slows to 10%. (Knave spell #92)"
  },
  93: {
    name: "True Sight",
    info: "You see through all nearby illusions. (Knave spell #93)"
  },
  94: {
    name: "Upwell",
    info: "A spring of seawater appears. (Knave spell #94)"
  },
  95: {
    name: "Vision",
    info: "You completely control what a creature sees. (Knave spell #95)"
  },
  96: {
    name: "Visual Illusion",
    info:
      "A silent, immobile, illusion of your choice appears, up to the size of a bedroom. (Knave spell #96)"
  },
  97: {
    name: "Ward",
    info:
      "A silver circle 40' across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, projectiles or metal. (Knave spell #97)"
  },
  98: {
    name: "Web",
    info: "Your wrists can shoot thick webbing. (Knave spell #98)"
  },
  99: {
    name: "Wizard Mark",
    info:
      "Your finger can shoot a stream of ulfire-colored paint. This paint is only visible to you, and can be seen at any distance, even through solid objects. (Knave spell #99)"
  },
  100: {
    name: "X-Ray Vision",
    info: "You gain X-Ray vision. (Knave spell #100)"
  }
};

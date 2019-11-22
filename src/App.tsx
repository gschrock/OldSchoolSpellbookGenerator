import React, { Component } from "react";
import styled from "styled-components";
import AppContext from "./context/AppContext";

interface Props {
  className?: string;
}

interface ImplProps extends Props {}

export class AppImpl extends Component<ImplProps> {
  state = {
    spellType: "Magic-user Spells",
    characterLevel: 1,
    includeKnaveSpells: false,
    extraSpells: 0,
    spellbookSpells: null
  };

  setSpellType = (spellType: string) => {
    this.setState({ spellType });
  };

  setCharacterLevel = (characterLevel: number) => {
    this.setState({ characterLevel });
  };

  setIncludeKnaveSpells = (includeKnaveSpells: boolean) => {
    this.setState({ includeKnaveSpells });
  };

  setExtraSpells = (extraSpells: number) => {
    this.setState({ extraSpells });
  };

  setSpellbookSpells = (spellbookSpells: any) => {
    this.setState({ spellbookSpells });
  };

  render() {
    const { children, className } = this.props;
    const windowWidth = window.innerWidth;
    const urlPath = window.location.pathname;
    const isSmallDevice = windowWidth <= 500;
    return (
      <AppContext.Provider
        value={{
          spellType: this.state.spellType,
          setSpellType: this.setSpellType,
          characterLevel: this.state.characterLevel,
          setCharacterLevel: this.setCharacterLevel,
          includeKnaveSpells: this.state.includeKnaveSpells,
          setIncludeKnaveSpells: this.setIncludeKnaveSpells,
          extraSpells: this.state.extraSpells,
          setExtraSpells: this.setExtraSpells,
          spellbookSpells: this.state.spellbookSpells,
          setSpellbookSpells: this.setSpellbookSpells
        }}
      >
        <Stars>
          <div className="stars"></div>
          <div className="twinkling"></div>
          <div className="clouds"></div>
          <div
            className={className}
            style={
              isSmallDevice && urlPath === "/spellbook"
                ? { padding: "1.25rem" }
                : {
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                  }
            }
          >
            {children}
          </div>
        </Stars>
      </AppContext.Provider>
    );
  }
}

const Stars = styled.div`
  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-webkit-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-moz-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }
  @-ms-keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-webkit-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-moz-keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }
  @-ms-keyframes move-clouds-back {
    from {
      background-position: 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .stars {
    background-color: #000;
    background-image: url(http://www.script-tutorials.com/demos/360/images/stars.png);
    background-repeat: repeat;
    background-position: top center;
    z-index: 0;
  }

  .twinkling {
    background-color: transparent;
    background-image: url(http://www.script-tutorials.com/demos/360/images/twinkling.png);
    background-repeat: repeat;
    background-position: top center;
    z-index: 1;

    -moz-animation: move-twink-back 200s linear infinite;
    -ms-animation: move-twink-back 200s linear infinite;
    -o-animation: move-twink-back 200s linear infinite;
    -webkit-animation: move-twink-back 200s linear infinite;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    background-image: url(http://www.script-tutorials.com/demos/360/images/clouds3.png);
    z-index: 3;

    -moz-animation: move-clouds-back 200s linear infinite;
    -ms-animation: move-clouds-back 200s linear infinite;
    -o-animation: move-clouds-back 200s linear infinite;
    -webkit-animation: move-clouds-back 200s linear infinite;
    animation: move-clouds-back 200s linear infinite;
  }
`;

const StyledApp = styled(AppImpl)`
  z-index: 4;
  overflow: scroll;
  font-family: "Roboto Mono", monospace;
  height: 100%;
  position: absolute;
`;

export default StyledApp;

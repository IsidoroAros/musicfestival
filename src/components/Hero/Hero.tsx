import { useEffect, useState } from "react"
import { FiChevronsDown } from "react-icons/fi"
import { styled } from "styled-components"
import groupImage2 from "../../img/heroLogos/matzo.png"
import groupImage4 from "../../img/heroLogos/nightmare.png"
import groupImage1 from "../../img/heroLogos/sanholo.png"
import groupImage3 from "../../img/heroLogos/whippedcream.png"
import bgHero from "../../img/music-festival/bg-hero.jpg"
import groupImage5 from "../../img/music-festival/blondish.png"
import separatorImage1 from "../../img/music-festival/cruz-separate-1.png"
import separatorImage2 from "../../img/music-festival/cruz-separate-2.png"
import separatorImage3 from "../../img/music-festival/cruz-separate-3.png"
import headerDclLogo from "../../img/music-festival/DMF24-Logo.png"
import bgHeroMobile from "../../img/music-festival/hero-background-mobile.png"
import diamondImageLeft from "../../img/music-festival/left-diamond.png"
import diamondImage from "../../img/music-festival/middle-diamond.png"
import diamondImageRight from "../../img/music-festival/right-diamond.png"
import dateImage from "../../img/music-festival/top-date.png"
import { breakpoints } from "../../utils/theme"
import { DownloadLink } from "../DownloadButton"

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768)
    })
  }, [])

  return (
    <StyledHero>
      <BackgroundImage
        src={isMobile ? bgHeroMobile : bgHero}
        alt="background"
      />
      <HeroContainer>
        <DateRow>
          <DiamondImage src={diamondImageLeft} alt="left diamond" />
          <DateImage src={dateImage} alt="November 20 - 23" />
          <DiamondImage src={diamondImageRight} alt="right diamond" />
        </DateRow>
        <StyledLogo src={headerDclLogo} />
        <ContentWrapper>
          <MobileDiamondLine>
            <DiamondImage src={diamondImage} alt="diamond" />
          </MobileDiamondLine>
          <TextRow>
            <GroupText>
              <b>FREE</b> ENTRY
            </GroupText>
            <TextImage src={separatorImage1} alt="separator" />
            <GroupText>
              <b>EXCLUSIVE</b> SETS
            </GroupText>
            <TextImage src={separatorImage2} alt="separator" />
            <GroupText>
              EPIC <b>GIVEAWAYS</b>
            </GroupText>
            <TextImage src={separatorImage3} alt="separator" />
            <GroupText>
              LIVE <b>VIP</b> TALKS
            </GroupText>
          </TextRow>
          <DiamondLine>
            <DiamondImage src={diamondImage} alt="diamond" />
          </DiamondLine>
          <GroupImages>
            <GroupImage className="nightmare" src={groupImage4} alt="group 4" />
            <GroupImage src={groupImage1} alt="group 1" />
            <GroupImage src={groupImage5} alt="group 5" />
            <GroupImage src={groupImage2} alt="group 2" />
            <GroupImage src={groupImage3} alt="group 3" />
          </GroupImages>
        </ContentWrapper>
        <GetReadyContainer>
          <GetReadyText>
            <FiChevronsDown />
            ENTER NOW
            <FiChevronsDown />
          </GetReadyText>
          <DownloadLink useJump />
        </GetReadyContainer>
      </HeroContainer>
    </StyledHero>
  )
}

const DateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}) {
    gap: 8px;
    margin-bottom: 16px;
  }
`

const DateImage = styled.img`
  height: 29px;
  width: 361px;

  @media (max-width: ${breakpoints.md}) {
    height: 24px;
    width: 300px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 20px;
    width: 250px;
  }
`

const TextRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  font-size: 10px;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
    gap: 3px;
    margin-bottom: 10px;
  }

  @media (max-width: ${breakpoints.s}) {
    font-size: 12px;
    gap: 2px;
    margin-bottom: 5px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    gap: 1px;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 20px;
  }
`

const TextImage = styled.img`
  height: 9px;

  @media (max-width: ${breakpoints.md}) {
    height: 7px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 5px;
  }

  @media (max-width: 400px) {
    height: 4px;
  }
`

const GroupText = styled.p`
  text-transform: uppercase;
  white-space: nowrap;
`

const DiamondLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: 44%;
    left: 0;
    right: 0;
    height: 2.5px;
    background-color: #926bff;
    z-index: 1;
    @media (max-width: ${breakpoints.s}) {
      height: 1px;
    }
  }

  & > img {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.md}) {
    margin-bottom: 5px;
  }
`

const DiamondImage = styled.img`
  height: 20px;

  @media (max-width: ${breakpoints.md}) {
    height: 20px;
  }

  @media (max-width: ${breakpoints.s}) {
    height: 16px;
  }
`

const GroupImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  max-width: 650px;

  @media (max-width: ${breakpoints.md}) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.s}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
    justify-items: center;
    place-items: center;

    & > *:last-child {
      grid-column: 1 / -1;
      justify-self: center;
    }
  }
`

const GroupImage = styled.img`
  mix-blend-mode: screen;
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
  position: relative;
  object-position: center;
  object-fit: contain;
  width: 1fr;
  flex: 1;
  max-width: 120px;

  @media (max-width: ${breakpoints.l}) {
    max-height: 60px;
    max-width: 120px;
  }

  @media (max-width: ${breakpoints.md}) {
    height: 60px;
    max-width: 80px;
  }

  @media (max-width: ${breakpoints.s}) {
    max-width: 160px;
  }
`

const StyledHero = styled.div`
  position: relative;
  height: 100%;
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 0;
`

const HeroContainer = styled.div`
  height: auto;
  max-width: 800px;
  width: 100%;
  position: relative;
  text-align: center;
  overflow: hidden;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: 180px;
  padding: 20px;

  @media (min-width: ${breakpoints.s}) {
    margin-top: 120px;
  }

  @media (min-width: ${breakpoints.md}) {
    margin-top: 80px;
  }

  @media (max-width: ${breakpoints.md}) {
    max-width: 100%;
  }
`

const GetReadyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${breakpoints.s}) {
    gap: 10px;
  }
`

const GetReadyText = styled.div`
  font-family: "Bebas Neue", sans-serif;
  font-size: 20px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 0px;

  @media (max-width: ${breakpoints.s}) {
    font-size: 10px;
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  > svg {
    animation: bounce 2s linear infinite;
    position: relative;
    top: 5px;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`

const ContentWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  align-items: center;

  @media (max-width: ${breakpoints.md}) {
    // max-width: 90%;
  }
`

const StyledLogo = styled.img`
  width: 100%;

  height: auto;

  @media (max-width: ${breakpoints.md}) {
    max-width: 90%;
  }

  @media (min-width: ${breakpoints.l}) {
    max-width: 700px;
  }
`

const MobileDiamondLine = styled(DiamondLine)`
  display: none;
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}) {
    display: flex;
    margin-bottom: 5px;
  }
`

export { Hero, StyledLogo, DiamondImage }

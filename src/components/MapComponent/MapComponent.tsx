import { styled } from "styled-components"
import mapData from "../../data/mapData.json"
import mapImage from "../../img/music-festival/map.png"
import { DownloadLink } from "../DownloadButton"
import { Title } from "../LiveTalks/LiveTalks"

const MapComponent = () => {
  return (
    <MapContainer>
      <Title>MAP</Title>
      <ContentWrapper>
        <MapImage src={mapImage} alt="Map" />
        <Section>
          {mapData.map((zone, index) => (
            <ZoneArticle key={index}>
              <ZoneHeader color="white">{zone.zone}</ZoneHeader>
              <ZoneList>
                {zone.games.map((game, idx) => (
                  <ZoneItem key={idx}>{game}</ZoneItem>
                ))}
              </ZoneList>
            </ZoneArticle>
          ))}
        </Section>
      </ContentWrapper>
      <DownloadLink />
    </MapContainer>
  )
}

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 40px;
  gap: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  gap: 40px;
`

const MapImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 636px;
  max-height: 636px;
  margin-bottom: 20px;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
`

const ZoneArticle = styled.article`
  background-color: #000;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 100%;
`

const ZoneHeader = styled.h3<{ color: string }>`
  color: ${({ color }) => color};
  background: linear-gradient(90deg, #00bfff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 22px;
  white-space: nowrap;
  overflow: hidden;
`

const ZoneList = styled.div`
  color: white;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ZoneItem = styled.p`
  margin: 0;
  color: white;
  font-size: 16px;
`
export { MapComponent }
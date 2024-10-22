/* eslint-disable import/group-exports */
/* eslint-disable import/exports-last */

// Artists day one
import Dome from "../../img/artists/pictures/DayFour/Dome.jpg"
import Gueva from "../../img/artists/pictures/DayFour/Gueva.jpg"
import Kiramomo from "../../img/artists/pictures/DayFour/Kiramomo-&-UNTZ-King.jpg"
import Nactcheo from "../../img/artists/pictures/DayFour/Natcheo.jpg"
import Noncitizens from "../../img/artists/pictures/DayFour/Noncitizens.jpg"
import WhippedCream from "../../img/artists/pictures/DayFour/Whipped-Cream.jpg"
import Bellow33 from "../../img/artists/pictures/DayOne/33-Below.jpg"
import DanielAllan from "../../img/artists/pictures/DayOne/Daniel-Allan.jpg"
import FiSullivan from "../../img/artists/pictures/DayOne/Fi-Sullivan.jpg"
import Lyrah from "../../img/artists/pictures/DayOne/Lyrah.jpg"
import SanHolo from "../../img/artists/pictures/DayOne/San-Holo.jpg"
import Tesh from "../../img/artists/pictures/DayOne/Tesh.jpeg"
// Artists day two
// Artists day three
import Bufalo from "../../img/artists/pictures/DayThree/Bufalo.jpg"
import Davyd from "../../img/artists/pictures/DayThree/Davyd.jpg"
import DjLag from "../../img/artists/pictures/DayThree/DJLag.jpg"
import Geko from "../../img/artists/pictures/DayThree/GeKo.jpg"
import Nghtmare from "../../img/artists/pictures/DayThree/NGHTMRE.jpeg"
import Pans from "../../img/artists/pictures/DayThree/PANS.jpg"
import StoneyEye from "../../img/artists/pictures/DayThree/StoneyEye.jpg"
import AiWaska from "../../img/artists/pictures/DayTwo/Aiwaska.jpg"
import Armina from "../../img/artists/pictures/DayTwo/Armina.jpg"
import Dvibe from "../../img/artists/pictures/DayTwo/D-Vibe.jpg"
import MatZo from "../../img/artists/pictures/DayTwo/MatZo.jpeg"
import SteveSaiko from "../../img/artists/pictures/DayTwo/Steve-Saiko.jpg"
import Toro from "../../img/artists/pictures/DayTwo/Toro.jpg"
//Live Talks
import diaUnoCharlaUno from "../../img/liveTalks/Day1charla1.png"
import diaUnoCharlaDos from "../../img/liveTalks/Day1charla2.png"
import diaDosCharlaUno from "../../img/liveTalks/Day2charla1.png"
import diaDosCharlaDos from "../../img/liveTalks/Day2charla2.png"
import diaTresCharlaUno from "../../img/liveTalks/Day3charla1.png"
import diaTresCharlaDos from "../../img/liveTalks/Day3charla2.png"
import diaCuatroCharlaUno from "../../img/liveTalks/Day4charla1.png"

export type Artist = {
  name: string
  time: string
  image?: string
  description?: string
  logoSrc?: string
  subtitle?: {
    one: string
    two: string
    three: string
  }

  socials?: {
    twitter?: string
    instagram?: string
    discord?: string
    music?: string
  }
}

export type Day = {
  name: string
  artists: Artist[]
}

const schedule: Day[] = [
  {
    name: "DAY ONE",
    artists: [
      {
        name: "Emotes & Wearables",
        time: "18:00",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Discovering Virtual Assets for Music Experience\n\nSpeakers:\nDecentraland, LMTLSS",
        image: diaUnoCharlaUno,
      },
      {
        name: "FI SULLIVAN",
        time: "19:00",
        logoSrc: FiSullivan,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "19:00 UTC (11:00PST)",
        },
        description:
          "LA-based artist & producer known for ethereal, synth-driven sounds. Notable tracks include Another Night, and she has performed with San Holo & Daktyl for Coop Records Midnight Diner L.A.",
        image: FiSullivan,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/fi_sounds/",
          music:
            "https://open.spotify.com/artist/4Wvsgumh32s2wSMTZW7FMa?si=QTNpR2b7Qo6fkTbWhb5U0g&nd=1&dlsi=8f78f281040946fc",
        },
      },
      {
        name: "Label Round-Table",
        time: "20:00",
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "20:00 UTC (12:00PST)",
        },
        description: `Increasing Authentic Engagement in EDM
        Speakers: Coop Records, Tash55.xyz, Hume, LNRZ.`,
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
        image: diaUnoCharlaDos,
      },
      {
        name: "33 BELOW",
        time: "21:00",
        logoSrc: Bellow33,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "A rising electronic music producer from New Zealand, based in London. Known for atmospheric and melodic soundscapes, combining elements of house and downtempo beats.",
        image: Bellow33,
        socials: {
          twitter: "https://x.com/33_below",
          instagram: "https://www.instagram.com/33_below/",
          music:
            "https://open.spotify.com/artist/4tMIsBBR8M0PsorDf0mNEz?si=kHULdTCVRsS6MjkPujFhyQ&nd=1&dlsi=502551a6d5d14423",
        },
      },
      {
        name: "SAN HOLO",
        time: "22:00",
        logoSrc: SanHolo,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Internationally recognized DJ/producer known for a guitar-infused, indie & future bass sound. Hits like Light and We Rise garner millions of streams; with sets at Ultra & Tomorrowland.",
        image: SanHolo,
        socials: {
          twitter: "https://x.com/sanholobeats",
          instagram: "https://www.instagram.com/sanholobeats/",
          music:
            "https://open.spotify.com/artist/0jNDKefhfSbLR9sFvcPLHo?si=dkSRF32lR7WDXOLAYQ5PKQ&nd=1&dlsi=fba2b002adc741d9",
        },
      },
      {
        name: "DANIEL ALLAN",
        time: "23:00",
        logoSrc: DanielAllan,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "LA-based innovative producer known for merging pop, electronic, and hip-hop, and pioneering Web3 music distribution. His recent hit 'I Just Need (with Lyrah)' saw millions of streams.",
        image: DanielAllan,
        socials: {
          twitter: "https://x.com/imdanielallan",
          instagram: "https://www.instagram.com/danielallanmusic/",
          music:
            "https://open.spotify.com/artist/5JQ1XqKJ2Art01rF4tu1Ra?si=fqqfTbNgSgOXNa8i1iMpmQ",
        },
      },
      {
        name: "LYRAH",
        time: "00:00",
        logoSrc: Lyrah,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Singer-songwriter and producer blending dark pop with electronic undertones. Her recent collab with Daniel Allan, 'I Just Need' received international recognition.",
        image: Lyrah,
        socials: {
          twitter: "https://x.com/lyrah",
          instagram: "https://www.instagram.com/lyrah/",
          music: "https://open.spotify.com/artist/5JyKQ4MQ2HkU1n1BYiKMWW",
        },
      },
      {
        name: "TESH",
        time: "1:00",
        logoSrc: Tesh,
        subtitle: {
          one: "DAY 1",
          two: "NOV. 20",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Upcoming DJ and producer, showcased by Coop Record's Midnight Diner series. Releases include 'Blueskies' and 'Tell Me About It'",
        image: Tesh,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/te.shla",
          music:
            "https://open.spotify.com/artist/4bnUfGrlUSrYBRajJnAhDX?si=IdjwSBt-RdadpHFr1uJgMA&nd=1&dlsi=0dae91f4c27c4eb9",
        },
      },
    ],
  },
  {
    name: "DAY TWO",
    artists: [
      {
        name: "Tech-Driven Fan Economies",
        time: "17:00",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "17:00 UTC (8:00PST)",
        },
        description:
          "Tools and Strategies for Independent Artists. Speakers: MIDiA Research, Future Music Forum, Metatron Studios, Pitch Control Marketing.",
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
        image: diaDosCharlaUno,
      },
      {
        name: "TORO",
        time: "18:00",
        logoSrc: Toro,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "18:00 UTC (9:00PST)",
        },
        description:
          "Chicago-born producer Toro brings his Puerto Rican roots into every set, fusing house, Latin, Afrobeat, and Electro for an energizing, soulful journey.",
        image: Toro,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/djtorobeatz/",
          music: "https://soundcloud.com/djtorobeatz",
        },
      },
      {
        name: "D-VIBE",
        time: "19:00",
        logoSrc: Dvibe,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "19:00 UTC (10:00PST)",
        },
        description:
          "Athens-based D-Vibe is a rising DJ/Producer and Radio Host, known for his raw, underground techno style. Inspired by legends like Richie Hawtin, he brings passion to stages and clubs worldwide.",
        image: Dvibe,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/dvibe.techno/",
          music: "",
        },
      },
      {
        name: "Label Round-Table",
        time: "20:00",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "20:00 UTC (12:00PST)",
        },
        description: `New Approaches to Promoting EMD Globally. Speakers: Monstercat, Beatport, Hospital Records, Fold Artists.`,
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
        image: diaDosCharlaDos,
      },
      {
        name: "AIWASKA",
        time: "21:00",
        logoSrc: AiWaska,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Mysterious Argentina-based producer fusing Melodic House with hypnotic vocals and atmospheric bass. Signed by Crosstown Rebels, performances at Burning Man, Tulum, and Ibiza.",
        image: AiWaska,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/aiwaska/",
          music: "https://open.spotify.com/artist/3VqggSPrC7SFYDSd6DN6DN",
        },
      },
      {
        name: "MAT ZO",
        time: "22:00",
        logoSrc: MatZo,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Grammy-nominated DJ/producer, blending genres from trance to drum & bass. Globally known for hits like 'Easy' and 'Colours', he founded the label Mad Zoo and plays festivals worldwide.",
        image: MatZo,
        socials: {
          twitter: "https://x.com/Mat_Zo",
          instagram: "https://www.instagram.com/mat_zo/",
          music: "https://open.spotify.com/artist/2n7USVO8fO8FF8zq4kG2N1",
        },
      },
      {
        name: "ARMINA",
        time: "23:00",
        logoSrc: Armina,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "A Ukrainian-Polish DJ/Producer based in Barcelona, blending Progressive House with Afro and Hindi influences in Melodic Techno. Her iconic live streams regularly gain thousands of views.",
        image: Armina,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/armina.dj/",
          music: "https://open.spotify.com/artist/668LMKafrBrzwSPLQz1OdQ",
        },
      },
      {
        name: "STEVE SAIKO",
        time: "00:00",
        logoSrc: SteveSaiko,
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Steve Sai, a Greek DJ/Producer, is known for deep, hypnotic techno with progressive influences. He's released on top labels like Bonzai and Baroque and played at major venues across Europe.",
        image: SteveSaiko,
        socials: {
          twitter: "https://x.com/SteveSaiko",
          instagram: "https://www.instagram.com/stevesai_/",
          music: "https://open.spotify.com/artist/0w0gxSSI8bu1YmdOEbr2ca",
        },
      },
      {
        name: "INVISIBLE REALITY",
        time: "1:00",
        subtitle: {
          one: "DAY 2",
          two: "NOV. 21",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Invisible Reality, formed in 2002 by Shamil Abramov & Igor Sorin, blends Azerbaijani / Belarusian roots into progressive psytrance. Global festivals include Fusion, Voov & Psychedelic Circus",
        socials: {
          twitter: "https://x.com/InvisibleRealit",
          instagram: "https://www.instagram.com/invisiblereality/",
          music: "https://open.spotify.com/artist/5689fXaoEmJsLSPv3y18An",
        },
      },
    ],
  },
  {
    name: "DAY THREE",
    artists: [
      {
        name: "Beyond the Algorithms",
        time: "17:00",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "17:00 UTC (9:00PST)",
        },
        description: `Increasing Discoverability through Digital Community. Speakers: Peachz, Songbird Collective Agency, RealityJam, Revelator Labs.`,
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
        image: diaTresCharlaUno,
      },
      {
        name: "DAVYD",
        time: "18:00",
        logoSrc: Davyd,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Emerging producer, sound designer, and musician from Rio Gallegos, Argentina. Founder of Beat'm All Productions.",
        image: Davyd,
        socials: {
          twitter: "https://x.com/davyd_music",
          instagram: "https://www.instagram.com/davyd_music/",
          music:
            "https://open.spotify.com/artist/3zIEn6ebv9TgeonB2dd8it?go=1&sp_cid=831a53bff43f93fe1210644921f428e9&utm_source=embed_player_p&utm_medium=desktop&nd=1&dlsi=4f49ac0230384708",
        },
      },
      {
        name: "GEKO",
        time: "19:00",
        logoSrc: Geko,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "19:00 UTC (1:00PST)",
        },
        description:
          "GeKo (Amir Ben David) is a psytrance artist known for his powerful full-on night music. Now in Berlin, he's active in the psytrance and progressive scene with the GRAVITECH project.",
        image: Geko,
        socials: {
          twitter: "https://x.com/AmirGeKo",
          instagram: "",
          music: "https://soundcloud.com/geko",
        },
      },
      {
        name: "AI for EDM",
        time: "20:00",
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "20:00 UTC (12:00PST)",
        },
        description: `Shaping Tomorrow’s Intelligent Soundscapes? Speakers: LANDR, Audience Strategies, HitCraft, Infinite Album.`,
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
        image: diaTresCharlaDos,
      },
      {
        name: "PANS",
        time: "21:00",
        logoSrc: Pans,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Paris-based open format DJ and producer in electronic rock and tech house with ravager guitar riffs. A regular in the Decentraland party scene.",
        image: Pans,
        socials: {
          twitter: "https://x.com/PANSDJ",
          instagram: "https://www.instagram.com/pansdj/",
          music: "https://soundcloud.com/pansdj",
        },
      },
      {
        name: "DJ LAG",
        time: "22:00",
        logoSrc: DjLag,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "22:00 UTC (14:00PST)",
        },
        description:
          "Pioneering South African DJ/producer from Durban, DJ Lag is internationally known for creating and popularizing gqom, a raw and minimalistic form of house music with hard-hitting beats.",
        image: DjLag,
        socials: {
          twitter: "https://x.com/RealDJLag",
          instagram: "https://www.instagram.com/realdjlag/",
          music: "https://open.spotify.com/artist/1svX5cMlY22N60RxwzeJNO",
        },
      },
      {
        name: "NGHTMRE",
        time: "23:00",
        logoSrc: Nghtmare,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "NGHTMRE is a renowned EDM producer and DJ known for his dynamic blend of trap, bass, and future bass. He headlines major festivals, and hits like 'GUD VIBRATIONS' garner millions of streams worldwide.",
        image: Nghtmare,
        socials: {
          twitter: "https://x.com/NGHTMRE",
          instagram: "https://www.instagram.com/nghtmre/",
          music: "https://open.spotify.com/artist/76M2Ekj8bG8W7X2nbx2CpF",
        },
      },
      {
        name: "BUFALO",
        time: "00:00",
        logoSrc: Bufalo,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Parisian DJ/producer, fusing country, folk, and blues with electronic beats in 'Futuristic Western Music.' Known for high-energy performances across festivals worldwide.",
        image: Bufalo,
        socials: {
          twitter: "https://x.com/bufalomusic",
          instagram: "https://www.instagram.com/bufalomusic/",
          music:
            "https://open.spotify.com/artist/5TJ3ovuFQ2vRUye5280kQ8?si=uFNYzYd4R8W__fjjRPzT-A&nd=1&dlsi=054652d043544070",
        },
      },
      {
        name: "STONEY EYE & SOULTRY",
        time: "1:00",
        logoSrc: StoneyEye,
        subtitle: {
          one: "DAY 3",
          two: "NOV. 22",
          three: "1:00 UTC (17:00PST)",
        },
        description:
          "Special EDM set by MoBeatz producers StoneyEye and Soultry Dubs, known on Decentraland's music scene for their innovative fusion of dub, reggae, and electronic beats.",
        image: StoneyEye,
        socials: {
          twitter: "https://x.com/stoney_eye",
          instagram: "https://www.instagram.com/stoneyeyestudios/",
          music: "https://open.spotify.com/artist/0qs98NuHMkM1NKyPpzhSjc",
        },
      },
    ],
  },
  {
    name: "DAY FOUR",
    artists: [
      {
        name: "NATCHEO",
        time: "17:00",
        logoSrc: Nactcheo,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "17:00 UTC (9:00PST)",
        },
        description:
          "Rising Argentinean DJ and producer blending live jazz instrumentals with smooth house beats.",
        image: Nactcheo,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/_natcheo/",
          music:
            "https://soundcloud.com/user-369947237?ref=clipboard&p=i&c=1&si=5AD55646261B40758032D7686F1664BA&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        name: "Final Day Wrap",
        time: "19:00",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "20:00 UTC (12:00PST)",
        },
        description:
          "Festival Highlights with Featured Artists. Speakers: Decentraland, Multiz, GM Studios.",
        image: diaCuatroCharlaUno,
      },
      {
        name: "KIRAMOMO + UNTZ KING",
        time: "18:00",
        logoSrc: Kiramomo,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Emerging synthetic DJ/producers blending house with diverse sounds. Known for high-energy performances and web3 communities, they explore subgenres like hyperpop and dreamwave.",
        image: Kiramomo,
        socials: {
          twitter: "https://x.com/UntzKing",
          instagram: "https://www.instagram.com/kiramomodotcom/",
          music: "https://www.youtube.com/channel/UCiatrGkEjlkToFwk7BRnUnA",
        },
      },
      {
        name: "LIVE TALKS",
        time: "18:00",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "18:00 UTC (10:00PST)",
        },
        description:
          "Festival Highlights with Featured Artists. Speakers: Decentraland, Multiz, GM Studios.",
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
      },
      {
        name: "NONCITIZENS",
        time: "20:00",
        logoSrc: Noncitizens,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "20:00 UTC (12:00PST)",
        },
        description:
          "NonCitizens, an Argentinean duo, captivate with deep grooves and soundscapes. With residencies at Void Mykonos and Rumors Ibiza, their hit 'Lost Trumpet In Space' gained global support, including BBC Radio 1.",
        image: Noncitizens,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/noncitizensmusic/",
          music:
            "https://open.spotify.com/artist/73KWbbG4ZspCHvI0aDcfl1?si=vLdUfMZERHaLOBaL1Lak5Q&utm_medium=share&utm_source=linktree&nd=1&dlsi=e9e051145b3f4048",
        },
      },
      {
        name: "WHIPPED CREAM",
        time: "21:00",
        logoSrc: WhippedCream,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "21:00 UTC (13:00PST)",
        },
        description:
          "Toronto-born DJ/producer, fusing hip-hop, cinema, and electronica. Known for cinematic soundscapes, bass riffs, and dynamic live sets at Coachella, Lollapalooza and Tomorrowland.",
        image: WhippedCream,
        socials: {
          twitter: "https://x.com/WHIPPEDCREAM",
          instagram: "https://www.instagram.com/whippedcream/",
          music: "https://open.spotify.com/artist/5CMaNobmJYgXcfiT0zYOwi",
        },
      },
      {
        name: "BLOND:ISH",
        time: "22:00",
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "22:00 UTC (14:00PST)",
        },
        description: "",
        socials: {
          twitter: "",
          instagram: "",
          music: "",
        },
      },
      {
        name: "DOME",
        time: "23:00",
        logoSrc: Dome,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "23:00 UTC (15:00PST)",
        },
        description:
          "Santiago Domenech (DOME) a rising DJ/producer from Buenos Aires, has played major events like The Bow and Porto Seguro. With 2.5M+ streams, he blends Latin and electronic sounds, focusing on Melodic Techno.",
        image: Dome,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/santidomee/",
          music: "https://soundcloud.com/santidomee",
        },
      },
      {
        name: "GUEVA",
        time: "00:00",
        logoSrc: Gueva,
        subtitle: {
          one: "DAY 4",
          two: "NOV. 23",
          three: "00:00 UTC (16:00PST)",
        },
        description:
          "Gueva, an underground melodic techno DJ, fuses indie dance with melodic techno, blending futuristic harmonies, emotional melodies, and an '80s groove",
        image: Gueva,
        socials: {
          twitter: "",
          instagram: "https://www.instagram.com/gueva.__/",
          music:
            "https://open.spotify.com/artist/05Pn4YBKlafyqay7CrSS17?si=kLVRX0qkRoiQBoEkHU0CQQ&nd=1&dlsi=2ea53d637cb04170",
        },
      },
    ],
  },
]

export { schedule }

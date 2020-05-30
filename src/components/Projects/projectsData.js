import pokemonSiteImg from "../../images/projects/pokemonSite.png"
import portfolioSiteImg from "../../images/projects/portfolioSite.png"
import urlShortenerSiteImg from "../../images/projects/urlShortenerSite.png"
import colorSiteImg from "../../images/projects/colorSite.png"
import tierlistSiteImg from "../../images/projects/tierlistSite.png"

export default [
  {
    name: "Pokémon Site",
    description:
      "This project was the first time I had tried my hand at using a restful API, in this case the PokéApi. At this point in time I was aware of Javascript's fetch API, but had not used it before. I had also tasked myself with implementing pagination and infinite scrolling. As it turns out using the fetch API is easy! In order to implement the infinite scrolling I created an async function that fetches for a number of pokemon and based on the ids given back to me fetch for each pokémon in a Promise.All.",
    technologies: "ReactJs, Styled-Components, NextJs, Chroma-Js",
    imgSrc: pokemonSiteImg,
    imgAlt: "Pokemon Website",
  },

  {
    name: "Url Shortener",
    description:
      "Despite myself being a developer first I have been inspired bythe designs I see on Dribbble and Behance. Design is an important part of a website and so this is where I began to make my websites look truly professional. Planning! Look at sites that served the same purpose, look at even more web design online, and drawing mockups on paper first. This allowed me to go over iterations in order to create a product that was pleasant to the eyes.",
    technologies: "ReactJs, Styled-Components, NextJs, Paper, and Pencil",
    imgSrc: urlShortenerSiteImg,
    imgAlt: "Url Shortener Website",
  },
  {
    name: "Color Spec",
    description:
      'This was my first "real" web application. With so many buzzwords, frameworks, libraries and such it was admitidly daunting. I wanted the users to have access to different gradients and palettes aswell as have all kinds of details and information on each color. I had picked up Gatsby due to it being known as blazingly fast. React had just been coming out with hooks so I learned how useful they can be.',
    technologies: "ReactJs, Styled-Components, Chroma-Js",
    imgSrc: colorSiteImg,
    imgAlt: "Color Spec",
  },
  {
    name: "Portfolio",
    description:
      "How would I be able to portray myself as a junior developer that has a passion in web applications development? How can I make myself stand out? I need to put myself out there and showoff what I've built which can make my work feel shy. Be proud of the work I have done. This field is ever changing and just by watching videos, reading docs, and self determination I'm able to create websites and I'm proud. I know I am not done, and I am eager to learn so much more. I feel like with the right direction I will be able to grow so much more.",
    technologies: "ReactJs, Styled-Components, GatsbyJs",
    imgSrc: portfolioSiteImg,
    imgAlt: "Portfolio Website",
  },
  {
    name: "Tier List",
    description:
      "Drag and Drop. Drag and Drop can be a pain to implement. I wanted the user to be able to customize each row. Each row should have a color and label which the user can change at any time. The rows should be moved around aswell. Use the React-Beautiful-Dnd library. It allowed me to set up droppable and draggables. Each row being a droppable and character a draggable. This API taught me how similar APIs are made to make drag and drop easier to implement. ",
    technologies: "",
    imgSrc: tierlistSiteImg,
    imgAlt: "Tier List Site",
  },
]

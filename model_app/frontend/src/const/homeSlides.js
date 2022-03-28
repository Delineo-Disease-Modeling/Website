import Simulator from "../images/simulator_background.jpg"
import ML from "../images/ML_background.jpg"

const articles = [
  {
    id: 1,
    type: "Article",
    title: "Simulator",
    subtext:
      "The Delineo Disease Modeling Project is working to bring a fresh approach to the challenge of modeling the spread of pandemics. The project draws from a diverse set of academic fields, using knowledge and principles from computer science, applied mathematics, and public health to create a much more realistic model of disease spread.",
    img: Simulator,
  },
  {
    id: 2,
    type: "Article",
    title: "Machine Learning",
    subtext:
      "The problem of how disease moves is fundamentally a question of how people move. Leveraging mobility data provided by SafeGraph and XMode, our team is able to create realistic population movements informed by real world data. Our approach to the problem of movement utilizes statistical and machine learning methods from prior literature to form movement patterns that capture the broad range of ways that people move.",
    img: ML,
  },
];
export default articles;

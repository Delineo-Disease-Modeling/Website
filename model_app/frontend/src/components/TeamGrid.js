import GridList from "./GridList";
import SectionGridList from "./SectionGridList";
import teamList from "../const/teamList";

/**
 * TeamGrid component that sorts the team List and returns the list of students.
 * @param {object} props
 * @returns {React.Component}
 *
 */
const teamsList = (searchTerm) => {
  let type = searchTerm.type;
  const teamFullList = [];
  const team = teamList.sort((a, b) => a.name.localeCompare(b.name));
  team.forEach((person) => {
    if (person.inDelineo) {
      if (
        person.role === "Machine Learning" ||
        person.role === "Simulation" ||
        person.role === "Fullstack" ||
        person.role === "Information Support"
      ) {
        if (type === "all") {
          teamFullList.push(person);
        }
      }
      switch (person.role) {
        case "Principle Investigator":
          if (type === "pi") {
            teamFullList.push(person);
          }
          break;
        case "Machine Learning":
          if (type === "ml") {
            teamFullList.push(person);
          }
          break;
        case "Information Support":
          if (type === "info") {
            teamFullList.push(person);
          }
          break;
        case "Fullstack":
          if (type === "full") {
            teamFullList.push(person);
          }
          break;
        case "Simulation":
          if (type === "sim") {
            teamFullList.push(person);
          }
          break;
        case "Project Manager":
          if (type === "leader") {
            teamFullList[0] = person;
          } else if (type === "full") {
            teamFullList.push(person);
          }
          break;
        case "Fullstack Lead":
          if (type === "leader") {
            teamFullList[1] = person;
          } else if (type === "full") {
            teamFullList.push(person);
          }
          break;
        case "Simulation Lead":
          if (type === "leader") {
            teamFullList[2] = person;
          } else if (type === "sim") {
            teamFullList.push(person);
          }
          break;
        case "Machine Learning Lead":
          if (type === "leader") {
            teamFullList[3] = person;
          } else if (type === "ml") {
            teamFullList.push(person);
          }
          break;
        case "Information Support Lead":
          if (type === "leader") {
            teamFullList[4] = person;
          } else if (type === "info") {
            teamFullList.push(person);
          }
          break;
        default:
          teamFullList.push(person);
      }
    } else if (type === "past") {
      teamFullList.push(person);
    }
  });

  if (type !== "all" && type !== "leader" && type !== "pi") {
    return SectionGridList(teamFullList);
  }
  return GridList(teamFullList);
};

export default teamsList;

const graphDescriptionData = [
   {
      id: 1,
      title: "Line Graph",
      description: "Displays the total amount of infections as a proportion of the total amount of people that visited or interacted with Anytown.",
      terms: "Infections: The amount of infected people as a running sum \n People: The total amount of people recorded"
    },
    {
      id: 2,
      title: "Pie Chart",
      description: "A visual representation of the proportion of infections to noninfected people.",
      terms: "Total Infected: Total number of infected people \n Total Not Infected: Total number of non-infected people"
    },
    {
      id: 3,
      title: "Bar Chart",
      description: "Displays the number of infections per building.",
      terms: "N/A"
    },
    {
      id: 4,
      title: "Infection Animation",
      description: "An animation making the rate of infection visual. It does not represent actual infection contact, but is meant to show the rate of infection in a comprehensible way.",
      terms: "Day: The current day being displayed \n Infected: The current number of infected people \n Current Total People: The current number of people visited"
    },
    {
      id: 5,
      title: "Hotspot Graph",
      description: "Visual representation of hotspots in Anytown. The larger the circle, the more infections in that building. This does not accurately show location, but is meant to show the relative spread of infection.",
      terms: "N/A"
    },
   ]

export default graphDescriptionData;
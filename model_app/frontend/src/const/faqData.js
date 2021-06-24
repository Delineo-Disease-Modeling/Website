const faqData = [
    {
      question: "What is Delineo?",
      answer: "The Delineo Disease Modeling Project is working to bring a fresh approach to the challenge of modeling the spread of pandemics. The project draws from a diverse set of academic fields, using knowledge and principles from computer science, applied mathematics, and public health to create a far more realistic model of disease spread. Using geolocation mobile phone data, the Delineo project seeks to model disease spread in communities ranging from sparsely inhabited rural towns to densely populated urban megacities. The goal of our project is to create a massively parallel and highly scalable system that can be run across computing platforms to create a virtual world in which the spread of a disease can be observed and measured, along with studying the impact of non-pharmaceutical interventions (NPI’s) and different types of events on the spread of the disease. The model envisions populations in terms of extremely localized and specific “modules” comprising of people, their dwellings, and shared community spaces."
    },
    {
      question: "What does Delineo's simulator do?",
      answer: "Our simulator attempts to realistically capture the mechanisms of disease spread within a diverse range of geographies, ranging from small rural communities to large cities. The simulator works in two parts. Fundamentally, the question of disease movement is a question of population movement. Using geolocation mobility data from SafeGraph, realistic population movement dynamics are created. Then, a statistical disease driver uses the population movement information to predict disease spread."
    },
    {
      question: "What data to you use?",
      answer: "Our simulator makes use of census data and publicly available datasets to synthesize populations with the correct socioeconomic, gender, and comorbidity population distributions. Our movement patterns are informed by anonymized mobile cell phone data provided by SafeGraph." 
    },
    {
      question: "What is Anytown, USA?",
      answer: "Anytown, USA is a prototype implementation of our simulator, and is meant to let people interact with some of the core features of our simulator while the overall project is still under development." 
    },
    {
      question: "Which programming languages are used on this project?",
      answer: "The simulation is written in Python, while our website was created using the MERN stack. The interactive Anytown, USA game was created using the Unity game engine."
    },
];

export default faqData;

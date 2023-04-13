import React, { useRef, useEffect } from "react";

const InfectionHotspots = (HotspotData) => {
  const canvasRef = useRef(null);
  let isSorted = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let transformedData = new Map();
    let max = 0;

    
   //TODO: Move transform data and drawing dots to different place to prevent lag when resizing
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      transformData();
      drawDots();
    };

    const transformData = () => {
      let temp = HotspotData.HotspotData;
      // console.log(temp);
      // console.log(Object.keys(temp).length)
      for(let i = 0; i < Object.keys(temp).length; i++) {
         let numInfected = 0;
         const tempCopy = temp[i]["InfectedDaily"];
         // console.log(tempCopy);
         for(let j = 0; j < tempCopy.length; j++) {
            numInfected += tempCopy[i];
         }
         transformedData.set(temp[i]["BuildingName"], numInfected);
      }
      // console.log("Transformed DATA!!!!!");
      // console.log(transformedData);
    }

    const drawDots = () => {
      let top20 = null;
      if(!isSorted) {
         const mapSort1 = new Map([...transformedData.entries()].sort((a, b) => b[1] - a[1]));
         let arrayTmp = Array.from(mapSort1).slice(0, 21);
         let myMap = new Map(arrayTmp);
         top20 = myMap;
      }
      // console.log("This is top 20")
      // console.log(top20);
      context.clearRect(0, 0, canvas.width, canvas.height);
      // top20.foreach(findMax)
      const color = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];
      let currColor = 0;

      top20.forEach((value, key) => {
         if(value > max) {
            max = value;
         }
       });
      top20.forEach((value, key) => {
         const colorCurr = color[currColor];
         currColor++;
         let xPos = Math.random() * canvas.width;
         let yPos = Math.random() * canvas.height;
         if(xPos >= canvas.width - 20) {
            xPos-=20;
         }
         if(xPos <= 20) {
            xPos+= 20;
         }
         if(yPos >= canvas.height - 20) {
            yPos-=20;
         }
         if(yPos <= 20) {
            yPos+=20;
         }
         const dotSize = 20 * (value/max);
         context.fillStyle = colorCurr;
         context.beginPath();
         context.arc(xPos, yPos, dotSize, 0, Math.PI * 2, true);
         context.closePath();
         context.fill();
       });
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [HotspotData, isSorted]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default InfectionHotspots;

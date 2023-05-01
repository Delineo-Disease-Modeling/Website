import React, { useRef, useEffect } from "react";

const InfectionHotspots = (HotspotData) => {
   
  const canvasRef = useRef(null);
  let isSorted = false;
  

  useEffect(() => {
   if(!HotspotData) {
      return;
   }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let transformedData = new Map();
    let max = 0;
    let dotPositions = new Map();
    
   //TODO: Move transform data and drawing dots to different place to prevent lag when resizing
    const resizeCanvas = () => {
      dotPositions.clear();
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      transformData();
      drawDots();
    };

    /* Transform data from infectedDaily to total infected per building
     */
    const transformData = () => {
      let temp = HotspotData.HotspotData;
      for(let i = 0; i < Object.keys(temp).length; i++) {
         let numInfected = 0;
         const tempCopy = temp[i]["InfectedDaily"];
         for(let j = 0; j < tempCopy.length; j++) {
            numInfected += tempCopy[i];
         }
         transformedData.set(temp[i]["BuildingName"], numInfected);
      }
    }

    /* Draws dots according to random positions, keeps position data for use in mouseMove
     */
    const drawDots = () => {
      let top20 = null;
      if(!isSorted) {
         const mapSort1 = new Map([...transformedData.entries()].sort((a, b) => b[1] - a[1]));
         let arrayTmp = Array.from(mapSort1).slice(0, 21);
         let myMap = new Map(arrayTmp);
         top20 = myMap;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
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
         let xPos = Math.ceil((Math.random() * canvas.width+1)/10)*10;
         let yPos = Math.ceil((Math.random() * canvas.height+1)/10)*10;
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

         dotPositions.set([xPos, yPos].toString(), key);
       });
    };

    /* Tracks cursor and does some activity based on location
     * 
     */
    function handleMouseMove(event) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = Math.ceil((event.clientX - rect.left)/10)*10;
      const y = Math.ceil((event.clientY - rect.top)/10)*10;
      let temp = [x,y];
      if(dotPositions.get(temp.toString()) != null) {
         //If hovered over a circle, do something (dotPositions.get(temp.toString()) == name of place)
         context.fillStyle = "white";
         context.fillText(dotPositions.get(temp.toString()), x, y);
      } else {
         
      }
    }

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [HotspotData, isSorted]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
};

export default InfectionHotspots;

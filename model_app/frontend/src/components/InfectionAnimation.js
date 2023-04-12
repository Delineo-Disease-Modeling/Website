import React, { useState, useEffect, useRef } from 'react';
import data from "../data/linedata.json";

const CircleGridAnimation = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    class Cube {
      constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        //Initial x speed and y speed
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.isInfected = false;

        //Fix for cubes that get trapped in margins in update code.
        if(this.x > canvas.width - 10) {
          this.x = canvas.width - 11;
        }
        if(this.y > canvas.height - 10) {
          this.y = canvas.height - 11;
        }
        if(this.x < 10) {
          this.x = 11;
        }
        if(this.y < 10) {
          this.y = 11;
        }
      }

      //Draws each circle again, checking for infection
      draw() {
        if(this.isInfected) {
          ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad/2, 0, 2*Math.PI);
        ctx.fill();
      }

      //updating positions of cubes using original speed vectors
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 10 || this.x > canvas.width-10) {
          this.vx *= -1;
        }
        if (this.y < 10 || this.y > canvas.height-10) {
          this.vy *= -1;
        }
      }
    }

    //Day count + other info later
    let text = "Day: 0";
    const dayCount = document.getElementById("dayCount");
    function updateTextBox(i, j, k) {
      text = "Day: " + i + " | Infected: " + j + " | Current Total People " + k;
      // Update the text box content
      dayCount.textContent = text;
    }

    //Update amount of red cubes based on data
    const jsonObject = data;
    const totalPeople = jsonObject[jsonObject.length - 1].people;
    let currInfectedIt = 0;
    let currDay = 0;

    //Make cubes and put them in cubes array
    const cubes = [];

    for (let i = 0; i < canvas.height / 20; i++) {
      for (let j = 0; j < canvas.width / 20; j++) {
        const cube = new Cube(j * 20, i * 20, 20);
        cubes.push(cube);
      }
    }

    //Animation code (only executes when button is pressed)
    if(isAnimating) {
      const intervalId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Update amount of circles infected to match linedata.json
        if(currInfectedIt < jsonObject.length) {
          let currInfected = jsonObject[currInfectedIt].infections;
          let currTotal = jsonObject[currInfectedIt].people;
          let proportion = currInfected / totalPeople;
          cubes[Math.floor(proportion * cubes.length)].isInfected = true;
          currInfectedIt++;
          currDay++;
          updateTextBox(currDay, currInfected, currTotal);
        }
        //Draw circles
        for (let i = 0; i < cubes.length; i++) {
          cubes[i].draw();
          cubes[i].update();
        }
      }, 50);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isAnimating]);

  //Starts animation with click of button
  const handleStartAnimation = () => {
    setIsAnimating(true);
  };

  //Return div containing all information and animation as component
  return (
    <div style={{backgroundColor: "rgba(0,0,0,0.1)",
    border: "1px solid white",
    padding: "10px",
    borderRadius: "10px"}}>
      <div style={{color: "white", textAlign: "center"}}>Infection Animation Preview</div>
      <div id="dayCount" style={{color: "white", textAlign: "center"}}></div>
      <canvas ref={canvasRef} width={window.innerWidth/1.5} height={window.innerHeight/1.5} />
      <div>
        <button onClick={handleStartAnimation} style={{backgroundColor: "white", 
                border: "none", 
                borderRadius: 5, 
                width: 150, 
                height: 40}}>Start Animation</button>
      </div>
    </div>
    );
    
};

export default CircleGridAnimation;
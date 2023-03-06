import React, { useState, useEffect, useRef } from 'react';
import data from "../data/linedata.json";


//TODO: Clean up transition from cubes to circles (change name, optimize parameters, etc.)
const CubeGridAnimation = () => {
  const canvasRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cubeData, setCubeData] = useState([]);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    class Cube {
      constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
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

      draw() {
        if(this.isInfected) {
          ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        } else {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        }
        // ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size/2, 0, 2*Math.PI);
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

    //Update amount of red cubes based on data
    const jsonObject = data;
    const totInfected = jsonObject[jsonObject.length - 1].infections;
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

    //TODO: Make updating of cubes slower. I think it goes too fast right now and instantly makes all cubes red
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

  //Day count + other info later
  let text = "Day: 0";
  const dayCount = document.getElementById("dayCount");
  function updateTextBox(i, j, k) {
    text = "Day: " + i + " | Infected: " + j + " | Current Total People " + k;
    // Update the text box content
    dayCount.textContent = text;
  }

  const handleStartAnimation = () => {
    setIsAnimating(true);
  
    const intervalId = setInterval(() => {
      setCubeData((prevData) => {
        const newData = prevData.map((item) => {
          if (Math.random() < 0.1) {
            item.isInfected = true;
          }
          return item;
        });
        return newData;
      });
    }, 500);
  
    return () => {
      clearInterval(intervalId);
    };
  };

  return (
    <div>
      <div style={{color: "white", textAlign: "center"}}>Infection Animation Preview</div>
      <div id="dayCount" style={{color: "white", textAlign: "center"}}></div>
      <canvas ref={canvasRef} width={window.innerWidth/1.5} height={window.innerHeight/1.5} />
      <div>
        <button onClick={handleStartAnimation} style={{borderRadius: 5}}>Start Animation</button>
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="cube"
                    style={{ backgroundColor: item.color }}
                  />
                ))}
      </div>
    </div>
    );
    
};

export default CubeGridAnimation;
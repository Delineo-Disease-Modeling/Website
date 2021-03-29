using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GlobalValues : MonoBehaviour
{
    public bool onSimulation; //Is the simulation running? If true, time is counting up!
    private Text dayStorage; //day Text Object
    private int time; //Day counter
    private float timer; //Time counter
    public float waitTime = 5.0f; //Seconds between each Day Change
    public Window_Graph graph;

    // Start is called before the first frame update
    void Start()
    {
        onSimulation = false;
        time = 0;
        dayStorage = GameObject.Find("Day").GetComponent<Text>();

    }

    /* Update is called once per frame
        Checks if a Day has passed, and if so, updates values.*/ 
    void Update()
    {
        if(onSimulation == true) 
        {
            timer += Time.deltaTime;
            
            if(timer > waitTime)
            {
                time++;
                dayStorage.text = "Day: " + time;

                timer = timer - waitTime;
                UpdateVals(false);
            }

        }
    }

    //Simple switch to make the simulation start.
    public void changeStatus(bool onStatus) 
    {
        onSimulation = onStatus;
    }

    //Returns time
    public int getTime()
    {
        return time;
    }

    //Returns WaitTime
    public float getWaitTime()
    {
        return waitTime;
    }

    //Updates All Values to the new date values.
    // @param pauseBuffer check if we just unpaused.
    public void UpdateVals(bool pauseBuffer)
    {
        GameObject[] buildings = GameObject.FindGameObjectsWithTag("Building");
        getElements element = GameObject.Find("Image").GetComponent<getElements>();
        for (int i = 0; i < buildings.Length; i++)
        {
            int[] values = { Random.Range(0, 11) * 10, Random.Range(0, 11) * 10, Random.Range(0, 11) * 10, Random.Range(0, 11) * 10}; //Remove later when actual values flow in.
            buildings[i].GetComponent<dataStorage>().updateValues(values, pauseBuffer);
            if (buildings[i].GetComponent<dataStorage>().getVisible())
            {
                element.updateData(buildings[i]);
            }
        }
    }

    public Window_Graph getGraph()
    {
        return graph;
    }

    //JSON handling. :)
    public static BuildingInfo CreateFromJSON(string jsonString)
    {
        return JsonUtility.FromJson<BuildingInfo>(jsonString);
    }

    public class BuildingInfo
    {
        public int InfectedToday;
        public int InfectedTotal;
        public int PeopleToday;
        public int PeopleTotal;
    }
}

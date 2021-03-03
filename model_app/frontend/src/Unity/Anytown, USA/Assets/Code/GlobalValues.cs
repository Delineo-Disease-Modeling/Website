using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GlobalValues : MonoBehaviour
{
    private bool onSimulation; //Is the simulation running? If true, time is counting up!
    private Text dayStorage;
    private int time;
    private float timer;
    private float waitTime = 1.0f;
    private int TimesPressedStart;
    private UpdateValues script;
    private SaveData scriptSavaData;
    // Start is called before the first frame update
    void Start()
    {
        onSimulation = false;
        time = 0;
        script = GameObject.Find("EventSystem").GetComponent<UpdateValues>();
        scriptSavaData = GameObject.Find("EventSystem").GetComponent<SaveData>();
        dayStorage = GameObject.Find("Day").GetComponent<Text>();
    }

    // Update is called once per frame
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
                script.UpdateVals();
            }

        }
    }

    public void changeStatus(bool onStatus) 
    {
        onSimulation = onStatus;
        if(onStatus && TimesPressedStart == 0)
        {
            scriptSavaData.SaveIntoJson();
        }
    }
    public int getTime()
    {
        return time;
    }
}

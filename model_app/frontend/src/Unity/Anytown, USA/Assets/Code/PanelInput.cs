using  System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


[System.Serializable]
public class PanelInput: MonoBehaviour {
    //percents rounded to integer, e.g. 90% = 90
    public int maskWearing;
    public int roomCapacity;
    public int dailyTesting;
    public int contactTracing;
    public bool stayHome;
    private bool visible = true;
    Transform[] allChildren;

    /*
    public PanelInput(int msk, int rcp, int dlt, int ctc, bool sth)
    {
        maskWearing = msk;
        roomCapacity = rcp;
        dailyTesting = dlt;
        contactTracing = ctc;
        stayHome = sth;
    }
    */

    //sets any one parameters given a char key of the parameter
    //(m)asks (r)oom capacity (d)aily testing (c)ontact tracing (s)tay home
    public void SetAny(char param, int i) { //0 for false, 1 for true
        if (param == 'm') { maskWearing = i; return; }
        if (param == 'r') { roomCapacity = i; return; }
        if (param == 'd') { dailyTesting = i; return; }
        if (param == 'c') { contactTracing = i; return; }
        if (param == 's') { stayHome = (i==1); return; }
    }

    public void PrintAll() {
        Debug.Log("mask% = " + maskWearing + ", room %cap = " + roomCapacity + ", daily %test = " + 
            dailyTesting + ", contact tracing = " + contactTracing + ", stay home = " + stayHome);
    }


    public void Showobj(GameObject gObject)
    {
        if(allChildren == null)
            allChildren = gObject.GetComponentsInChildren<Transform>();
        if (visible)
        {
            for (int i = 1; i < allChildren.Length; i++)
            {
                if(!(allChildren[i].gameObject.name == "Exit Button"))
                allChildren[i].gameObject.SetActive(false);
            }
            visible = false;
        }
        else
        {
            for (int i = 0; i < allChildren.Length; i++)
            {
                allChildren[i].gameObject.SetActive(true);
            }
            visible = true;
        }
    }



    /*
        public void SetMas(int i) { maskWearing = i; }
        public void SetRoo(int i) { roomCapacity = i; }
        public void SetDai(int i) { dailyTesting = i; }
        public void SetCon(int i) { contactTracing = i; }
        public void SetSta(bool i) { stayHome = i; }

        public int GetMas() { return maskWearing; }
        public int GetRoo() { return roomCapacity; }
        public int GetDai() { return dailyTesting; }
        public int GetCon() { return contactTracing; }
        public bool GetSta() { return stayHome; }
        */

    //converts panel input values to Json string
    //param: a panel input object containing all parameters of the input panel
    //return: a string in the json format
    public string ConvToJson() {
        return JsonUtility.ToJson(this);
    }

    //reads json and loads into a PanelInput object
    //param: a json string and a panel input i to load to
    public void getFromJson(string json) {
        JsonUtility.FromJsonOverwrite(json, this);
    }
}
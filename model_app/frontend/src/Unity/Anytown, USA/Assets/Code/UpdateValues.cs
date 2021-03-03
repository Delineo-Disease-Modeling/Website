using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpdateValues : MonoBehaviour
{
    private GlobalValues timer;
    void Start()
    {
        timer = GameObject.Find("EventSystem").GetComponent <GlobalValues>();
}

    public void UpdateVals()
    {
        GameObject[] buildings = GameObject.FindGameObjectsWithTag("Building");
        getElements element = GameObject.Find("Image").GetComponent<getElements>();
        for (int i = 0; i < buildings.Length; i++) {
            int[] values = { timer.getTime() * 10, timer.getTime() * 10, timer.getTime() * 10, timer.getTime() * 10 };
            buildings[i].GetComponent<dataStorage>().updateValues(values);
            element.updateData(buildings[i]);
        }
    }

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

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
//UNUSED See IOINPUT
public class SaveData : MonoBehaviour
{
    [SerializeField] private InputData InputData = new InputData();
    private void Start()
    {
        //bool_script = ant.GetComponent<Bool_Script_To_Access>();
        
    }

    public void SaveIntoJson()
    {
        string Data = JsonUtility.ToJson(InputData);
        System.IO.File.WriteAllText(Application.persistentDataPath + "/InputData.json", Data);
        
    }
}


[System.Serializable]
public class InputData
{
    public int maskWearing;
    public int capacityRestriction;
    public int contactTracing;
    public bool stay_at_homeOrders;
}

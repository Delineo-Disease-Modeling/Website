using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class dataStorage : MonoBehaviour
{
    // Start is called before the first frame update
    public int InfectedToday;
    public int InfectedTotal;
    public int PeopleTotal;
    public int PeopleToday;

    void Start()
    {
        InfectedToday = InfectedTotal = PeopleToday = PeopleTotal = 0;
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    public void updateValues(int[] values)
    {
        InfectedToday = values[0];
        InfectedTotal = values[1];
        PeopleToday = values[2];
        PeopleTotal = values[3];
    } 
}

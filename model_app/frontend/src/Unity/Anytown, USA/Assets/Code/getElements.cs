using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class getElements : MonoBehaviour
{
    Image MainGUI;
    private string last;
    private GlobalValues global;
    private Window_Graph graph;

    private void Awake()
    {
        MainGUI = GetComponent<Image>(); //Get the Image that has this script (The GUI Panel)
        MainGUI.enabled = false; //Turn it off
        for(int i = 0; i < this.transform.childCount;i++)
        {
            transform.GetChild(i).gameObject.SetActive(false); //Turn off all the children
        }
        global = GameObject.Find("C#Manager").GetComponent<GlobalValues>();
        graph = global.getGraph();
    }

    // Start is called before the first frame update
    void Start()
    {
        last = null;
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void updateData(GameObject data) //Change all the text of the children Text objects to the values held in data.
    {
        dataStorage DS = data.GetComponent<dataStorage>();
        if (DS.getVisible())
        {
            Text Name = transform.Find("Name").GetComponent<Text>();
            Text InfectedTotal = transform.Find("Infected Total").GetComponent<Text>();
            Text InfectedToday = transform.Find("Infected Today").GetComponent<Text>();
            Text PeopleToday = transform.Find("People Today").GetComponent<Text>();
            Text PeopleTotal = transform.Find("People Total").GetComponent<Text>();

            Name.text = DS.name;
            InfectedTotal.text = "Infected Total:\n" + DS.InfectedTotal;
            InfectedToday.text = "Infected Today:\n" + DS.InfectedToday;
            PeopleToday.text = "People Today:\n" + DS.PeopleToday;
            PeopleTotal.text = "People Total:\n" + DS.PeopleTotal;
            graph.createGraph(data.GetComponent<dataStorage>().getInfectedList());
        }
    }

    public void updateDataButton(GameObject data)
    {
        for (int i = 0; i < this.transform.childCount; i++)
        {
            transform.GetChild(i).gameObject.SetActive(true);
        }
        if(last == null)
        {
            last = data.name;
        }
        if (last != data.name)
        {
            GameObject.Find(last).GetComponent<dataStorage>().changeVisible();
            last = data.name;

        }
        data.GetComponent<dataStorage>().changeVisible();
        graph.createGraph(data.GetComponent<dataStorage>().getInfectedList());
        updateData(data);
        MainGUI.enabled = true;
    }

    public void closeData() //Sets all of the children to inactive.
    {
        MainGUI.enabled = false;
        for(int i = 0; i < this.transform.childCount;i++)
        {
            transform.GetChild(i).gameObject.SetActive(false);
        }

        graph.cleanGraph();
    }
}

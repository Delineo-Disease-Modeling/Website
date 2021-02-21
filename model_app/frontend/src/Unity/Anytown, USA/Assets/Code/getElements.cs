using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class getElements : MonoBehaviour
{
    Image MainGUI;

    private void Awake()
    {
        MainGUI = GetComponent<Image>();
        MainGUI.enabled = false;
        for(int i = 0; i < this.transform.childCount;i++)
        {
            transform.GetChild(i).gameObject.SetActive(false);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void updateData(GameObject data)
    {
        Text Name = transform.Find("Name").GetComponent<Text>();
        Text InfectedTotal = transform.Find("Infected Total").GetComponent<Text>();
        Text InfectedToday = transform.Find("Infected Today").GetComponent<Text>();
        Text PeopleToday = transform.Find("People Today").GetComponent<Text>();
        Text PeopleTotal = transform.Find("People Total").GetComponent<Text>();
        Name.text = data.name;

        dataStorage DS = data.GetComponent<dataStorage>();

        InfectedTotal.text = "Infected Total:\n" + DS.InfectedTotal;
        InfectedToday.text = "Infected Today:\n" + DS.InfectedToday;
        PeopleToday.text = "People Today:\n" + DS.PeopleToday;
        PeopleTotal.text = "People Total:\n" + DS.PeopleTotal;

        MainGUI.enabled = true;
        for(int i = 0; i < this.transform.childCount;i++)
        {
            transform.GetChild(i).gameObject.SetActive(true);
        }
    }

    public void closeData()
    {
        MainGUI.enabled = false;
        for(int i = 0; i < this.transform.childCount;i++)
        {
            transform.GetChild(i).gameObject.SetActive(false);
        }
        
    }
}

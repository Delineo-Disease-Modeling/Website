using System.Collections;
using System.Collections.Generic;
using UnityEngine;


//Unused, now in GlobalValues
public class dataStorage : MonoBehaviour
{
  // Start is called before the first frame update
    public int InfectedToday; // People Infected Who Walked In Today
    public int InfectedTotal; // People Infected Total
    public int PeopleTotal; // People Walked in Total
    public int PeopleToday; // People Walked in Today
    private bool isVisible; // Boolean if this object should be visible.
    private GameObject[] Lazers;
    private GameObject[] LazerParent;
    private GameObject CanvasChild;
    private float Range1y;
    private float Range2y;
    private float Range1x;
    private float Range2x;
    private float zCoordinate;
    private float timer; //WaitTime (time between each day cycle)

    private List<GameObject> createdLazers;
    private GlobalValues GlobalValuesScript;
    private int totalLazers;
    private List<int> totalInfected;

    void Start()
    {
        InfectedToday = InfectedTotal = PeopleToday = PeopleTotal = 0;
        totalInfected = new List<int>();
        Lazers = GameObject.FindGameObjectsWithTag("Lazer");
        LazerParent = GameObject.FindGameObjectsWithTag("LazerHead");
        CanvasChild =  this.gameObject.transform.GetChild(0).gameObject;
        Range1x = CanvasChild.transform.position.x - CanvasChild.GetComponent<RectTransform>().rect.width/2 + .05f;
        Range1y = CanvasChild.transform.position.y - CanvasChild.GetComponent<RectTransform>().rect.height/2 + .05f;
        Range2x = CanvasChild.transform.position.x + CanvasChild.GetComponent<RectTransform>().rect.width/2 - .05f;
        Range2y = CanvasChild.transform.position.y + CanvasChild.GetComponent<RectTransform>().rect.height/2 - .05f;
        zCoordinate = this.transform.position.z;
        createdLazers = new List<GameObject>();
        timer = GameObject.Find("C#Manager").GetComponent<GlobalValues>().getWaitTime();
        GlobalValuesScript = GameObject.FindGameObjectsWithTag("C#Manager")[0].GetComponent<GlobalValues>();
    }

    // Update is called once per frame
    void Update()
    {
        

    }

    //Updates this objects values and creates explosions when a day starts.
    // @param pause Checks if we just unpaused
    public void updateValues(int[] values, bool pause)
    {
        InfectedToday = values[0];
        InfectedTotal = values[1];
        PeopleToday = values[2];
        PeopleTotal = values[3];
        totalInfected.Add(values[3]);
        if (!pause)
        {
            totalLazers = InfectedToday;

            foreach (GameObject oldLazer in createdLazers)
            {
                Destroy(oldLazer);
            }
        }
        StartCoroutine(waiter());
    }

    //get If this panel should be visible.
    public bool getVisible()
    {
        return isVisible;
    }

    //Inverses Visibility of panel.
    public void changeVisible()
    {
        isVisible = !isVisible;
    }

    public List<int> getInfectedList()
    {
        return totalInfected;
    }

    //Creates a new exploision on the object.
    private void newExplosion()
    {

        GameObject newGameObject;   
        Vector3 position = new Vector3(Random.Range(Range1x,Range2x), Random.Range(Range1y,Range2y),zCoordinate);
        newGameObject = Instantiate(Lazers[0],position,Quaternion.identity);
        
        newGameObject.name = this.name;
        newGameObject.transform.parent = LazerParent[0].transform;
        newGameObject.transform.localScale = Lazers[0].transform.localScale;
        createdLazers.Add(newGameObject);
    }

    //Disperses explosion into the day cycle.
    IEnumerator waiter()
    {
        while(totalLazers > 0)
        {
            yield return new WaitForSeconds(timer / InfectedToday);
            if (GlobalValuesScript.onSimulation)
            {
                newExplosion();
                totalLazers--;
            } else
            {
                break;
            }
        }
    }
}

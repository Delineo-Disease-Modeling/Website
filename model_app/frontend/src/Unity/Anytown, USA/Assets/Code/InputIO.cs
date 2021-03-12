using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputIO : MonoBehaviour {

    public PanelInput panelInput;
    string serverJson;
	// Use this for initialization
	void Start () {
        panelInput.getFromJson(serverJson);
	}



    public void PushToJson() {
        serverJson = panelInput.ConvToJson();
        panelInput.PrintAll();
       // Debug.Log(serverJson);
    }

    //used to cancel unpushed changes or to pull it for initialization
    public void PullFromServer() {

        panelInput.getFromJson(serverJson);
    }
}

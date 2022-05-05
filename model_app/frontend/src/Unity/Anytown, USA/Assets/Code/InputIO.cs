using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEngine.Networking;
using System.Text;
using SimpleJSON;
using System.Net;
using System.Threading;
using System;

public class InputIO : MonoBehaviour {

    public PanelInput panelInput;
    string serverJson;
    string returnJson;
	// Use this for initialization
	void Start () {
        panelInput.getFromJson(serverJson);	}



    public void PushToJson() {
        serverJson = panelInput.ConvToJson();
        panelInput.PrintAll();
        System.IO.File.WriteAllText("Assets/input.json", serverJson);
        readFile();
    }

    //used to cancel unpushed changes or to pull it for initialization
    public void PullFromServer() {

        panelInput.getFromJson(serverJson);
    }

    public void readFile()
    {
        string url = "http://localhost:4000";
       // StartCoroutine(Post(url,serverJson));
        listener = new HttpListener();
        listener.Prefixes.Add("http://localhost:4444/");
        listener.Prefixes.Add("http://127.0.0.1:4444/");
        listener.AuthenticationSchemes = AuthenticationSchemes.Anonymous;
        listener.Start();

        listenerThread = new Thread(startListener);
        listenerThread.Start();
        Debug.Log("Server Started");
        Debug.Log(returnJson);
        interpretJSON(returnJson);
    }

    IEnumerator Post(string url, string bodyJsonString)
    {
        using (UnityWebRequest request = UnityWebRequest.Put(url, bodyJsonString))
        {
            request.method = UnityWebRequest.kHttpVerbPOST;
            request.SetRequestHeader("Content-Type", "application/json");
            request.SetRequestHeader("Accept", "application/json");
            yield return request.SendWebRequest();
            if (request.responseCode == (long)System.Net.HttpStatusCode.OK)
            {
                Debug.Log("Data successfully sent to the server, Status Code: " + request.responseCode);
            }
            else
            {
                Debug.Log("Error sending data to the server, Status Code: " + request.responseCode);
            }
        }
    }


    private HttpListener listener;
    private Thread listenerThread;

    private void startListener()
    {
        while (true)
        {
            var result = listener.BeginGetContext(ListenerCallback, listener);
            result.AsyncWaitHandle.WaitOne();
        }
    }

    private void ListenerCallback(IAsyncResult result)
    {
        var context = listener.EndGetContext(result);

        Debug.Log("Method: " + context.Request.HttpMethod);
        Debug.Log("LocalUrl: " + context.Request.Url.LocalPath);

        if (context.Request.QueryString.AllKeys.Length > 0)
            foreach (var key in context.Request.QueryString.AllKeys)
            {
                Debug.Log("Key: " + key + ", Value: " + context.Request.QueryString.GetValues(key)[0]);
            }

        if (context.Request.HttpMethod == "POST")
        {
            Thread.Sleep(1000);
            returnJson = new StreamReader(context.Request.InputStream,
                                context.Request.ContentEncoding).ReadToEnd();
            Debug.Log(returnJson);
        }

        context.Response.Close();
    }

    buildings Buildings = new buildings();

    //Turns the JSON into an object we can use.
    private void interpretJSON(string jsonString)
    {
        Buildings = JsonUtility.FromJson<buildings>(jsonString);
    }

    //Returns the necessary building information to add it to building's count.
    public int[] getBuildingValues(int pos, int hour)
    {
        int[] data = {Buildings.Buildings[pos].InfectedDaily[hour], Buildings.Buildings[pos].PeopleDaily[hour]};
        return data;
    }

    //Used for iterating through the buildings, and ensuring we don't cause an index out of bounds on accident.
    public int getBuildingsSize()
    {
        return Buildings.Buildings.Length;
    }
    //Used for the inner loop when iterating through the buildings, ensuring we only get data for as much data was provided.
    public int getDaySize()
    {
        return 0;
        //return Buildings.Buildings[0].InfectedDaily.Length;
    }

}

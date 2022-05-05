using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Window_Graph : MonoBehaviour {

    [SerializeField] private Sprite circleSprite;
    private RectTransform graphContainer;
    private RectTransform labelTemplateX;
    private RectTransform labelTemplateY;
    private GameObject graph; 
    //private RectTransform dashTemplateX;
   // private RectTransform dashTemplateY;

    private void Awake() {
        graphContainer = transform.Find("graphContainer").GetComponent<RectTransform>();
        //labelTemplateX = graphContainer.Find("labelTemplateX").GetComponent<RectTransform>();
        //labelTemplateY = graphContainer.Find("labelTemplateY").GetComponent<RectTransform>();
        //dashTemplateX = graphContainer.Find("dashTemplateX").GetComponent<RectTransform>();
        //dashTemplateY = graphContainer.Find("dashTemplateY").GetComponent<RectTransform>();
        //List<int> valueList = new List<int>() { 5, 98, 56, 45, 30, 22, 17, 15, 13, 17, 25, 37, 40, 36, 33 };
        //ShowGraph(valueList, (int _i) => "" + (_i + 1), (float _f) => "" + Mathf.RoundToInt(_f));
        graph = GameObject.FindGameObjectWithTag("Graph");
        graph.SetActive(false);
    }

    private GameObject CreateCircle(Vector2 anchoredPosition) {
        GameObject gameObject = new GameObject("circle", typeof(Image));
        gameObject.tag = "Temp";
        gameObject.transform.SetParent(graphContainer, false);
        gameObject.GetComponent<Image>().sprite = circleSprite;
        RectTransform rectTransform = gameObject.GetComponent<RectTransform>();
        rectTransform.anchoredPosition = anchoredPosition;
        rectTransform.sizeDelta = new Vector2(11, 11);
        rectTransform.anchorMin = new Vector2(0, 0);
        rectTransform.anchorMax = new Vector2(0, 0);
        return gameObject;
    }

    private void ShowGraph(List<int> valueList, Func<int, string> getAxisLabelX = null, Func<float, string> getAxisLabelY = null)
    {
        /*   if (getAxisLabelX == null) {
               getAxisLabelX = delegate (int _i) { return _i.ToString(); };
           }
           if (getAxisLabelY == null) {
               getAxisLabelY = delegate (float _f) { return Mathf.RoundToInt(_f).ToString(); };
           }*/

        float graphHeight = graphContainer.sizeDelta.y;
        float yMaximum = 100f;
        float xSize = 15f; //15 has 25 days available.

        GameObject lastCircleGameObject = null;
        for (int i = 0; i < valueList.Count; i++)
        {
            float xPosition = xSize + i * xSize;
            float yPosition = (valueList[i] / yMaximum) * graphHeight;
            GameObject circleGameObject = CreateCircle(new Vector2(xPosition, yPosition));
            if (lastCircleGameObject != null)
            {
                CreateDotConnection(lastCircleGameObject.GetComponent<RectTransform>().anchoredPosition, circleGameObject.GetComponent<RectTransform>().anchoredPosition);
            }
            lastCircleGameObject = circleGameObject;

            /*    RectTransform labelX = Instantiate(labelTemplateX);
                labelX.SetParent(graphContainer, false);
                labelX.gameObject.SetActive(true);
                labelX.anchoredPosition = new Vector2(xPosition, -50f);
                labelX.GetComponent<Text>().text = getAxisLabelX(i);
                labelX.tag = "Temp";

                //RectTransform dashX = Instantiate(dashTemplateX);
                //dashX.SetParent(graphContainer, false);
                //dashX.gameObject.SetActive(true);
                //dashX.anchoredPosition = new Vector2(xPosition, -3f);
            }

            int separatorCount = 10;
            for (int i = 0; i <= separatorCount; i++) {
                RectTransform labelY = Instantiate(labelTemplateY);
                labelY.SetParent(graphContainer, false);
                labelY.gameObject.SetActive(true);
                float normalizedValue = i * 1f / separatorCount;
                labelY.anchoredPosition = new Vector2(43f, normalizedValue * graphHeight);
                labelY.GetComponent<Text>().text = getAxisLabelY(normalizedValue * yMaximum);
                labelY.tag = "Temp";

                //RectTransform dashY = Instantiate(dashTemplateY);
                //dashY.SetParent(graphContainer, false);
                //dashY.gameObject.SetActive(true);
                //dashY.anchoredPosition = new Vector2(-4f, normalizedValue * graphHeight);
            } */
        }
    }

    private void CreateDotConnection(Vector2 dotPositionA, Vector2 dotPositionB) {
        GameObject gameObject = new GameObject("dotConnection", typeof(Image));
        gameObject.tag = "Temp";
        gameObject.transform.SetParent(graphContainer, false);
        gameObject.GetComponent<Image>().color = new Color(1,1,1, .5f);
        RectTransform rectTransform = gameObject.GetComponent<RectTransform>();
        Vector2 dir = (dotPositionB - dotPositionA).normalized;
        float distance = Vector2.Distance(dotPositionA, dotPositionB);
        rectTransform.anchorMin = new Vector2(0, 0);
        rectTransform.anchorMax = new Vector2(0, 0);
        rectTransform.sizeDelta = new Vector2(distance, 3f);
        rectTransform.anchoredPosition = dotPositionA + dir * distance * .5f;
        rectTransform.localEulerAngles = new Vector3(0, 0, GetAngleFromVectorFloat(dir));
    }

    public static float GetAngleFromVectorFloat(Vector3 dir)
    {
        dir = dir.normalized;
        float n = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
        if (n < 0) n += 360;

        return n;
    }

    public void createGraph(List<int> valueList)
    {
        cleanGraph();
        ShowGraph(valueList, (int _i) => "" + (_i + 1), (float _f) => "" + Mathf.RoundToInt(_f));
    }

    public void cleanGraph()
    {
        GameObject[] temp = GameObject.FindGameObjectsWithTag("Temp");
       for(int i = 0; i < temp.Length; i++)
        {
            Destroy(temp[i]);
        }
    }

}


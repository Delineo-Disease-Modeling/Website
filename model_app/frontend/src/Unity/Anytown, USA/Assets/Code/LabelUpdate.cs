using UnityEngine;
using UnityEngine.UI;

public class LabelUpdate : MonoBehaviour
{
    Text labelText;
    private void Awake()
    {
        labelText = GetComponent<Text>();
        labelText.enabled = false;
    }

    public void UpdateTextLabel(GameObject go)
    {
        labelText.enabled = true;
        labelText.text = go.name;
    }

    public void DefaultText()
    {
        labelText.enabled = false;
        labelText.text = "Hiden";
    }
}
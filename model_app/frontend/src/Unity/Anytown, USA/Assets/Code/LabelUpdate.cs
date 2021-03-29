using UnityEngine;
using UnityEngine.UI;

//Updates Building Label at the Bottom of the Screen
public class LabelUpdate : MonoBehaviour
{
    Text labelText;

    //On Awake, get the text component.
    private void Awake()
    {
        labelText = GetComponent<Text>();
        labelText.enabled = false;
    }
    
    //Turn on the label for the object currently hovered.
    public void UpdateTextLabel(GameObject go)
    {
        labelText.enabled = true;
        labelText.text = go.name;
    }

    //If not hovered, label is turned off.
    public void DefaultText()
    {
        labelText.enabled = false;
        labelText.text = "Hiden";
    }
}
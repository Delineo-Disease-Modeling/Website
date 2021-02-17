using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraControl : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    public float speed = 5.0f;
    public float xboundtop = 0f;
    public float xboundbottom = 0f;
    public float yboundtop = 0f;
    public float yboundbottom = 0f;


    void Update()
    {
        if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.position = new Vector3(speed * Time.deltaTime, 0, 0);
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.position = new Vector3(speed * Time.deltaTime, 0, 0);
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            transform.position = new Vector3(0, speed * Time.deltaTime, 0);
        }
        if (Input.GetKey(KeyCode.UpArrow))
        {
            transform.position = new Vector3(0, speed * Time.deltaTime, 0);
        }
        if (transform.position.x > xboundtop)
            transform.position = new Vector3(xboundtop, transform.position.y, transform.position.z);
        if (transform.position.x < xboundbottom)
            transform.position = new Vector3(xboundbottom, transform.position.y, transform.position.z);
        if (transform.position.y > yboundtop)
            transform.position = new Vector3(transform.position.x, yboundtop, transform.position.z);
        if (transform.position.y > yboundbottom)
            transform.position = new Vector3(transform.position.x, yboundbottom, transform.position.z);
    }
}

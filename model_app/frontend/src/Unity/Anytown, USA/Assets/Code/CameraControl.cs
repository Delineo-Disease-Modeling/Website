using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraControl : MonoBehaviour
{
    // Start is called before the first frame update
    private Camera player; //Camera Object of the player.
    public float scrollSpeed = 10; //Speed the user is allowed to scroll at.
    public float speed = 100; //Speed of movement
    public Transform obj; //Object we're moving
    public int maxX, maxY, minX, minY; //Bounds of the box

    //Start gets called once per playtime.
    void Start()
    {
        player = GetComponent<Camera>();
        player.orthographicSize = 5; // Size u want to start with
    }


    //Handles Scroll Wheel, Movement, and Bounds.
    public void Update()
    {
        float ScrollWheelChange = Input.GetAxis("Mouse ScrollWheel");
        if (ScrollWheelChange != 0)
        {
            player.orthographicSize -= ScrollWheelChange * scrollSpeed;
            if (player.orthographicSize < 1)
                player.orthographicSize = 1;
            if (player.orthographicSize > 15)
                player.orthographicSize = 15;
        }
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");

        //Move only if we actually pressed something
        if ((h > 0 || v > 0) || (h < 0 || v < 0))
        {
            Vector3 tempVect = new Vector3(h, v, 0);
            tempVect = tempVect.normalized * speed * Time.deltaTime;

            Vector3 newPos = obj.transform.position + tempVect;
            if (newPos.x > maxX || newPos.x < minX) newPos.x -= tempVect.x;
            if (newPos.y < minY || newPos.y > maxY) newPos.y -= tempVect.y;
            checkBoundary(newPos);
        }
    }

    //Make sure we're in boundary.
    void checkBoundary(Vector3 newPos)
    {
        //Convert to camera view point
        Vector3 camViewPoint = Camera.main.WorldToViewportPoint(newPos);

        //Apply limit
        camViewPoint.x = Mathf.Clamp(camViewPoint.x, 0.04f, 0.96f);
        camViewPoint.y = Mathf.Clamp(camViewPoint.y, 0.07f, 0.93f);

        //Convert to world point then apply result to the target object
        obj.position = Camera.main.ViewportToWorldPoint(camViewPoint);
    }
}
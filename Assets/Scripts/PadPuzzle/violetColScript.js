#pragma strict

function Start () {
	transform.Rotate(Vector3.up*45);
}

function Update () {

}

function OnTriggerEnter(collider : Collider)
{
	if(collider.tag == "Player" || collider.tag == "PushBlock")
	{
		renderer.material.color = Color(164/255.0F,66/255.0F,220/255.0F,255/255.0F);
	}	
}
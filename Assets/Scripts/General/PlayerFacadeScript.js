#pragma strict

function Start () {
	renderer.material.color = Color.red;

}

function Update () {

	
	transform.LookAt(transform.parent.rigidbody.velocity + transform.position);
}
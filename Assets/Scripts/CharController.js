#pragma strict

function Start () {

	renderer.material.color = Color.red;
}

function Update () {

//	if(Input.GetKey("a"))
//	{
//		transform.position.x -= 0.1;
//	}
//	else if(Input.GetKey("d"))
//	{
//		transform.position.x += 0.1;
//	}
//	else if(Input.GetKey("w"))
//	{
//		transform.position.z += 0.1;
//	}
//	else if(Input.GetKey("s"))
//	{
//		transform.position.z -= 0.1;
//	}
}

function FixedUpdate() {        
        
    if(Input.GetKey("a") && rigidbody.velocity.magnitude < 10)
	{
        rigidbody.AddForce(Vector3.right * -40);
	}
	if(Input.GetKey("d") && rigidbody.velocity.magnitude < 10)
	{
        rigidbody.AddForce(Vector3.right * 40);
	}
	if(Input.GetKey("w") && rigidbody.velocity.magnitude < 10)
	{
        rigidbody.AddForce(Vector3.forward * 40);
	}
	if(Input.GetKey("s") && rigidbody.velocity.magnitude < 10)
	{
        rigidbody.AddForce(Vector3.forward * -40);
	}
	
}
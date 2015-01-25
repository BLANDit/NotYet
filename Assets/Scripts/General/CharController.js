#pragma strict

function Start () {

}

function Update () {

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
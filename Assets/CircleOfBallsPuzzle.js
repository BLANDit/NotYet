#pragma strict

var goalToneSeries : Array = [0,2,4,3,1,6,0];
var currentToneSeries : Array = [];
var complete : boolean = false;

function Start () 
{

}

function Update () 
{

}

function TonePlayed(tonePlayed : AudioClip)
{
	if(!complete)
	{
		var tone :int = -1;
		//Convert the name of the tone into a number. 
		switch (tonePlayed.name) {
		  case "APad":
		    tone = 0;
		    break;
		    
		  case "BPad":
		    tone = 1;
		    break;
		    
		  case "CPad":
		  	tone = 2;
		    break;
		  
		  case "DPad":
		  	tone = 3;
		  	break;
		  case "EPad":
		  	tone = 4;
		  	break;
		  case "FPad":
		  	tone = 5;
		  	break;
		  case "GPad":
		  	tone = 6;
		  	break;
		}
		//Decide if this tone was correct. 
		var toneIndex : int = currentToneSeries.length;

		var correctTone : int = goalToneSeries[toneIndex];
		if(tone==correctTone)
		{
			currentToneSeries.Add(tone);
			var spotlightToLight :int = currentToneSeries.length;
			var spotlightName = "Spotlight"+spotlightToLight;
			GameObject.Find(spotlightName).light.color = Color.green;
		}
		else
		{
			currentToneSeries = [];
			//turn all spotlights off
			for(var i : int = 1; i < 8; i++)
			{
				spotlightName = "Spotlight"+i;
				GameObject.Find(spotlightName).light.color = Color.red;	
			} 
		}
		Debug.Log(currentToneSeries);
		if(currentToneSeries.length >=goalToneSeries.length)
		{
			//All correct tones played
			for(var j : int = 1; j < 8; j++)
			{
				spotlightName = "Spotlight"+j;
				GameObject.Find(spotlightName).light.color = Color.yellow;
			}
			complete = true;
		}
	}
}
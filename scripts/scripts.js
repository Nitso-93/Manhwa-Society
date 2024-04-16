
//Event Submission Function For Webpage event_calender
function submitEvent()
{
    var title=document.forms["eventForm"]["event_title"].value;
    var date=document.forms["eventForm"]["event_date"].value;

    //Making Sure The Title Isnt Blank
    if(title=="")
    {
        alert("The Name Of The Event Cannot Be Blank!");
    }

    //Making Sure The Date Has Been Chosen
    else if(date.length==0)
    {
        alert("The Date Of The Event Cannot Be Blank!");
    }

    //Giving The Output If The Event Has Been Submitted Successfully
    else
    {
        alert("Event Submitted! The Society Will Get Back To You Soon <3");
    }
}

//Variable For The Login/Logout Text
var loginCounter=1;

//Login Function For The index Webpage
function login()
{
    //Getting The Username, Password And Button Text From The Login Form
    var username=document.forms["login"]["username"].value;
    var password=document.forms["login"]["password"].value;                   
    var button=document.getElementById("login-button");
   
    //Making Sure The Username Isnt Blank  
    if(username=="")   
    {   
        alert("The Username Cannot Be Blank!");   
    }   
    
    //Making Sure The Date Has Been Chosen   
    else if(password.length==0)    
    {   
        alert("The Password Cannot Be Blank!");   
    }
       
    //Giving The Output If The Event Has Been Submitted Successfully    
    else   
    {    
        loginCounter++;   
        if(loginCounter%2==0)    
        {    
            alert("You Have Been Logged In!");    
            button.textContent="Logout";    
        }       
        else   
        {   
            alert("You Have Been Logged Out!");    
            button.textContent="Login";    
        }    
    }    
}
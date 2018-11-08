//Initiate Github
const github = new Github;

//Search Input
let searchUser = document.getElementById('searchUser');

//Search Input Event Listener
searchUser.addEventListener('keyup', ()=>{
    //Get input
    let userText = document.getElementById('searchUser').value;
    if (userText !== '' ){
        //Make HTTP call
        github.getUser(userText).then(user=>{
            if(user.profile.message === 'Not found'){
                //Show alert

            }else{
                //Show profile
                console.log(user); 
            }
            
        })

        
    }else{
        //Clear profile
    }
});


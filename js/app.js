//Init Github
const github = new Github;

//Init UI class
const ui = new UI;

//Search Input
let searchUser = document.getElementById('searchUser');

//Search Input Event Listener
searchUser.addEventListener('keyup', ()=>{
    //Get input
    let userText = document.getElementById('searchUser').value;
    if (userText !== '' ){
        //Make HTTP call
        github.getUser(userText)
        .then(user=>{
            if(user.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('User not found.', 'alert alert-danger');
            }else{
                //Show profile
                ui.showProfile(user.profile);
                
                //Show repos
                ui.showRepos(user.repos);    
            }
        })
    }else{
        //Clear profile
        ui.clearProfile();
    }
});


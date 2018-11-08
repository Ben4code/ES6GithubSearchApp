//Ui class
class UI{
    constructor(){
        this.profile = document.getElementById('profile');

    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-info">Followers: ${user.followers}</span>
                        <span class="badge badge-warning">Following: ${user.following}</span>
                        <br/><br/>
                        <ul class="list-group bg-primary">
                            <li class="list-group-item bg-info">Company: ${user.company}</li>
                            <li class="list-group-item bg-info">Website: ${user.blog}</li>
                            <li class="list-group-item bg-info">Location: ${user.location}</li>
                            <li class="list-group-item bg-info">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br/><br/>
            <h3 class="page-heading mb-3 ">Latest Repos </h3>
            <div id="repos"></div>
        `
    }

    //Show Repos
    showRepos(repos){
        let output = '';

        repos.forEach((repo)=>{
            output +=  `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-warning">Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-info">Forks: ${ repo.forms_count !== undefined ? repo.forms_count : 0}</span>
                        </div>
                    </div>
                </div>
            `

            //Output repos
            document.getElementById('repos').innerHTML = output;
        })
    }

    //Show Alert
    showAlert(message, className){
        //Clear any existing alert
        this.clearAlert();

        //Create div
        const div = document.createElement('div');
        //Add classes
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get Parent
        const container = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //Insert Alert
        container.insertBefore(div, search);

        //Timeout after 3s
        setTimeout(()=>{
            this.clearAlert();
        }, 2000)

    }

    //Clear Alert message
    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert){
            currentAlert.remove();
        }
    }

    //Clear Profile 
    clearProfile(){
        this.profile.innerHTML = '';
        this.showAlert('', '');
    }
}
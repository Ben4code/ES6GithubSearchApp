class Github{
    constructor(){
        this.client_id = "32f94462cb23c70ef2ef";
        this.client_secrete = "bc0f758652b26b1312605adccf74f637225f4910";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrete=${this.client_secrete}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secrete=${this.client_secrete}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile: profile, 
            repos: repos
        }
    }
}
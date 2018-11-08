class Github{
    constructor(){
        this.client_id = "32f94462cb23c70ef2ef";
        this.client_secrete = "bc0f758652b26b1312605adccf74f637225f4910"
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?cliend_id=${this.client_id}&client_secrete=${this.client_secrete}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
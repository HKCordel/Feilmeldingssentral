

    let BaseUrl = 'http://192.168.2.8:3000/';

   
   export function createListOfErrors() {
        fetch(BaseUrl + 'viewAllErrors')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data, loading: false });
            });
}
export function updateIsActive() {
        return fetch(BaseUrl + 'error_message', {
            method: 'PATCH',
            mode: 'CORS',
            headers: {
                'Content-Type': 'application/json'
            },
            body: [
                { "op": "replace", "path": "/isActive", "value": true / false },
            ],
          
        }).then(res => {
            return res;
        }).catch(err => err);
    }

    
    export function createBlogPost(username, password) {
        fetch('http://192.168.2.8:3000/user_table', {
            method: 'POST',
            mode: 'CORS',
            body: {
                "user_username": this.state.username,
                "password": this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res;
        }).catch(err => err);
    }

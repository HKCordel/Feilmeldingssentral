export function PostData() {

    let BaseUrl = 'http://192.168.2.8:3000/';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl + "error_message", {
            method: 'POST',
            body: JSON.stringify(isActive)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                resolve(responseJSON);
            })
        .catch((error) => {
            reject(error);
            });
    });
    function createListOfErrors() {
        fetch(BaseUrl + 'viewAllErrors')
            .then(response => response.json())
            .then(data => {
                this.setState({ items: data, loading: false });
            });
    }
}
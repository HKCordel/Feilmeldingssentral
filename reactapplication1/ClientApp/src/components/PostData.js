export function PostData(type, userData) {

    let BaseUrl = 'http://localhost:61266/login';

    return new Promise((resolve, reject) => {

        fetch(BaseUrl + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                resolve(responseJSON);
            })
        .catch((error) => {
            reject(error);
            });
    });
}
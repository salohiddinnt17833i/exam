async function getToken() {
    const resp = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${btoa(
                '259b3603b4cd455cb569e13ed178f094' + ":" + '89d745cfbb11479cb7ff72602be34bcb'
            )}`,
        },
        body: "grant_type=client_credentials",
    });
    const auth = await resp.json();

    localStorage.setItem("token", auth.access_token);
}



const fetchDataTopMixes = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/categories/toplists/playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};
const fetchDataForYou = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};
const fetchDataPlayed = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};
const fetchDataBackin = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};
const fetchDataYours = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};

const fetchDataFetured = async () => {
    let token = localStorage.getItem('token');
    if (token) {
        try {
            const response = await fetch('https://api.spotify.com/v1/browse/featured-playlists', {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            return data.playlists.items
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log("Token is not available. Please authenticate first.");
    }
};

export { getToken, fetchDataTopMixes, fetchDataForYou, fetchDataPlayed, fetchDataBackin, fetchDataYours, fetchDataFetured };

import axios from 'axios';

const API_KEY = "505561c9-8ca8-4eb4-9494-f832ba4b179c";

class LiveScoreService {

    //get all the matches [upcoming matches]
    static getMatches =  () => {
        const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`;
       return axios.get(url);
    }

    // get match details
    static getMatcheDetails =  (id) => {
        const url = `https://api.cricapi.com/v1/match_info?apikey=${API_KEY}&id=${id}`;
       return axios.get(url);
    }
}

export default LiveScoreService;




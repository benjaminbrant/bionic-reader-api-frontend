import axios from 'axios';


export class BionicReader {
    constructor() {
        this.apiKey = process.env.API_KEY;
    }
    

    async getBionicReaderText(htmlText){
        const encodedParams = new URLSearchParams();
    
        encodedParams.set('content', htmlText);
        encodedParams.set('response_type', 'html');
        encodedParams.set('request_type', 'html');
        encodedParams.set('fixation', '1');
        encodedParams.set('saccade', '10');
        
        const options = {
            method: "POST",
            url: "https://bionic-reading1.p.rapidapi.com/convert",
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': 'bionic-reading1.p.rapidapi.com'
              },
            data: encodedParams,
        };
    
            return await axios.request(options);
    }

}
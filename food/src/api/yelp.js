import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer AQHc7pcqNWlbejGQlxzVkpl4kMB1VYed0PGPX-GkCcOPWWfXTwgsDwPe564skJwN1xp2Rz49K-S4fT-AZteO3NdxTgG4rbcnOzZXuw7KehW7PPFQrTmjikO7jdDwXnYx',        
    }
});
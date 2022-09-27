const URL = "http://localhost:3000/tweets";

/**
 * Retrive Twitter Data from API
 * 
 */


const onEnter =(e)=>{
    if(e.key=="Enter"){
        getTwitterData(); 
    }

}
const getTwitterData = () => {
   

/* const url ="http://localhost:3000/tweets?q=coding&count=10";
    fetch(url).then((response)=>{
        console.log("hello");
        return response.json();
    }).then((data)=>{
        console.log("hello");
        console.log(data);
    })*/
   const query= document.getElementById('user-search-input').value ;
   //console.log(query);
   if(!query) return;
   const enCodedQuery=encodeURIComponent(query);
   //const fullUrl="https://api.twitter.com/1.1/search/tweets.json?q=coding&count=10";
    const fullUrl=`${URL}?q=${query}&count=10`;
    console.log(fullUrl);

    fetch(fullUrl,{
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log("hello");
        console.log(data);
        buildTweets(data.statuses);  
    })

}
//getTwitterData();

/**
 * Save the next page data
 */
const saveNextPage = (metadata) => {
}

/**
 * Handle when a user clicks on a trend
 */
const selectTrend = (e) => {
}

/**
 * Set the visibility of next page based on if there is data on next page
 */
const nextPageButtonVisibility = (metadata) => {
}

/**
 * Build Tweets HTML based on Data from API
 */
const buildTweets = (tweets, nextPage) => {
    let twitterContent= "";
    tweets.map((tweet)=>{
        twitterContent+=`<div class="tweets-container">
        <div class="tweets-search-container">
            <div class="tweets-search-input">
                <input id="user-search-input" type="text" placeholder="Search Twitter" onkeyup="onEnter(event)"/>
                <i class="fas fa-search fa-flip-horizontal" onclick="getTwitterData()"></i>
            </div>
        </div>
        <div class="tweets-list">
            <div class="tweet-container">
                <div class="tweet-user-info">
                    <div class="tweet-user-profile">

                    </div>
                    <div class="tweet-user-name-container">
                        <div class="tweet-user-fullname">
                            Sandeep maji

                        </div>
                        <div class="tweet-user-username">
                            @coolgamersandeep


                        </div>

                    </div>


                </div>
                <div class="tweet-images-container">
                    <div class="tweet-image">

                    </div>

                </div>
                <div class="tweet-text-container">
                    ${tweet.text}


                </div>
                <div class="tweet-date-container">
                    20 hours ago

                </div>

            </div>
        </div>
    </div>`;
    })

    document.querySelector('.tweets-list').innerHTML=twitterContent;
       

}

/**
 * Build HTML for Tweets Images
 */
const buildImages = (mediaList) => {

}

/**
 * Build HTML for Tweets Video
 */
const buildVideo = (mediaList) => {

}

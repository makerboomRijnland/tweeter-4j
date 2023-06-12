

function showTweet(tweet) {
    const tweetsSection = document.getElementById('tweets');

        /** @type {HTMLTemplateElement} */
        const templateElement = document.getElementById('tweet-template');
        /** @type {HTMLElement} */
        const tweetArticle = templateElement.content.cloneNode(true);

        tweetArticle.querySelector('.displayName').innerHTML = tweet.displayName;
        tweetArticle.querySelector('.userName').innerHTML = tweet.userName;
        tweetArticle.querySelector('.timeAgo').innerHTML = tweet.timeAgo;
        tweetArticle.querySelector('.content').innerHTML = tweet.content;
        tweetArticle.querySelector('.image').src = tweet.image;

        tweetsSection.appendChild(tweetArticle);
}

const testTweet = {
    displayName: "John",
    userName: "@JohnWest",
    timeAge: "27d",
    content: "Test Tweet!",
    image: "https://picsum.photos/id/237/536/354"
};

showTweet(testTweet);
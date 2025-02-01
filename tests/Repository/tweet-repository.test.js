import { TweetRepository } from '../../src/repository/tweet-respository'
import Tweet from '../../src/models/tweet.js'
jest.mock('../../src/models/tweet.js');

test('should create a new tweet and return it', async () => {
    const data = {
        content: 'Testing tweet'
    }
    const spy = jest.spyOn(Tweet, 'create').mockImplementation(() =>{
        return {...data, createdAt: '2022-02-22', updatedAt: '2023-03-21'}
    })
    const tweetRepository = new TweetRepository();
    const tweet = await tweetRepository.create(data);
    expect(tweet.content).toBe(data.content);
})
import praw
from dotenv import load_dotenv
import os

# Load environment variables from .env file
load_dotenv()

# Set up PRAW with credentials from .env file
reddit = praw.Reddit(
    client_id=("jqIRrninQICxc33zQyjLXQ"),
    client_secret=("rfbewE1aqpl7D0BIhZmtokIphD14qw"),
    user_agent="python:SoftwareDesignLatest:v1.0",
)

# Example: Get posts from a subreddit
subreddit = reddit.subreddit("Temple")
for post in subreddit.hot(limit=10):
    print(f"Title: {post.title}")
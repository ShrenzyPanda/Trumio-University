import json
from newsapi import NewsApiClient
from datetime import datetime, timedelta
from flask import jsonify

newsapi = NewsApiClient(api_key='d78b4eb106fe4d6f8f3267b452f0604f')

current_date = datetime.now().date()
date_before_a_week = current_date - timedelta(days=7)

def newsFlashBySkills(prompts,num_feed=5): # Function to return news flash based on the domains of the student
    try:
        news_list = {}
        for prompt in prompts: # prompts are the domains for each domain we pickt the latest news
            prompt_news_list = []
            top = newsapi.get_everything(q=prompt,from_param=date_before_a_week,to=current_date,language='en')# the newsapi used to get the news for each domain
            for i in range(min(num_feed, len(top['articles']))):
                article  = { # news article object is defined
                    'title': top['articles'][i]['title'],
                    'content': top['articles'][i]['content'],
                    'url' : top['articles'][i]['url'],
                    'image': top['articles'][i]['urlToImage']
                }
                prompt_news_list.append(article)
            news_list[prompt]=prompt_news_list
        return json.dumps(news_list, indent=2) # Reponse converted to json format
    except Exception as e:
            return jsonify({'error': str(e)}), 500 # Handling any error

def newsFlaskByTrends(num_feed=5,category='technology',language='en'): # Function to return news flash for the trending news in tech and innovation
    try:
        trend = newsapi.get_everything(q='Top technology and innovation',from_param=date_before_a_week,to=current_date,language='en')# the newsapi used to get the news 
        news_list = []
        for i in range(min(num_feed, len(trend['articles']))):
            article  = { # news article object is defined
                    'title': trend['articles'][i]['title'],
                    'content': trend['articles'][i]['content'],
                    'url' : trend['articles'][i]['url'],
                    'image':trend['articles'][i]['urlToImage']
                }
            news_list.append(article)
        return json.dumps(news_list, indent=2)# Reponse converted to json format
    except Exception as e:
            return jsonify({'error': str(e)}), 500 # Handling any error



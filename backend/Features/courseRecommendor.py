from sentence_transformers import SentenceTransformer, util
from flask import jsonify
import numpy as np
import pandas as pd
import torch
import re
import json
torch.manual_seed(42)

var = 'distiluse-base-multilingual-cased-v1'
device = 'cpu'

contractions_dict = {"ain't": "are not", "'s": " is", "aren't": "are not",
                     "can't": "cannot", "can't've": "cannot have",
                     "'cause": "because", "could've": "could have", "couldn't": "could not",
                     "couldn't've": "could not have", "didn't": "did not", "doesn't": "does not",
                     "don't": "do not", "hadn't": "had not", "hadn't've": "had not have",
                     "hasn't": "has not", "haven't": "have not", "he'd": "he would",
                     "he'd've": "he would have", "he'll": "he will", "he'll've": "he will have",
                     "how'd": "how did", "how'd'y": "how do you", "how'll": "how will",
                     "I'd": "I would", "I'd've": "I would have", "I'll": "I will",
                     "I'll've": "I will have", "I'm": "I am", "I've": "I have", "isn't": "is not",
                     "it'd": "it would", "it'd've": "it would have", "it'll": "it will",
                     "it'll've": "it will have", "let's": "let us", "ma'am": "madam",
                     "mayn't": "may not", "might've": "might have", "mightn't": "might not",
                     "mightn't've": "might not have", "must've": "must have", "mustn't": "must not",
                     "mustn't've": "must not have", "needn't": "need not",
                     "needn't've": "need not have", "o'clock": "of the clock", "oughtn't": "ought not",
                     "oughtn't've": "ought not have", "shan't": "shall not", "sha'n't": "shall not",
                     "shan't've": "shall not have", "she'd": "she would", "she'd've": "she would have",
                     "she'll": "she will", "she'll've": "she will have", "should've": "should have",
                     "shouldn't": "should not", "shouldn't've": "should not have", "so've": "so have",
                     "that'd": "that would", "that'd've": "that would have", "there'd": "there would",
                     "there'd've": "there would have", "they'd": "they would",
                     "they'd've": "they would have", "they'll": "they will",
                     "they'll've": "they will have", "they're": "they are", "they've": "they have",
                     "to've": "to have", "wasn't": "was not", "we'd": "we would",
                     "we'd've": "we would have", "we'll": "we will", "we'll've": "we will have",
                     "we're": "we are", "we've": "we have", "weren't": "were not", "what'll": "what will",
                     "what'll've": "what will have", "what're": "what are", "what've": "what have",
                     "when've": "when have", "where'd": "where did", "where've": "where have",
                     "who'll": "who will", "who'll've": "who will have", "who've": "who have",
                     "why've": "why have", "will've": "will have", "won't": "will not",
                     "won't've": "will not have", "would've": "would have", "wouldn't": "would not",
                     "wouldn't've": "would not have", "y'all": "you all", "y'all'd": "you all would",
                     "y'all'd've": "you all would have", "y'all're": "you all are",
                     "y'all've": "you all have", "you'd": "you would", "you'd've": "you would have",
                     "you'll": "you will", "you'll've": "you will have", "you're": "you are",
                     "you've": "you have"}
contractions_re = re.compile('(%s)' % '|'.join(contractions_dict.keys()))


def expand_contractions(text, contractions_dict=contractions_dict):
    def replace(match):
        return contractions_dict[match.group(0)]
    return contractions_re.sub(replace, text)


def course_recomendations(model,corpus,prompts,df):
    result_list = []
    for prompt in prompts: # prompts are the domains of the student
        prompt = expand_contractions(prompt)
        prompt = prompt.lower()
        emb = model.encode(prompt, convert_to_tensor=True) #model takes the prompts as input to return the recomended courses
        cosine_scores = util.cos_sim(corpus, emb).cpu().numpy()
        args = np.argsort(cosine_scores.flatten())[-5:][::-1]
        prompt_results = []  

        for arg in args:
            course_info = {key: str(df[key][arg]) for key in df.columns}
            prompt_results.append(course_info) # the prompt results contains the arrays of courses recomended for a domain

        result_list.append(prompt_results)
    result_json = json.dumps(result_list, indent=2)# response converted in json
    return result_json

def course_recomendations_tickets(model,corpus,prompts,df):
    result_list = []
    for prompt in prompts: # prompts contain the description of the project
        prompt = expand_contractions(prompt)
        prompt = prompt.lower()
        emb = model.encode(prompt, convert_to_tensor=True) #model takes the prompts as input to return the recomended courses
        cosine_scores = util.cos_sim(corpus, emb).cpu().numpy()
        args = np.argsort(cosine_scores.flatten())[-5:][::-1]
        prompt_results = [] 

        for arg in args:
            course_info = {key: str(df[key][arg]) for key in df.columns}
            prompt_results.append(course_info) # the prompt results contains the arrays of courses recomended for a domain

        result_list.append(prompt_results) 
    
    return result_list[0]

def addCourses(data,Students):
    try:
        studentId = data.get('student_id') # student_id fetched from the request
        existing_student = Students.objects(student_id=studentId).first()
        if existing_student:
            existing_student.courses_completed = data['courses_completed'] #the courses completed data is updated
            existing_student.save()
            return jsonify({"message": "Achievements updated successfully"}), 200
        else:
            return jsonify({"error": "Student with this ID does not exist"}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    

from flask import Flask
from mongoengine import *
from bson import json_util
import json
from models.coursesModel import CoursesUdemy  
from dotenv import load_dotenv
import os

load_dotenv()

mongo_uri =  os.environ.get("MONGO_URI")
connect(host = str(mongo_uri)) # connection established with mongodb

def get_courses():# function to get all courses
    courses_queryset = CoursesUdemy.objects().limit(20)
    courses_data = [course.to_mongo().to_dict() for course in courses_queryset]
    json_string = json.dumps(courses_data, default=json_util.default)

    return json_string



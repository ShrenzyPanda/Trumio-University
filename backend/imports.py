from flask import Flask,request, jsonify
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from sentence_transformers import SentenceTransformer, util
import numpy as np
import pandas as pd
import torch
from dotenv import load_dotenv
import os
from models.connection import get_courses  # Assuming your folder structure is correct
from models.studentModel import Students
from models.projectModel import Projects
from transformers import AutoTokenizer, AutoModelForSequenceClassification
from Features.courseRecommendor import course_recomendations, addCourses
from Features.newsFlash import newsFlashBySkills , newsFlaskByTrends
from Features.bidderRecommendor import bidderRecommender
from Features.Users import loginUser, signupUser, userById
from Features.projectManagement import projectInfo,addProjects,getAllProjects
from utils.loadFromsS3 import getFilesFromS3
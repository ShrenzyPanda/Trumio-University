import pandas as pd
import boto3
from io import StringIO
from dotenv import load_dotenv
import os


#Credentials
load_dotenv()
aws_access_key_id = os.environ.get("AWS_ACCESS_KEY")
aws_secret_access_key = os.environ.get("AWS_SECRET_KEY")
s3 = boto3.client('s3',aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key) #boto3 client used to connect to AWS S3
bucket_name = 'trumio-csvs' #AWS S3 bucket name


def getFilesFromS3():
    object_key = 'embeddings.csv' 
    embeddings = s3.get_object(Bucket=bucket_name, Key=object_key) # fetch the embeddings for the course recomender from AWS S3
    body = embeddings['Body']
    csv_string = body.read().decode('utf-8')
    csv_file = StringIO(csv_string)
    df_embeddings = pd.read_csv(csv_file) # csv file converted to pandas dataframe
    
    object_key= 'udemy_courses.csv'
    udemy_courses = s3.get_object(Bucket=bucket_name, Key=object_key) # fetch the udemy_courses.csv from AWS S3 bucket
    body = udemy_courses['Body']
    csv_string = body.read().decode('utf-8')
    csv_file = StringIO(csv_string)
    udemy_courses = pd.read_csv(csv_file) #csv file converted to pandas dataframe
    
    
    return udemy_courses, df_embeddings #return both dataframes
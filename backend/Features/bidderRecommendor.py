import torch
import torch.nn as nn
import json
from flask import jsonify

softmax = nn.Softmax(dim=1)

def bidderRecommender(model,tokenizer,Students,domains):
    try:
        students  = Students.objects() #fetch all the students 
        studentlist = []
        for student in students: #Student list created
            if set(domains) & set(student['domains']):
                stu= {}
                stu['student_id']=student['student_id']
                stu['Name']=student['name']
                stu['num_projects']=student['number_of_projects_completed']
                stu['feedback']=student['client_feedback']
                stu['course-dict']=student['courses_completed']
                studentlist.append(stu)
        
        feedbacklist = [] #Creating concatenated feedback list
        for student in studentlist:
            feedback = ""
            for f in student['feedback']:
                feedback += f + " "
            feedbacklist.append(feedback)
            
        input = tokenizer(feedbacklist,return_tensors="pt",padding=True) #the feedback list converted for input in model
        with torch.no_grad(): #model evaluated on feedback list
            logits = model(**input).logits
        ans = softmax(logits).cpu().numpy()
        
        student_rating_list= [] # student rating list creted with student id and rating from the model
        for i in range(len(feedbacklist)): 
            student_rating_list.append([studentlist[i]['student_id'], ans[i][2]])
        
        student_rating_list = sorted(student_rating_list, key=lambda x: x[1], reverse=True) # student rating list sorted on ratings high to low
        
        response_data = []
        for data in student_rating_list: # response data constructed containing data for students in order of the rating list
            student = Students.objects(student_id = data[0]).first()
            student_data = {}
            student_data['student_id'] = student['student_id']
            student_data['name']= student['name']
            student_data['email']= student['email']
            student_data['domains']=student['domains']
            student_data['number_of_projects_completed']=student['number_of_projects_completed']
            student_data['client_feedback']=student['client_feedback']
            student_data['courses_completed']=student['courses_completed']
            student_data['rating']= round(data[1]* 4 + 1, 1)

            response_data.append(student_data)
        
        response_json = json.dumps(response_data, indent=2)# response converted in json format
            
        return response_json
    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any errors
    


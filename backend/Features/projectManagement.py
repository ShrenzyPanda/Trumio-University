from flask import jsonify
import json
from .courseRecommendor import course_recomendations_tickets

def addProjects(request_data,Projects):
    try:
        projectName= request_data.get('project_name') #project name and tickets fetched from the request
        tickets = request_data.get('tickets')
        project = Projects(  # project object created
            project_name  = projectName,
            tickets = tickets
        )
        
        project.save() # project is saved to the database
        return jsonify({'message': 'Project added successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error

def getAllProjects(Projects):
    try:
        projects = Projects.objects() # all projects fetched
        response_data= {}
        for project in projects: # response object constructed
            response_data[project['project_id']] = {
                "project_name":project['project_name'],
                "tickets":project['tickets'],
                "client":project['client'],
                "date":project['date'],
                "id":project['project_id']
            }
        response_json = json.dumps(response_data, indent=2) # Reponse converted to json format
        return response_json
    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error
    
def projectInfo(request_data,Projects,model,corpus,df_courses): # Function to return recomended courses for each ticket of the project
    try:
        project_id = request_data.get('project_id') # project_id fetched from request
        project = Projects.objects(project_id=project_id).first() # the project for the id is fetched
        if project:
            response_data = {}  # response constructed for the project
            response_data['project_id']=project['project_id']
            response_data['project_name']=project['project_name']
            response_data['client'] = project['client']
            response_data['date'] = project['date']
            response_tickets = []
            tickets = project['tickets']
            for ticket in tickets: # Tickets constructed for the project
                description = ticket['description']
                courses_ticket = course_recomendations_tickets(model,corpus,[description],df_courses) # recomended courses for the ticket are fetched using out model
                new_ticket= {
                    "title":ticket['title'],
                    "description": ticket['description'],
                    "courses": courses_ticket # recomended courses are added to the ticket object
                }
                response_tickets.append(new_ticket) 
            response_data['tickets']=response_tickets 
            return response_data 
    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error
    
    
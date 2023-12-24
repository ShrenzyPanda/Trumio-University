from flask import jsonify, make_response
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

def loginUser(data,Students):
    try:
        email = data.get('email') # Email and passwords are fetched from the data
        password = data.get('password')

        student = Students.objects(email=email).first()

        if student and student.check_password(password):# It is checked if the user exists and if the password is correct
            access_token = create_access_token(identity=str(student.student_id))# jwt token is created
            response_data = {
                'message': 'Login successful',
                'access_token': access_token,
                'student_data': {
                    'student_id': str(student.student_id),
                    'name': student.name,
                    'email': student.email,
                    'domains': student.domains,
                }
            }
            response = make_response(jsonify(response_data), 200)# Reponse converted to json format
            response.set_cookie('access_token', access_token)# the token sent in the cookie too
            return response

        return jsonify({'error': 'Invalid email or password'}), 401
    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error
    
def signupUser(data,Students):
    try:
        bcrypt = Bcrypt()
        name = data.get('name') # The required required details for signup are fetched in the code
        email = data.get('email')
        domains = data.get('domains', [])
        password = data.get('password') 
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8') # password encrypted using bcrypt

        new_student = Students( # new_student object is made from the description
            name=name,
            email=email,
            domains=domains,
            password=hashed_password,
        )
        
        new_student.save() # new_student is saved in database
        return jsonify({'message': 'Student registered successfully'}), 201

    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error
    
def userById(data,Students):
    try:
        studentId = data.get('student_id') # student_id fetched from the request
        student = Students.objects(student_id=studentId).first() # student with the student_id is found
        if student:
            response_data = {
                'student_id':student.student_id,
                'email':student.email,
                'password':student.password,
                'domains':student.domains,
                'Number of projects completed' : student.number_of_projects_completed,
                'client_feedback': student.client_feedback,
                'courses_completed': student.courses_completed
            }
            response = make_response(jsonify(response_data), 200) # Reponse converted to json format
            return response
        else:
            return {"error":"student not found"}
    except Exception as e:
        return jsonify({'error': str(e)}), 500 # Handling any error
from mongoengine import *
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class Students(Document): # class for the Students collection
    student_id = SequenceField()
    name = StringField(required=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)  
    domains = ListField(StringField())
    number_of_projects_completed = IntField(db_field='Number of projects completed')
    client_feedback=ListField(StringField())
    courses_completed=DictField()
    
    def save(self, *args, **kwargs):  #custom function for saving the student object to the collection
        if not self.student_id:
            self.student_id = generate_unique_student_id()
        super().save(*args, **kwargs)
    
    def check_password(self, password): # function to check if the password matches with the encrpted password
        return bcrypt.check_password_hash(self.password, password)

def generate_unique_student_id():  # function to generate unique student_id
    last_student = Students.objects.order_by('-student_id').first()
    if last_student:
        return last_student.student_id + 1
    else:
        return 1

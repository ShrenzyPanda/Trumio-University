from mongoengine import *

class Projects(Document): # class for the Projects collection
    project_id = SequenceField()
    project_name = StringField(required=True)
    client = StringField()
    date = StringField()
    tickets = ListField(DictField())
    
    def save(self, *args, **kwargs): #custom function for saving the project object to the collection
        if not self.project_id:
            self.project_id = generate_unique_project_id()
        super().save(*args, **kwargs)
        

def generate_unique_project_id(): # function to generate unique project_id
    last_project = Projects.objects.order_by('-project_id').first()
    if last_project:
        return last_project.project_id + 1
    else:
        return 1
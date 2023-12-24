from mongoengine import *

class CoursesUdemy(Document): # class for the CoursesUdemy collection
    meta = {'collection': 'CoursesUdemy'}
    course_id = StringField( )
    url = StringField()
    title = StringField()
    is_paid = BooleanField()
    instructors = StringField()
    image_480x270 = StringField()
    published_title  = StringField()
    headline = StringField()
    num_subscribers = LongField()
    avg_rating = FloatField()
    avg_rating_recent = FloatField()    
    rating = FloatField()
    num_reviews = LongField()
    num_published_lectures = IntField()
    num_published_practice_tests = IntField()
    has_closed_caption = BooleanField()
    created_at = StringField()
    instructional_level = StringField()
    published_at = StringField()
    objectives_summary = StringField()
    is_recently_published = BooleanField()
    last_update_date = StringField()
    content_info = StringField()
    category = StringField()


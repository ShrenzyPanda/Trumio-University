from imports import * #All imports are imported from the imports file
# Initializing modules
app = Flask(__name__)
CORS(app)
load_dotenv()
app.config['JWT_SECRET_KEY'] = os.environ.get("JWT_SECRET")
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Loading the files
# df_courses , df_embeddings = getFilesFromS3() #get the dataframes for courses and embeddings for the model from AWS S3 bucket
# If unable to connect to s3
df_courses  = pd.read_csv('utils/udemy_courses.csv')
df_embeddings = pd.read_csv('utils/embeddings.csv')

# Initialising recommender model
torch.manual_seed(42)
corpus = torch.tensor(np.array(df_embeddings), dtype=torch.float)
model = SentenceTransformer('distiluse-base-multilingual-cased-v1')
model.to('cpu')
model.eval()

# Initialising bidder recommender model
tokenizer = AutoTokenizer.from_pretrained("finiteautomata/bertweet-base-sentiment-analysis")
model2 = AutoModelForSequenceClassification.from_pretrained("finiteautomata/bertweet-base-sentiment-analysis")
model2.to('cpu')
model2.eval()

# User APIs
@app.post('/login') # API for login
def login():
    request_data = request.get_json()
    response_data = loginUser(request_data,Students)
    return response_data
        
@app.post('/signup') # API for signup
def signup():
    request_data = request.get_json()
    response_data = signupUser(request_data,Students)
    return response_data

@app.post('/getUserbyId') # API to get user by user_id
def get_user_by_id():
    request_data = request.get_json()
    response_data = userById(request_data,Students)
    return response_data

# Course APIs

@app.post('/addcourses') # API to add courses
def add_number_of_courses():
    request_data = request.get_json()
    response_data = addCourses(request_data,Students)
    return response_data

@app.get('/course') # API to get all courses
def courses_show():
    try:
        courses = get_courses()
        return courses
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.post('/courseRecomendation') # API to get recomended courses
def send_recomended_courses():
    request_data = request.get_json()
    domains = request_data.get('domains', [])
    result = course_recomendations(model,corpus,domains,df_courses)
    return result

# News Flask APIs
@app.post('/newsFlashBySkills') # API to get news flash
def news_flash_skills():
    request_data = request.get_json()
    skills = request_data.get('domains',[])
    numberOfFeed= request_data.get('NumFeed')
    response_data= newsFlashBySkills(skills,numberOfFeed)
    return response_data

@app.post('/newFlashTrending') # API to get trending news
def news_flash_trending():
    request_data = request.get_json()
    numberOfFeed= request_data.get('NumFeed')
    response_data= newsFlaskByTrends(numberOfFeed)
    return response_data

# Bidder recommender APIs
@app.post('/bidderRecomendation') # API to get student bidders for projects based on feedback and skills
def bidder_recomendation():
    request_data = request.get_json()
    domains = request_data.get('domains')
    response_data = bidderRecommender(model2,tokenizer,Students,domains)
    return response_data

#Project Ticket APIs

@app.post('/addProject') # API to add a project with tickets
def add_project():
    request_data = request.get_json()
    response_data= addProjects(request_data,Projects)
    return response_data

@app.get('/getProjects') # API to get all project details
def get_all_projects():
    response_data= getAllProjects(Projects)
    return response_data

@app.post('/getProjectInfo') # API to get project details with courses recomended on ticktes
def get_project_info():
    request_data = request.get_json()
    response_data= projectInfo(request_data,Projects,model,corpus,df_courses)
    return response_data
    
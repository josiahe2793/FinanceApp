import os
from app import app
from flask import render_template, request, redirect, session
from flask_pymongo import PyMongo

app.config['MONGO_DBNAME'] = 'users' 
app.config['MONGO_URI'] = 'mongodb+srv://admin:Fdc69t6o4s5Pjx65@cluster0-rqyqd.mongodb.net/users?retryWrites=true&w=majority' 
mongo = PyMongo(app)

app.secret_key = os.urandom(32)

@app.route('/')
@app.route('/home')

def home():
    # connect to mongo.db and access collection known as events
    # find will find all the data
    # store collection as events and as a dictionary
    # always return message to user with template
    collection = mongo.db.users
    users = collection.find({})
    return render_template('home.html', users=users)

@app.route('/add' ,methods=['GET', 'POST'])

def add():
    if request.method == 'GET':
        return "Please enter your user information"
    else:
        first = request.form['first']
        last = request.form['last']
        dob = request.form['dob']
        email = request.form['email']
        password = request.form['password']
        bank = request.form['bank']
        users.insert({'first': first, 'last': last, 'dob': dob, 'email': email, 'password': password, 'bank': bank})
# CONNECT TO DB, ADD DATA
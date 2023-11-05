import flask
import openai
import os
from dotenv import load_dotenv
from twilio.rest import Client
from pymongo import MongoClient
import sendgrid
from sendgrid.helpers.mail import Mail, Email, To, Content



load_dotenv('.env')
#HCP notes summarized/simplified and validated through GPT-4.
def notes_summarizer(hcp_notes): #hcp_notes is a list of notes.
    openai.api_key = os.environ["OPENAI_API_KEY"]
    notes = ""
    for i in hcp_notes:
        notes = notes + i
    res = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[
        {"role": "user", "content": "Summarize the following doctor's notes for patient's family. Elaorate on the what the medical terms mean and keep reading level to 5th grade: "+notes}])
    summary = res["choices"][0]["message"]['content']
    return summary

def email(pt_email, contact_email):
    sg = sendgrid.SendGridAPIClient(api_key='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')
    from_email = Email(pt_email)  # Replace with your email
    to_email = To(contact_email)  # Replace with recipient's email
    subject = "Video chat link"
    content = Content("text/html", "Health care provider in your family member's bed. You can ask questions through video chat using the following link. <a href='https://telemed.digitalsamba.com/demo-room'>Click here!</a>")
    mail = Mail(from_email, to_email, subject, content)
    
#messaging method using twilio.
def message(sending_num, receiving_num, text):
    client = Client(os.environ["SID"], os.environ["AUTH_TOKEN"])
    messageBeingSent = client.messages.create(from_=sending_num, body=text, to=receiving_num)
    if messageBeingSent.sid : 
        print("Message has been successfully sent")
    else : 
        print("Message was unable to be sent!")
        
#query goes through the database and then calls notes summarizer and twilio
def query_mongoDB():
    client = MongoClient("mongodb+srv://ag1372:quvVyngw4UnLRFKs@healthhack2023.eyhrwmb.mongodb.net/?retryWrites=true&w=majority")
    db = client.get_database('patient_records')
    records = db.patient_contact_notes
    sending_num = list(records.find())[0]['pt_phone_number']
    receiving_num = list(records.find())[0]['contact_phone']
    pt_email = list(records.find())[0]['pt_email']
    contact_email = list(records.find())[0]['contact_email']
    text = notes_summarizer([list(records.find())[0]['Physical_findings'], list(records.find())[0]['Assessment'], list(records.find())[0]['Plan']])
    message(sending_num, receiving_num, text)
    email(pt_email, contact_email)

query_mongoDB()
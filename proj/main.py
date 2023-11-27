from urllib import request
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from base import *
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
db = SessionLocal()
app = FastAPI()
Base.metadata.create_all(bind=engine)

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/vivod")
def vivod():
    comp=db.query(Company).all()
    telep = db.query(Telephone).all()
    return comp,telep



from pydantic import BaseModel
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import *
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.schema import ForeignKey
from sqlalchemy.orm import relationship
from pydantic import BaseModel

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123@localhost/postgres"
engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Company(Base):
    __tablename__="company"

    id=Column(Integer,primary_key=True)
    name_company=Column(String)



class Telephone(Base):
    __tablename__="telephone"

    id=Column(Integer,primary_key=True)
    model_name=Column(String)
    ram=Column(Integer)
    core=Column(Integer)
    name_company=Column(Integer,ForeignKey("company.id"))
    img = Column(String)



from datetime import datetime
from bson.objectid import ObjectId

class User:
    """User model (Student or Employer)"""
    
    @staticmethod
    def create_student(email, password_hash, name, skills, gpa=0, preferences="", college="", city=""):
        return {
            "_id": ObjectId(),
            "email": email,
            "password_hash": password_hash,
            "name": name,
            "role": "student",
            "skills": skills,  # List of skills
            "gpa": gpa,
            "preferences": preferences,  # Text describing preferences
            "college": college,
            "city": city,
            "resume_url": "",
            "profile_photo_url": "",
            "experience_years": 0,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow(),
            "is_active": True
        }
    
    @staticmethod
    def create_employer(email, password_hash, company_name, company_email):
        return {
            "_id": ObjectId(),
            "email": email,
            "password_hash": password_hash,
            "company_name": company_name,
            "company_email": company_email,
            "role": "employer",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow(),
            "is_active": True
        }

class Internship:
    """Internship model (Job posting)"""
    
    @staticmethod
    def create(company_id, title, description, required_skills, seats_available, 
               duration_weeks=12, stipend=0):
        return {
            "_id": ObjectId(),
            "company_id": company_id,
            "title": title,
            "description": description,
            "required_skills": required_skills,  # List of required skills
            "seats_available": seats_available,
            "seats_filled": 0,
            "duration_weeks": duration_weeks,
            "stipend": stipend,
            "status": "open",  # open, closed, completed
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }

class Application:
    """Application model (Student applying to internship)"""
    
    @staticmethod
    def create(student_id, internship_id, match_score=0):
        return {
            "_id": ObjectId(),
            "student_id": student_id,
            "internship_id": internship_id,
            "match_score": match_score,
            "status": "applied",  # applied, shortlisted, rejected, accepted, completed
            "applied_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }

class Recommendation:
    """Recommendation model (AI-generated match)"""
    
    @staticmethod
    def create(student_id, internship_id, score, rank):
        return {
            "_id": ObjectId(),
            "student_id": student_id,
            "internship_id": internship_id,
            "score": score,  # Similarity score 0-1
            "rank": rank,     # 1st, 2nd, 3rd match, etc.
            "created_at": datetime.utcnow()
        }
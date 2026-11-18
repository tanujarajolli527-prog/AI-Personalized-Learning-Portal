
# AI-Powered Personalized Learning Portal

## System Architecture

```text
          STUDENT
             |
             v
       REACT FRONTEND
             |
             v
      NODE.JS + EXPRESS
          BACKEND
          /     \
         v       v
     MONGODB   GEMINI AI
         |       |
         v       v
   USER DATA   AI TUTOR
   AND COURSES RECOMMENDATIONS
```

## Component Description

1. Frontend: Provides the user interface.
2. Backend: Handles requests and application logic.
3. MongoDB: Stores student, course, and progress data.
4. Gemini AI: Supports AI tutoring and personalized recommendations.

## Workflow

Students interact with the frontend. The frontend communicates with the backend. The backend processes requests and connects to the database or AI service when required.

# Brain Tumor Detection System

A full-stack application for brain tumor detection using deep learning.

## Tech Stack
- Frontend: React.js
- Backend: FastAPI
- Model: CNN / Inception V2
- Dataset: BRATS

## Features
- Upload MRI image
- Predict tumor presence
- Fast inference with optimized pipeline
- REST API integration

## Project Structure
- frontend/ → React UI
- backend/ → FastAPI backend & ML model

## How to Run Locally

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload


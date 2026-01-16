from fastapi import FastAPI

app = FastAPI()

@app.get("/")  # define a route
def greet():
    return {"message": "I am Ish"}

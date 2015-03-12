from fabric.api import local

def run():
    local('./manage.py runserver localhost:8080')

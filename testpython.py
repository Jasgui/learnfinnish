from flask import Flask

app = flask(__name__)

@app.route('/')
def helloworld():
    return 'hello, world!'

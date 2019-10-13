from flask import Flask

app = flask(__name__)

@app.route('/test')
def helloworld():
    return 'hello, world!'

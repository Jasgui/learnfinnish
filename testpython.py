from flask import Flask
from flask import request
import sys
import optparse
import time
import hfst
import json

app = Flask(__name__)

start = int(round(time.time()))

@app.route("/lookup", methods=['POST'])
def hello_world():
    
    req_data = request.get_json()
    item = req_data['item']
    
    
    
    filename = "./finntreebank.hfst"
    input_stream = hfst.HfstInputStream(filename)
    analyser = input_stream.read()
    result = analyser.lookup(item)
    print (result[0][0])
    resultObj = result[0][0]
    print(resultObj)
    return(resultObj)

if __name__ == '__main__':
    parser = optparse.OptionParser(usage="python testpython.py -p <port>")
    app.run(host='159.65.30.42', port=8000, debug=False)
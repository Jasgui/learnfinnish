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
    parser = optparse.OptionParser(usage="python simpleapp.py -p <port>")
    parser.add_option('-p', '--port', action='store', dest='port', help='The port to listen on.')
    (args, _) = parser.parse_args()
    if args.port == None:
        print ("Missing required argument: -p/--port")
        sys.exit(1)
    app.run(host='0.0.0.0', port=int(args.port), debug=False)
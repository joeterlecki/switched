import json


def reverse_string(string):
    reversed_string_list = []
    for char in string[::-1]:
        reversed_string_list.append(char)

    formatted_string = ''.join(reversed_string_list)

    return formatted_string


def lambda_handler(event, context):

    reversed_string = reverse_string(event['queryStringParameters']['request_string'])
    request_reponse = {}
    request_reponse['statusCode'] = 200
    request_reponse['headers'] = {}
    request_reponse['headers']['Content-Type'] = 'application/json'
    request_reponse['headers']['Access-Control-Allow-Origin'] = '*'
    request_reponse['body'] = json.dumps({'response': reversed_string})

    return request_reponse

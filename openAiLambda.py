import json
import openai

def lambda_handler(event, context):
    model_to_use = "text-davinci-003"
    print("Event ", event)
    print("Event body ", event['body'])
    input_prompt=event['body']
    
    openai.api_key = ""
    response = openai.Completion.create(
      model=model_to_use,
      prompt=input_prompt,
      temperature=0,
      max_tokens=100,
      top_p=1,
      frequency_penalty=0.0,
      presence_penalty=0.0
    )
    print("Response ", response)
    text_response = response['choices'][0]['text'].strip()
    print("Text response ", text_response)
    

    return {
        'statusCode':200,
        "isBase64Encoded": False,
        'headers': {
            "Access-Control-Allow-Headers": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST"
        },
        'body': json.dumps(text_response)
    }
    
# Example TTS - "Eleven Labs"

# required to access sytem commands and to run applications
import os
import sys

def say(something):
    api_key = "YOUR_API_KEY"
    url = "https://api.elevenlabs.io"
    output_format = "mp3_44100_128"
    data = f'{{"text": "{something}", "model_id": "eleven_multilingual_v2"}}'
    voice_id = "JBFqnCBsd6RMkjVDRZzb"
    command = f'curl -X POST "{url}/v1/text-to-speech/{voice_id}?output_format={output_format}" -H "xi-api-key: {api_key}" -H "Content-Type: application/json" --data {data!r} --output say.mp3 && afplay say.mp3'
    os.system(command)

say(sys.argv[1]) # Request the command line argument after the script name
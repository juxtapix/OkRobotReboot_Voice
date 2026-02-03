# Example STT - "Eleven Labs"

import os
import sys
# import pipes  #Python2
import shlex    #Python3

def listen(something):
    api_key = "API-KEY"
    url = 'https://api.elevenlabs.io/v1/speech-to-text'
    data = "@" + shlex.quote(something)
    command = f'curl -X POST {url} -H "xi-api-key: {api_key}" -H "content-type: multipart/form-data" -F model_id=scribe_v1 -F file={data} --output scribe.txt'
    print(command)
    output = os.popen(command).read()
    return output.lstrip()

print(listen("_audio/audio-file.flac"))

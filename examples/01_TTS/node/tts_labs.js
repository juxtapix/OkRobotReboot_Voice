// Example TTS - "Eleven Labs"

// required to run Child Process Applications
var exec = require('child_process').execSync;

function say(something){
  var api_key = "YOUR_API_KEY";
  var url = "https://api.elevenlabs.io";
  var output_format = "mp3_44100_128";
  var data = `{"text": "${something}", "model_id": "eleven_multilingual_v2"}`;
  var voice_id = "JBFqnCBsd6RMkjVDRZzb";
  command = `curl -X POST "${url}/v1/text-to-speech/${voice_id}?output_format=${output_format}" -H "xi-api-key: ${api_key}" -H "Content-Type: application/json" --data '${data}' --output say.mp3 && afplay say.mp3`
  exec(command);
}

say(process.argv[2]); // Request the command line argument after the script name
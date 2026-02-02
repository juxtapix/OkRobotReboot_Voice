//Example STT - "Eleven Labs"

var exec = require('child_process').execSync;

function listen(something){
  var api_key = "API-KEY";
  var url = "https://api.elevenlabs.io/v1/speech-to-text";
  var data = "@" + something;
  command = `curl -X POST ${url} -H "xi-api-key: ${api_key}" -H "content-type: multipart/form-data" -F model_id=scribe_v1 -F file=${data} --output scribe.txt`
  output = exec(command, function(error, stdout, stderr){console.log('stdout: ' + stdout);});
  return output.toString().trim();
}

console.log(listen("_audio/audio-file.flac"));

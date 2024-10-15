# Path to the old ini config
$iniFilePath = "$env:appdata\obs-studio\global.ini"

try {
    # try to get variables from obs global.ini file (old location)
    $server_password = (Select-String -Path $iniFilePath -List -Pattern "(?<=ServerPassword=)\S+").Matches[0].Value
    $server_port = (Select-String -Path $iniFilePath -List -Pattern "(?<=ServerPort=)\S+").Matches[0].Value
} catch {
    Write-Output "No configuration data found at old location"
}

# Path to the new JSON file location
$jsonFilePath = "$env:appdata\obs-studio\plugin_config\obs-websocket\config.json"

# Check if the json file exists
if (Test-Path -Path $jsonFilePath) {
    try {
        # Read the file
        $jsonContent = Get-Content -Path $jsonFilePath -Raw | ConvertFrom-Json
        $server_port = $jsonContent.server_port
        $server_password = $jsonContent.server_password
        Write-Output "Read data from new location"
    } catch {
        Write-Output "Error reading from new json file"
    }
}

# print out variables
Write-Host $server_password
Write-Host $server_port

$destinationFile = "common.js"

# replace text in html with new values
$controller = Get-Content -Path $destinationFile
$controller = $controller -creplace "YourPasswordHERE", $server_password
$controller = $controller -creplace "4455", $server_port
$controller | Set-Content -Path $destinationFile
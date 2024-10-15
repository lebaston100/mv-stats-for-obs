// Shared code sits in here

window.addEventListener("load", init, false);
var obsHost = "127.0.0.1:4455";       // Change the server IP/port here
var obsPassword = "YourPasswordHERE";  // Set password here
var obsProtocol = "ws";               // change protocol here (if you know what you are doing)

const obs = new OBSWebSocket();
const urlParams = new URLSearchParams(window.location.search);

async function init() {
    console.log("Trying to connect to obs...");
    await attemptConnection();
}

// Handle websocket connection stuff
async function attemptConnection() {
    // Read url, password and protocol from url params if set
    obsProtocol = urlParams.has("secure") ? "wss" : obsProtocol;
    obsHost = urlParams.get("host") ?? obsHost;
    obsPassword = urlParams.get("password") ?? obsPassword;

    // Try to connect to obs
    try {
        const {
            obsWebSocketVersion,
            negotiatedRpcVersion
        } = await obs.connect(`${obsProtocol}://${obsHost}`, obsPassword, {rpcVersion: 1});
        console.log(`Connected to obs-websocket ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`);
    } catch (error) {
        console.error("Failed to connect", error.code, error.message);
    }
}

function changeElementColor(id, color) {
    document.getElementById(id).style.color = color;
}

function changeElementVisibility(id, visibility) {
    document.getElementById(id).style.visibility = visibility ? "":"hidden";
}

function changeElementContent(id, newContent) {
    document.getElementById(id).innerText = newContent;
}

function trimTimecode(tc) {
    return tc.split(".")[0];
}
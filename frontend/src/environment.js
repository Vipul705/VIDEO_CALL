let IS_PROD = true;
const server = IS_PROD ?
    "https://video_callbackend-snwc.onrender.com" :

    "http://localhost:8000"


export default server;
import os
import httpx
from dotenv import load_dotenv

load_dotenv(dotenv_path="../.env")

WHATSAPP_TOKEN = os.getenv("WHATSAPP_TOKEN")
PHONE_NUMBER_ID = os.getenv("PHONE_NUMBER_ID")

GRAPH_API_URL = f"https://graph.facebook.com/v25.0/{PHONE_NUMBER_ID}/messages"

headers = {
    "Authorization": f"Bearer {WHATSAPP_TOKEN}",
    "Content-Type": "application/json"
}

payload = {
    "messaging_product": "whatsapp",
    "recipient_type": "individual",
    "to": "916379639483",  # The user's verified number from the screenshot
    "type": "text",
    "text": {
        "preview_url": False,
        "body": "Test message from debug script"
    }
}

try:
    print(f"Sending to URL: {GRAPH_API_URL}")
    print(f"With payload: {payload}")
    response = httpx.post(GRAPH_API_URL, json=payload, headers=headers)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Exception: {e}")

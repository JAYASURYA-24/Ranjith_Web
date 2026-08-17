import os
import httpx
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from faq import get_faq_response

# Load environment variables from the root .env file
load_dotenv(dotenv_path="../.env")



app = Flask(__name__)

WHATSAPP_TOKEN = os.getenv("WHATSAPP_TOKEN")
PHONE_NUMBER_ID = os.getenv("PHONE_NUMBER_ID")
VERIFY_TOKEN = os.getenv("VERIFY_TOKEN")
GRAPH_API_URL = f"https://graph.facebook.com/v26.0/{PHONE_NUMBER_ID}/messages"


print("TOKEN:", "Loaded" if WHATSAPP_TOKEN else "NOT LOADED")
print("PHONE ID:", PHONE_NUMBER_ID)
print("VERIFY TOKEN:", VERIFY_TOKEN)

@app.route("/", methods=["GET"])
def read_root():
    return jsonify({"message": "WhatsApp Webhook Backend is running"})

@app.route("/webhook", methods=["GET"])
def verify_webhook():
    """
    Webhook Verification for WhatsApp API.
    WhatsApp will send a GET request with specific query parameters.
    """
    mode = request.args.get("hub.mode")
    token = request.args.get("hub.verify_token")
    challenge = request.args.get("hub.challenge")

    if mode and token:
        if mode == "subscribe" and token == VERIFY_TOKEN:
            print("WEBHOOK_VERIFIED")
            return challenge, 200
        else:
            return jsonify({"error": "Verification token mismatch"}), 403
    
    return jsonify({"error": "Bad Request: Missing parameters"}), 400

@app.route("/webhook", methods=["POST"])
def receive_message():
    body = request.get_json()

    print("\n========== WEBHOOK RECEIVED ==========")
    print(body)
    print("======================================\n")

    if body and body.get("object") == "whatsapp_business_account":
        for entry in body.get("entry", []):
            for change in entry.get("changes", []):
                value = change.get("value", {})

                if "messages" in value:
                    for message_info in value["messages"]:

                        from_number = message_info.get("from")
                        message_type = message_info.get("type")

                        print("FROM:", from_number)
                        print("TYPE:", message_type)

                        if message_type == "text":
                            message_body = message_info["text"]["body"]

                            print("MESSAGE:", message_body)

                            send_automatic_reply(
                                from_number,
                                message_body
                            )

        return "OK", 200

    return "Not Found", 404


def send_automatic_reply(recipient_phone_number: str, message_body: str = ""):
    """
    Send an automatic text response using WhatsApp Graph API.
    """
    headers = {
        "Authorization": f"Bearer {WHATSAPP_TOKEN}",
        "Content-Type": "application/json"
    }
    
    response_text = get_faq_response(message_body)
    
    payload = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": recipient_phone_number,
        "type": "text",
        "text": {
            "preview_url": False,
            "body": response_text
        }
    }
    
    try:
        response = httpx.post(GRAPH_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        print(f"Successfully sent reply to {recipient_phone_number}")
    except httpx.HTTPStatusError as e:
        print(f"Failed to send message: {e.response.text}")
    except Exception as e:
        print(f"Error sending message: {e}")

if __name__ == "__main__":
    app.run(port=8000, debug=True)

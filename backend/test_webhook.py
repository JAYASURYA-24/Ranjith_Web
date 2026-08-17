import httpx
import json

payload = {
    "object": "whatsapp_business_account",
    "entry": [
        {
            "id": "1698741774513244",
            "changes": [
                {
                    "value": {
                        "messaging_product": "whatsapp",
                        "metadata": {
                            "display_phone_number": "15551973642",
                            "phone_number_id": "1249698548224488"
                        },
                        "contacts": [
                            {
                                "profile": {
                                    "name": "Test User"
                                },
                                "wa_id": "919159869407"
                            }
                        ],
                        "messages": [
                            {
                                "from": "919159869407",
                                "id": "wamid.HBgLOTE5MTU5ODY5NDA3FQIAEhgUM0EwMDVBMTRGRkNBQkM4RjUzMUMQ",
                                "timestamp": "1688636400",
                                "text": {
                                    "body": "Hi! I would like to explore more about ReShine."
                                },
                                "type": "text"
                            }
                        ]
                    },
                    "field": "messages"
                }
            ]
        }
    ]
}

try:
    response = httpx.post("http://127.0.0.1:8000/webhook", json=payload)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")

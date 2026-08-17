# 50 Default FAQs for Reshine Web Service
faq_data = {
    # Greetings & General
    "hi": "Hello! Welcome to ReShine Services. Reply with a number or keyword to get started:\n1. Services\n2. Pricing\n3. Timings\n4. Contact\n5. Location",
    "hello": "Hello! Welcome to ReShine Services. Reply with a number or keyword to get started:\n1. Services\n2. Pricing\n3. Timings\n4. Contact\n5. Location",
    "menu": "Main Menu:\n1. Doorstep Car Wash\n2. Doorstep Bike Wash\n3. Steam Cleaning",
    
    # 1. Services & Menu Items
    "1": "We offer premium Car Wash services including interior, exterior detailing, and waxing. Reply 'car wash' for more details.",
    "2": "Our Bike Wash service includes pressure wash, chain cleaning, and polishing. Reply 'bike wash' for more details.",
    "3": "We offer professional Home Cleaning services for apartments and villas. Reply 'home cleaning' for details.",
    "4": "We provide certified PUC (Pollution Under Control) checking services. Reply 'puc' for details.",
    "5": "Current Offers: Get 20% off on your first Car Wash, or bundle Home Cleaning with a Bike Wash for extra discounts!",

    "services": "We offer Car Wash, Bike Wash, Home Cleaning, and PUC checking. Which one are you interested in?",
    "pricing": "Our pricing varies by service plan. For example, Car Wash starts at ₹499 and Bike Wash at ₹199. What service do you need?",
    "timings": "We are open every day from 8:00 AM to 8:00 PM.",
    "hours": "Our operating hours are Monday to Sunday, 8:00 AM - 8:00 PM.",
    "contact": "You can contact our support at support@reshine.com or call us directly.",
    "location": "We provide services at your doorstep in select areas! Send us your pin code to check availability.",
    
    # Car Wash
    "car": "Our Car Wash packages: Basic, Premium, and Ultimate. We come to your location! Type 'car basic' for basic details.",
    "car wash": "Our Car Wash packages: Basic, Premium, and Ultimate. We come to your location! Type 'car basic' for basic details.",
    "car basic": "Basic Car Wash includes exterior foam wash, tire dressing, and interior vacuuming.",
    "car premium": "Premium Car Wash includes everything in Basic + dashboard polishing and floor mat washing.",
    "car ultimate": "Ultimate Car Wash includes everything in Premium + exterior waxing, engine bay cleaning, and seat dry cleaning.",
    "suv": "Yes, we wash SUVs! There is a slight premium for larger vehicles. Type 'pricing' for general starting rates.",
    "sedan": "Yes, we wash sedans at standard rates. Let us know your preferred time!",
    "hatchback": "Yes, we wash hatchbacks at standard rates.",
    "polish": "We offer high-quality Carnauba wax polishing to give your car that showroom shine.",
    "ceramic": "Ceramic coating is available upon special request. Please leave your contact number so our specialist can call you.",
    "interior": "Interior detailing includes deep vacuuming, stain removal, and dashboard conditioning.",
    "scratch": "We offer minor scratch removal with our Ultimate detailing package.",
    "stain": "Tough stains on seats can usually be removed with our foam scrubbing process included in the Ultimate package.",

    # Bike Wash
    "bike": "Bike Wash packages include Basic Wash and Detailed Wash. Type 'bike wash' for details.",
    "bike wash": "Our Bike Wash includes pressure washing, foam bath, engine degreasing, and chain lube.",
    "bullet": "We wash Royal Enfields and cruiser bikes with special care for chrome parts.",
    "sports bike": "Sports bikes are safely washed using microfiber towels and pH-neutral foam.",
    "scooter": "Yes, we wash all types of scooters and mopeds too!",
    "chain lube": "Chain cleaning and high-performance lubrication are included in our premium bike wash.",
    "helmet": "We offer helmet visor cleaning as a complimentary service with any bike wash.",
    "rust": "We offer anti-rust treatments for bikes. Please ask our service technician during the wash.",

    # Booking & Payment
    "book": "You can book a service directly through our website at the link in our bio, or reply with your Name, Number, and Address.",
    "schedule": "We allow scheduling up to 7 days in advance. What date works for you?",
    "cancel": "You can cancel or reschedule up to 2 hours before the service time without any penalty.",
    "payment": "We accept Cash, UPI (Google Pay, PhonePe), and major Credit/Debit cards after the service is completed.",
    "upi": "Yes, our technicians carry QR codes for easy UPI payments.",
    "cash": "Yes, you can pay in cash after the service.",
    "refund": "Refunds are processed within 3-5 business days if applicable.",
    "discount": "We offer a 10% discount on your second booking! Check the 'Offers' section on our website.",
    
    # Misc
    "website": "Visit us at www.reshinewebsite.com for full details and online booking.",
    "app": "Currently we operate via our mobile-friendly website. You can book directly there!",
    "guarantee": "We offer a 100% satisfaction guarantee. If you're not happy, we'll make it right.",
    "thanks": "You're welcome! Let us know if you need anything else.",
    "thank you": "You're welcome! Let us know if you need anything else.",
}

def get_faq_response(message: str) -> str:
    message = message.lower().strip()
    
    # Direct match
    if message in faq_data:
        return faq_data[message]
    
    # Partial keyword matching
    for keyword, response in faq_data.items():
        if keyword in message.split():
            return response
            
    # Default fallback
    return "Thank you for reaching out to Reshine! We received your message. Please reply with 'menu' to see our services, or wait for an agent to assist you."

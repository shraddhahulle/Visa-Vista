export interface UKCity {
  id: string;
  name: string;
  description: string;
  image: string;
  visaOffices: VisaOffice[];
  accommodation: Accommodation[];
}

export interface VisaOffice {
  name: string;
  address: string;
  phone: string;
  website: string;
  hours: string;
  appointmentRequired: boolean;
  services: string[];
}

export interface Accommodation {
  name: string;
  type: "hotel" | "hostel" | "apartment" | "student";
  priceRange: string;
  description: string;
  rating: number;
  website: string;
  image: string;
  amenities: string[];
}

export const ukCities: UKCity[] = [
  {
    id: "london",
    name: "London",
    description: "The UK's vibrant capital city offers world-class universities, diverse neighborhoods, and unmatched cultural experiences. Home to major visa processing centers and international communities.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Premium Lounge",
        address: "2nd Floor, 12-13 St. James's Square, London SW1Y 4LB",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 8:30 AM - 5:30 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Premium services", "Priority processing"]
      },
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Core Centre London",
        address: "Victory House, 170 Tottenham Court Road, London W1T 7HA",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - London",
        address: "66 Wilson Street, London EC2A 2BT",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:00 AM - 4:00 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Premium lounge", "Mobile biometrics", "Prime time appointments"]
      },
      {
        name: "TLScontact UK Visa Application Centre - London",
        address: "19 Eastbourne Terrace, London W2 6LG",
        phone: "+44 (0)203 684 5691",
        website: "https://uk.tlscontact.com",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Schengen visa applications", "Document verification", "Biometric collection"]
      }
    ],
    accommodation: [
      {
        name: "The Savoy",
        type: "hotel",
        priceRange: "£££££",
        description: "Iconic luxury hotel on the River Thames with elegant rooms and world-class dining.",
        rating: 4.7,
        website: "https://www.thesavoylondon.com/",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Restaurant", "Fitness center", "Room service", "Airport shuttle", "Spa"]
      },
      {
        name: "Wombat's City Hostel London",
        type: "hostel",
        priceRange: "£",
        description: "Modern hostel with private rooms and dormitories, close to Tower Bridge and public transport.",
        rating: 4.3,
        website: "https://www.wombats-hostels.com/london",
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        amenities: ["Free Wi-Fi", "Shared kitchen", "Bar", "Laundry facilities", "24-hour reception"]
      },
      {
        name: "SACO The Cannon",
        type: "apartment",
        priceRange: "£££",
        description: "Stylish serviced apartments in the City of London, perfect for extended stays.",
        rating: 4.5,
        website: "https://www.sacoapartments.com/the-cannon/",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Gym", "Laundry facilities", "Air conditioning"]
      },
      {
        name: "urbanest King's Cross",
        type: "student",
        priceRange: "££",
        description: "Modern student accommodation near King's Cross Station and major universities.",
        rating: 4.2,
        website: "https://uk.urbanest.com/locations/kings-cross/",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Study spaces", "Gym", "Communal kitchen", "Social events", "Bike storage"]
      }
    ]
  },
  {
    id: "manchester",
    name: "Manchester",
    description: "A vibrant city in Northern England known for its industrial heritage, music scene, and prestigious universities. Popular with international students and professionals.",
    image: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Manchester",
        address: "Ground Floor, 2 Piccadilly Place, Manchester M1 3BG",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - Manchester",
        address: "Suite 122, 2nd Floor, Sunlight House, Quay Street, Manchester M3 3JZ",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:30 AM - 4:30 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Document legalization", "Premium lounge", "Courier services"]
      },
      {
        name: "TLScontact UK Visa Application Centre - Manchester",
        address: "1 Auburn Street, Manchester M1 3NL",
        phone: "+44 (0)203 684 5691",
        website: "https://uk.tlscontact.com",
        hours: "Monday to Friday: 9:00 AM - 4:00 PM",
        appointmentRequired: true,
        services: ["European visa applications", "Document check", "Photo services", "SMS alerts"]
      }
    ],
    accommodation: [
      {
        name: "The Midland Hotel",
        type: "hotel",
        priceRange: "£££",
        description: "Historic hotel in the heart of Manchester with elegant rooms and excellent dining options.",
        rating: 4.4,
        website: "https://www.themidlandhotel.co.uk/",
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Fitness center", "Room service"]
      },
      {
        name: "Selina NQ1 Manchester",
        type: "hostel",
        priceRange: "£",
        description: "Trendy hostel in the Northern Quarter with a mix of dormitories and private rooms.",
        rating: 4.1,
        website: "https://www.selina.com/uk/manchester/",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        amenities: ["Free Wi-Fi", "Bar", "Co-working space", "Events", "24-hour reception"]
      },
      {
        name: "CitySuites Manchester",
        type: "apartment",
        priceRange: "££",
        description: "Luxury serviced apartments in the city center, ideal for longer stays.",
        rating: 4.6,
        website: "https://www.citysuites.com/",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Pool", "Gym", "Concierge service"]
      },
      {
        name: "Unite Students Manchester Piccadilly",
        type: "student",
        priceRange: "££",
        description: "Modern student accommodation in central Manchester, close to universities and amenities.",
        rating: 4.0,
        website: "https://www.unitestudents.com/manchester/piccadilly-point",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        amenities: ["Free Wi-Fi", "Study areas", "Social spaces", "Laundry", "Bike storage", "24-hour security"]
      }
    ]
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    description: "Scotland's historic capital combines medieval charm with a cosmopolitan atmosphere. Home to world-class universities and a thriving international community.",
    image: "https://images.unsplash.com/photo-1596470668635-8d649e995d49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Edinburgh",
        address: "3rd Floor, 40 Torphichen Street, Edinburgh EH3 8JB",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - Edinburgh",
        address: "1 Lochrin Square, 92 Fountainbridge, Edinburgh EH3 9QA",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:30 AM - 4:30 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Prime time appointments", "Courier return", "Document translation"]
      }
    ],
    accommodation: [
      {
        name: "The Balmoral Hotel",
        type: "hotel",
        priceRange: "£££££",
        description: "Iconic luxury hotel in the heart of Edinburgh with stunning views of the castle.",
        rating: 4.8,
        website: "https://www.roccofortehotels.com/hotels-and-resorts/the-balmoral-hotel/",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Michelin-starred restaurant", "Spa", "Fitness center", "Concierge service"]
      },
      {
        name: "Castle Rock Hostel",
        type: "hostel",
        priceRange: "£",
        description: "Lively hostel with views of Edinburgh Castle, offering dormitories and private rooms.",
        rating: 4.3,
        website: "https://www.scotlandshostels.com/hostels/castle-rock/",
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        amenities: ["Free Wi-Fi", "Communal kitchen", "Lounge", "Laundry facilities", "Walking tours"]
      },
      {
        name: "SACO Edinburgh - Royal Garden Apartments",
        type: "apartment",
        priceRange: "£££",
        description: "Elegant serviced apartments in New Town, ideal for longer stays and families.",
        rating: 4.5,
        website: "https://www.sacoapartments.com/edinburgh/royal-garden-apartments/",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Weekly housekeeping", "Garden views"]
      },
      {
        name: "Canal Point Student Accommodation",
        type: "student",
        priceRange: "££",
        description: "Modern student housing near Edinburgh University and the city center.",
        rating: 4.2,
        website: "https://www.studentroost.co.uk/accommodation/edinburgh/canal-point",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Study spaces", "Social areas", "On-site gym", "Bike storage", "24/7 security"]
      }
    ]
  },
  {
    id: "birmingham",
    name: "Birmingham",
    description: "The UK's second-largest city offers a vibrant cultural scene, excellent universities, and a diverse community. A major business hub with strong international connections.",
    image: "https://images.unsplash.com/photo-1571623829781-48b2c8c64139?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Birmingham",
        address: "Ground Floor, Cobalt Square, Hagley Road, Birmingham B16 8QG",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - Birmingham",
        address: "3rd Floor, Brindley Place, Birmingham B1 2JB",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:30 AM - 4:30 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Premium lounge", "Document verification", "SMS notification"]
      },
      {
        name: "BLS International Visa Application Centre - Birmingham",
        address: "Unit 12, Quayside Tower, Broad Street, Birmingham B1 2HF",
        phone: "+44 (0)121 616 2078",
        website: "https://uk.blsspainvisa.com",
        hours: "Monday to Friday: 9:00 AM - 3:00 PM",
        appointmentRequired: true,
        services: ["Spanish visa applications", "Document verification", "Biometric collection", "Photo booth"]
      }
    ],
    accommodation: [
      {
        name: "Hyatt Regency Birmingham",
        type: "hotel",
        priceRange: "£££",
        description: "Modern luxury hotel in the city center with panoramic views and excellent facilities.",
        rating: 4.5,
        website: "https://www.hyatt.com/en-US/hotel/england-united-kingdom/hyatt-regency-birmingham/birmi",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Restaurant", "Pool", "Spa", "Fitness center"]
      },
      {
        name: "Selina Birmingham",
        type: "hostel",
        priceRange: "£",
        description: "Stylish hostel in the Jewellery Quarter with a mix of private rooms and shared dormitories.",
        rating: 4.0,
        website: "https://www.selina.com/uk/birmingham/",
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        amenities: ["Free Wi-Fi", "Bar", "Co-working space", "Social events", "24-hour reception"]
      },
      {
        name: "Staying Cool at Rotunda",
        type: "apartment",
        priceRange: "££",
        description: "Stylish serviced apartments in the iconic Rotunda building with stunning city views.",
        rating: 4.6,
        website: "https://www.stayingcool.com/birmingham/",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Egyptian cotton bedding", "Smart TV", "Nespresso machine"]
      },
      {
        name: "The Heights - Student Accommodation",
        type: "student",
        priceRange: "££",
        description: "Modern student housing close to the University of Birmingham and city center.",
        rating: 4.1,
        website: "https://www.unitestudents.com/birmingham/the-heights",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Study spaces", "Common room", "On-site laundry", "Bike storage", "24/7 security"]
      }
    ]
  },
  {
    id: "glasgow",
    name: "Glasgow",
    description: "Scotland's largest city offers a rich cultural heritage, world-class education, and a friendly atmosphere. Known for its architecture, music scene, and innovative spirit.",
    image: "https://images.unsplash.com/photo-1587376443781-2d4cc344be4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Glasgow",
        address: "2nd Floor, 14 St. Vincent Place, Glasgow G1 2DH",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - Glasgow",
        address: "6th Floor, The Beacon, 176 St Vincent Street, Glasgow G2 5SG",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:30 AM - 4:30 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Document legalization", "Premium services", "Form-filling assistance"]
      }
    ],
    accommodation: [
      {
        name: "Kimpton Blythswood Square Hotel",
        type: "hotel",
        priceRange: "££££",
        description: "Luxury hotel in a Georgian townhouse with elegant rooms and a renowned spa.",
        rating: 4.7,
        website: "https://www.kimptonblythswoodsquare.com/",
        image: "https://images.unsplash.com/photo-1551599122-a5039f6a68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
        amenities: ["Free Wi-Fi", "Restaurant", "Spa", "Fitness center", "Room service"]
      },
      {
        name: "Euro Hostel Glasgow",
        type: "hostel",
        priceRange: "£",
        description: "Budget-friendly hostel in the city center, offering dormitories and private rooms.",
        rating: 3.9,
        website: "https://www.eurohostels.co.uk/glasgow",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        amenities: ["Free Wi-Fi", "Bar", "Communal kitchen", "Laundry facilities", "24-hour reception"]
      },
      {
        name: "Native Glasgow",
        type: "apartment",
        priceRange: "££",
        description: "Stylish serviced apartments in a converted Victorian building in the city center.",
        rating: 4.5,
        website: "https://www.nativeplaces.com/property/native-glasgow/",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Weekly housekeeping", "Concierge service"]
      },
      {
        name: "true Glasgow West End",
        type: "student",
        priceRange: "££",
        description: "Modern student accommodation near the University of Glasgow with excellent facilities.",
        rating: 4.2,
        website: "https://www.truestudent.com/glasgow-west-end",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Study spaces", "Cinema room", "Gym", "Games area", "24/7 security"]
      }
    ]
  },
  {
    id: "bristol",
    name: "Bristol",
    description: "A vibrant and creative city in Southwest England known for its independent spirit, street art, and strong maritime heritage. Home to top universities and tech companies.",
    image: "https://images.unsplash.com/photo-1581430908496-a52e3afc1809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    visaOffices: [
      {
        name: "UK Visa and Citizenship Application Centre (UKVCAS) - Bristol",
        address: "Castlemead, Lower Castle Street, Bristol BS1 3AG",
        phone: "+44 (0)300 790 6268",
        website: "https://www.gov.uk/ukvcas",
        hours: "Monday to Friday: 9:00 AM - 5:00 PM",
        appointmentRequired: true,
        services: ["Biometric enrollment", "Document submission", "Standard services"]
      },
      {
        name: "VFS Global UK Visa Application Centre - Bristol",
        address: "Units 3&4, Ground Floor, The Pithay, Bristol BS1 2LZ",
        phone: "+44 (0)203 582 5703",
        website: "https://visa.vfsglobal.com/gbr/en/gbr",
        hours: "Monday to Friday: 8:30 AM - 4:30 PM",
        appointmentRequired: true,
        services: ["Visa applications", "Premium lounge", "Document verification", "SMS notification"]
      }
    ],
    accommodation: [
      {
        name: "The Bristol Hotel",
        type: "hotel",
        priceRange: "£££",
        description: "Contemporary waterfront hotel in the heart of Bristol's harbor district.",
        rating: 4.4,
        website: "https://www.doylecollection.com/hotels/the-bristol-hotel",
        image: "https://images.unsplash.com/photo-1551599122-a5039f6a68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80",
        amenities: ["Free Wi-Fi", "Restaurant", "Fitness center", "Room service", "River views"]
      },
      {
        name: "Kyle Blue - Bristol Harbour Luxury Hostel Boat",
        type: "hostel",
        priceRange: "£",
        description: "Unique hostel accommodation on a converted Dutch barge in Bristol Harbour.",
        rating: 4.5,
        website: "https://www.kyleblue-bristol.co.uk/",
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        amenities: ["Free Wi-Fi", "Shared kitchen", "Lounge area", "Waterfront views", "Central location"]
      },
      {
        name: "SACO Bristol - Broad Quay",
        type: "apartment",
        priceRange: "££",
        description: "Contemporary serviced apartments in a prime waterfront location in central Bristol.",
        rating: 4.6,
        website: "https://www.sacoapartments.com/bristol/broad-quay/",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Fully equipped kitchen", "Weekly housekeeping", "24-hour reception"]
      },
      {
        name: "Host Student Accommodation Bristol",
        type: "student",
        priceRange: "££",
        description: "Modern student accommodation in the heart of Bristol, close to universities.",
        rating: 4.2,
        website: "https://host-students.com/locations/bristol/",
        image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        amenities: ["Free Wi-Fi", "Study spaces", "Common room", "On-site laundry", "Bike storage", "24/7 security"]
      }
    ]
  }
];

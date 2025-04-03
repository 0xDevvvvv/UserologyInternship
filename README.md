# **CryptoWeather Nexus 🌍💰**

### **Author:** Dev Bhagavan  
### **Live Demo:** [userology-internship.vercel.app](https://userology-internship.vercel.app/)  
### **GitHub Repository:** [UserologyInternship](https://github.com/0xDevvvvv/UserologyInternship)  

---

## 📌 **Project Overview**  
**CryptoWeather Nexus** is a modern, multi-page **dashboard** that combines:  
✅ **Real-time cryptocurrency tracking** (BTC, ETH, ADA)  
✅ **Live weather updates** for New York, London, and Tokyo  
✅ **Crypto-related news headlines**  
✅ **Favorites system** for quick access  
✅ **WebSockets for live crypto price updates**  
✅ **Real-time alerts for price fluctuations & weather conditions**  
✅ **Mobile-responsive design with Tailwind CSS**  

This project **demonstrates expertise in Next.js, Redux, API integration, WebSockets, and UI/UX principles**.  

---

## 🛠️ **Tech Stack**  
| **Technology** | **Purpose** |
|---------------|------------|
| **Next.js 15** | Optimized performance with SSR & SSG |
| **React (Hooks)** | Component state management |
| **Redux Toolkit** | Global state & async API calls |
| **WebSockets** | Real-time price updates & alerts |
| **Tailwind CSS** | Modern UI styling & responsiveness |
| **CoinCap API** | Live cryptocurrency data |
| **OpenWeather API** | Real-time weather data |
| **NewsData.io API** | Fetching latest crypto news |
| **Vercel** | Public deployment |

---

## 🚀 **Setup & Installation**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/0xDevvvvv/UserologyInternship.git
cd UserologyInternship
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**  
Create a `.env.local` file and add the required API keys:  
```sh
NEXT_PUBLIC_OPENWEATHERKEY= your openweather api key
NEXT_PUBLIC_NEWSAPIKEY= your newsdata.io api key
```

### **4️⃣ Run the Development Server**  
```sh
npm run dev
```
Then, open **[http://localhost:3000](http://localhost:3000)** in your browser.  

---

## 📖 **Usage Guide**  

### **🏠 Dashboard (Homepage)**
- **Crypto Prices** → Live updates on BTC, ETH, ADA  
- **Weather** → Live temperature, humidity, wind speed  
- **Crypto News** → Latest top 5 headlines  
- **Favorites** → Quickly access saved cryptos & cities  

### **💰 Crypto Details Page (`/crypto/:name`)**  
- **Historical price trends**  
- **Live price updates (WebSocket)**  
- **Market Cap & 24h price changes**  
- **Favorite button** to save cryptos  

### **🌍 City Details Page (`/weather/:city`)**  
- **Weather history (charts & tables)**  
- **Extended details (feels-like temp, UV index, etc.)**  
- **Favorite button** to save cities  

### **🔔 Real-Time Notifications**  
- **Crypto Price Alerts** when a coin’s price changes significantly  
- **Simulated Weather Alerts** via WebSockets  

---

## 🎨 **Design Decisions**  



### **2️⃣ WebSockets for Real-time Data**  
- **CoinCap WebSocket** provides **instant price updates**  
- **Simulated WebSocket** sends fake weather alerts  

### **3️⃣ Redux Toolkit for State Management**  
- **Global state for crypto & weather data**  
- **Favorites stored persistently**  

### **4️⃣ Tailwind CSS for Modern UI**  
- **Custom themes & utility-based styling**  
- **Fully responsive across all devices**  

### **5️⃣ API Integration Strategy**  
- **CoinCap API** → Fetches **live crypto market data**  
- **OpenWeather API** → Provides **real-time weather conditions**  
- **NewsData.io API** → Fetches **crypto-related news**  

---

## 📌 **Features Implemented**  
✅ **Dynamic Routing:** `/crypto/:name` & `/weather/:city`  
✅ **Real-time WebSocket updates**  
✅ **Favorites management** (Crypto & Cities)   
✅ **Graceful handling of API errors**  

---




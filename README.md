# AjoProtocol 💸

**Decentralized Community Savings (ROSCA) for the Nigerian Market**

## 🌍 Overview

AjoProtocol is a trustless, decentralized Rotating Savings and Credit Association (ROSCA) built on the Stellar network.

In Nigeria and across Africa, informal savings circles (Ajo, Esusu, Adashe) are a primary way people access bulk capital without traditional banks. However, these circles rely heavily on the centralized trust of a single administrator. If the admin mismanages funds or a member defaults, the entire circle collapses.

**AjoProtocol removes human error and fraud by hardcoding the pooling, rotation, and payout logic into Soroban smart contracts**, while providing a seamless, Web2-style mobile experience for the users.

## 🏗️ Architecture & Tech Stack

This project is built as a monorepo containing three core pillars:

1. **Smart Contracts (`/contracts`):** Written in **Soroban (Rust)**. Handles the immutable logic of the ROSCA (locking deposits, validating timestamps, distributing the pooled USDC/NGNC to the current month's winner).
2. **Backend API (`/api`):** Written in **Express.js / Node.js**. Acts as an off-chain indexer and management layer. It handles user KYC verifications, SMS/WhatsApp contribution reminders, and fiat on/off-ramp API integrations (e.g., via Yellow Card or MoneyGram).
3. **Mobile Client (`/mobile`):** Written in **React Native (Expo)**. A low-data, mobile-first interface where users can join circles, connect their Stellar wallets (like Freighter or Lobstr), and track their payouts.

## 📂 Repository Structure

```text
ajo-protocol/
├── contracts/                  # Soroban Rust Smart Contracts
│   ├── ajo_core/               # Main ROSCA logic (pooling, payouts)
│   ├── ajo_factory/            # Factory contract to deploy new circles
│   └── Makefile                # Build and test commands for Soroban
├── api/                        # Express.js Backend
│   ├── src/
│   │   ├── controllers/        # Route logic
│   │   ├── models/             # Database schemas (User profiles, Circle metadata)
│   │   ├── routes/             # API endpoints
│   │   └── services/           # Off-chain workers (SMS reminders, Stellar SDK listeners)
│   ├── package.json
│   └── .env.example
├── mobile/                     # React Native App
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── screens/            # App screens (Home, Circle Details, Wallet)
│   │   ├── utils/              # Stellar SDK helpers for signing transactions
│   │   └── App.tsx             # Entry point
│   ├── package.json
│   └── app.json
└── README.md

```

## ⚙️ Smart Contract Mechanics (How it Works)

1. **Initialization:** A user creates a new circle (e.g., 5 members, 10 USDC per week). The `ajo_factory` deploys a new isolated contract for this circle.
2. **Commitment Phase:** Members join the contract. The contract strictly accepts exactly 5 participants.
3. **Lock & Pool:** Every week, members deposit their 10 USDC into the contract.
4. **Disbursement:** Once all 50 USDC is pooled, the Soroban contract automatically transfers the total to that week's designated recipient.
5. **Default Mitigation:** (Bounty Goal) Implement a slashing condition or reputation score if a member fails to deposit after receiving their early payout.

## 🚀 Getting Started (For Contributors)

### Prerequisites

* [Node.js](https://www.google.com/search?q=https://nodejs.org/) (v18+)
* [Rust](https://www.google.com/search?q=https://www.rust-lang.org/tools/install) (latest stable)
* [Soroban CLI](https://www.google.com/search?q=https://soroban.stellar.org/docs/getting-started/setup)
* [Expo CLI](https://www.google.com/search?q=https://docs.expo.dev/get-started/installation/)

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/ajo-protocol.git
cd ajo-protocol

```


2. **Install Backend Dependencies:**
```bash
cd api
npm install
npm run dev

```


3. **Install Mobile Dependencies:**
```bash
cd ../mobile
npm install
npx expo start

```


4. **Build the Soroban Contracts:**
```bash
cd ../contracts
make build
make test

```



## 🤝 Contributing & Open Bounties

We are actively building this for the Stellar Open Source Bounty Program! Check the `Issues` tab for tasks labeled `good first issue` or `bounty`.

**Current priorities:**

* **[Smart Contracts]** Implementing the round-robin selection logic in Rust.
* **[Backend]** Setting up the Express cron jobs to ping the Stellar Horizon API for missed deposits.
* **[Frontend]** Designing the "Circle Dashboard" UI in React Native.

Please read our `CONTRIBUTING.md` before submitting a Pull Request. All PRs must pass the Soroban test suite and standard ESLint checks.

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.


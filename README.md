# 💸 AjoProtocol

AjoProtocol is an open-source, trustless community savings platform (ROSCA) that connects individuals and small business owners directly. By enabling transparent pool tracking, immutable payout schedules, and seamless crypto-backed contributions, we are cutting out the risk of human administrators. This directly improves access to finance for MSME growth, building a reliable working capital ecosystem for local markets.

This repository is a monorepo managed with `pnpm` workspaces and orchestrated by TurboRepo.

### 🚀 Tech Stack

* **Architecture:** pnpm workspaces + TurboRepo
* **Frontend (apps/mobile):** React Native + Expo + TailwindCSS (NativeWind)
* **Backend (apps/api):** Node.js, Express, TypeScript
* **Smart Contracts (apps/contracts):** Soroban (Rust) & Stellar SDK
* **Language:** TypeScript (Strict Mode) & Rust

### ✨ Features

* **For Members:** Browse public savings circles, join with a linked Stellar wallet, make weekly/monthly contributions via stablecoins, and track your exact payout date.
* **For MSMEs & Traders:** Access bulk financing without traditional banking collateral. Draw down your payout directly to a local bank account or use it to pay verified wholesalers.
* **Trust Layer:** A decentralized reputation system. Members who consistently meet their contribution deadlines build on-chain credit scores, allowing them to join higher-tier pools.
* **Crypto Payments:** Automated fund locking and payouts powered by Soroban smart contracts on the Stellar network for fast, borderless, and tamper-proof transactions.

### ⚡️ Quick Start

#### 1. Prerequisites

Ensure you have the following installed:

* Node.js (v18+)
* Rust (latest stable) & Soroban CLI
* pnpm (v8+)

```bash
# Enable pnpm via corepack
corepack enable
# OR install globally
npm install -g pnpm

```

#### 2. Installation

Clone the repository and install all workspace dependencies:

```bash
git clone https://github.com/YOUR_ORG/ajo-protocol.git
cd ajo-protocol
pnpm install

```

#### 3. Development

Start all applications (Mobile, API, and local Soroban environment) in parallel using TurboRepo:

```bash
pnpm dev

```

**Local Services:**

* 📱 **Mobile App:** Expo Go (Local LAN/Simulator)
* ⚙️ **Backend API:** `http://localhost:3001`
* 📜 **RPC/Soroban:** `http://localhost:8000`

### 📂 Project Structure

```text
ajo-protocol/
├── apps/
│   ├── mobile/            # React Native Frontend (Member UI)
│   ├── api/               # Core Backend API (Express)
│   └── contracts/         # Soroban Rust Smart Contracts
│
├── packages/
│   ├── types/             # Shared TS interfaces & DTOs
│   ├── config/            # Shared configs (tsconfig, eslint)
│   └── ui/                # Shared UI logic/components 
│
└── turbo.json             # Build pipeline orchestration

```

### 📜 Monorepo Commands

Run these scripts from the root directory:

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts all apps in development mode. |
| `pnpm build` | Builds all apps and packages for production. |
| `pnpm lint` | Runs ESLint across the entire monorepo. |
| `pnpm test` | Runs test suites across all packages and Rust contracts. |
| `pnpm clean` | Clears Turbo caches and build artifacts. |

### 📦 Adding Dependencies

Because this is a workspace, you must specify where packages belong.

**Add to a specific app:**

```bash
cd apps/api && pnpm add stellar-sdk

```

**Link an internal package:**

```bash
cd apps/mobile && pnpm add "@ajoprotocol/types@workspace:*" -D

```

### 🤝 Contributing

We love contributions! AjoProtocol is community-driven, and we welcome developers of all skill levels to help build the future of decentralized savings.

1. Read our `Contributing Guide` to understand our workflow.
2. Review the `Code of Conduct` to keep our community approachable and respectable.

**Important Rules:**

* Always run `pnpm lint` and `make test` (for contracts) before pushing.
* Keep shared logic inside the `packages/` directory.
* Do not manually edit `node_modules`.

### 🛠 Troubleshooting

If you experience module errors after switching branches, clear your workspace:

```bash
rm -rf node_modules
pnpm install

```

### 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

Built with ❤️ by the AjoProtocol Community.

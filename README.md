# pessimism-hardhat

> A hardhat template that gets you started with development on the pessimism network

## Getting started

Clone the repository:

```bash
git clone https://github.com/ethereum-pessimism/pessimism-hardhat/
cd pessimism-hardhat
```

Install all of the necessary dependencies:

```bash
npm install
```

Add your private key of your wallet in .env (copy from .env.example). Then you can compile the contract and prepare it for the PVM.

```bash
npm run build
```

After that, you can deploy the contract ABI to the PVM:

```bash
npm run deploy
```

## License


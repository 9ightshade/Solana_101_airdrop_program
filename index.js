const {
 Connection,
 PublicKey,
 clusterApiUrl,
 Keypair,
 LAMPORTS_PER_SOL,
 Transaction,
 Account,
} = require("@solana/web3.js");

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");


const newPair = new Keypair(); // creates a new wallet, both public and secret key stored 

const publicKey = new PublicKey(newPair.publicKey).toString()
const secretKey = newPair.secretKey

// console.log(publicKey);
// console.log(secretKey);

//getting wallet balance

const getWalletBalance = async () => {
  try {
    
    const myWallet = await Keypair.fromSecretKey(secretKey);
    const walletBalance = await connection.getBalance(new PublicKey(myWallet.publicKey));


    console.log(`For wallet address:${myWallet.publicKey.toString()}`);
    console.log(`wallet balance: ${parseInt(walletBalance)/LAMPORTS_PER_SOL}`);

  } catch (error) {
    console.log(error);
  }
}

//airdropping sol to wallet
const airdropSol = async () => {
  
try {
  if (connection) {
  
}
  

} catch (error) {
  console.log(error);
}

}




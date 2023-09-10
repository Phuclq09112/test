import Caver from 'caver-js';
import Web3 from 'web3';
const caver = new Caver('https://api.baobab.klaytn.net:8651/'); // Thay đổi URL nếu cần

const contractAddress = '0x3dde6ED47354B765D479CF0c6b819Dad2F3e176D';

// Định nghĩa ABI của smart contract
const contractABI = [
 {
  inputs: [],
  stateMutability: 'nonpayable',
  type: 'constructor',
 },
 {
  anonymous: false,
  inputs: [
   {
    indexed: false,
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'uint256',
    name: '_types',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'uint256',
    name: '_index',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'string',
    name: '_mgUrl',
    type: 'string',
   },
   {
    indexed: false,
    internalType: 'string',
    name: '_picture',
    type: 'string',
   },
   {
    indexed: false,
    internalType: 'address',
    name: '_ownerId',
    type: 'address',
   },
   {
    indexed: false,
    internalType: 'bool',
    name: '_isActive',
    type: 'bool',
   },
  ],
  name: 'creatNewPiece',
  type: 'event',
 },
 {
  anonymous: false,
  inputs: [
   {
    indexed: false,
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'address',
    name: 'seller',
    type: 'address',
   },
   {
    indexed: false,
    internalType: 'address',
    name: 'buyer',
    type: 'address',
   },
   {
    indexed: false,
    internalType: 'uint256',
    name: 'price',
    type: 'uint256',
   },
  ],
  name: 'exchangePiece',
  type: 'event',
 },
 {
  anonymous: false,
  inputs: [
   {
    indexed: false,
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'uint256',
    name: '_index',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'string',
    name: '_imgUrl',
    type: 'string',
   },
   {
    indexed: false,
    internalType: 'string',
    name: '_picture',
    type: 'string',
   },
  ],
  name: 'giveRandomPieceEvent',
  type: 'event',
 },
 {
  anonymous: false,
  inputs: [
   {
    indexed: false,
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
   {
    indexed: false,
    internalType: 'uint256',
    name: '_price',
    type: 'uint256',
   },
  ],
  name: 'sellPieceEvent',
  type: 'event',
 },
 {
  anonymous: false,
  inputs: [
   {
    indexed: false,
    internalType: 'string',
    name: '_picture',
    type: 'string',
   },
   {
    indexed: false,
    internalType: 'address',
    name: '_address',
    type: 'address',
   },
  ],
  name: 'upgradeNFTBigEvent',
  type: 'event',
 },
 {
  inputs: [
   {
    internalType: 'string',
    name: '',
    type: 'string',
   },
  ],
  name: 'PieceSpecial',
  outputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [],
  name: 'all',
  outputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  name: 'allPiece',
  outputs: [
   {
    internalType: 'uint256',
    name: 'id',
    type: 'uint256',
   },
   {
    internalType: 'uint256',
    name: 'types',
    type: 'uint256',
   },
   {
    internalType: 'uint256',
    name: 'index',
    type: 'uint256',
   },
   {
    internalType: 'string',
    name: 'imgUrl',
    type: 'string',
   },
   {
    internalType: 'string',
    name: 'picture',
    type: 'string',
   },
   {
    internalType: 'address',
    name: 'ownerId',
    type: 'address',
   },
   {
    internalType: 'bool',
    name: 'isActive',
    type: 'bool',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
  ],
  name: 'buyPiece',
  outputs: [],
  stateMutability: 'payable',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '_types',
    type: 'uint256',
   },
   {
    internalType: 'string',
    name: '_imgUrl',
    type: 'string',
   },
   {
    internalType: 'string',
    name: '_picture',
    type: 'string',
   },
   {
    internalType: 'uint256',
    name: '_index',
    type: 'uint256',
   },
  ],
  name: 'createPiece',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'address',
    name: '_address',
    type: 'address',
   },
  ],
  name: 'getAllPieceByAddress',
  outputs: [
   {
    components: [
     {
      internalType: 'uint256',
      name: 'id',
      type: 'uint256',
     },
     {
      internalType: 'uint256',
      name: 'types',
      type: 'uint256',
     },
     {
      internalType: 'uint256',
      name: 'index',
      type: 'uint256',
     },
     {
      internalType: 'string',
      name: 'imgUrl',
      type: 'string',
     },
     {
      internalType: 'string',
      name: 'picture',
      type: 'string',
     },
     {
      internalType: 'address',
      name: 'ownerId',
      type: 'address',
     },
     {
      internalType: 'bool',
      name: 'isActive',
      type: 'bool',
     },
    ],
    internalType: 'struct CollectionBeelieve.Piece[]',
    name: '',
    type: 'tuple[]',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [],
  name: 'getAllPieceForSale',
  outputs: [
   {
    components: [
     {
      internalType: 'uint256',
      name: 'id',
      type: 'uint256',
     },
     {
      internalType: 'uint256',
      name: 'types',
      type: 'uint256',
     },
     {
      internalType: 'uint256',
      name: 'index',
      type: 'uint256',
     },
     {
      internalType: 'string',
      name: 'imgUrl',
      type: 'string',
     },
     {
      internalType: 'string',
      name: 'picture',
      type: 'string',
     },
     {
      internalType: 'address',
      name: 'ownerId',
      type: 'address',
     },
     {
      internalType: 'bool',
      name: 'isActive',
      type: 'bool',
     },
    ],
    internalType: 'struct CollectionBeelieve.Piece[]',
    name: '',
    type: 'tuple[]',
   },
   {
    internalType: 'uint256[]',
    name: '_price',
    type: 'uint256[]',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [],
  name: 'giveRandomPiece',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  name: 'idForPrice',
  outputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  name: 'idForSale',
  outputs: [
   {
    internalType: 'bool',
    name: '',
    type: 'bool',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'address',
    name: '',
    type: 'address',
   },
  ],
  name: 'ownerByAddressCount',
  outputs: [
   {
    internalType: 'uint256',
    name: '',
    type: 'uint256',
   },
  ],
  stateMutability: 'view',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'uint256',
    name: '_id',
    type: 'uint256',
   },
   {
    internalType: 'uint256',
    name: '_price',
    type: 'uint256',
   },
  ],
  name: 'sellPiece',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
 },
 {
  inputs: [
   {
    internalType: 'string',
    name: '_picture',
    type: 'string',
   },
   {
    internalType: 'address',
    name: '_address',
    type: 'address',
   },
  ],
  name: 'upgradeNFTBig',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
 },
];

const contract = new caver.klay.Contract(contractABI, contractAddress);

export async function getDataFromContract() {
 try {
  const data = await contract.methods.getAllPieceForSale().call();
  return data;
 } catch (error) {
  console.error('Error getting data from contract:', error);
 }
}

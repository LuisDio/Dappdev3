import Web3 from 'web3';

// our local copy of web3 taking injected copy of metamask provider 
const web3 = new Web3(window.web3.currentProvider);

export default web3;

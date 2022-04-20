import json
from flask import Flask, Response, request, jsonify
from marshmallow import Schema, fields, ValidationError
from web3 import Web3
from eth_tester import PyEVMBackend
from web3.providers.eth_tester import EthereumTesterProvider
import sys
import time
from solcx import compile_source
# web3.py instance
# w3 = Web3(EthereumTesterProvider(PyEVMBackend()))
# Instantiate and deploy contract
# celo price Cusd
CELO_PRICE = 3.14

# delta : time intervals of the option - in terms of mon
deltas_mo = [0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20, 25, 30]

# strike prices in Cusd 20 cents increments above and below the current price
strike_prices = [CELO_PRICE + 0.02, CELO_PRICE + 0.04, CELO_PRICE + 0.06, CELO_PRICE + 0.08, CELO_PRICE + 0.10]


w3 = Web3(EthereumTesterProvider())
def compile_source_file(file_path):
   with open(file_path, 'r') as f:
      source = f.read()

   return compile_source(source, 
        # optimize=True,
        output_values=['abi', 'bin']
   )

def deploy(w3, contract_interface):
   # Instantiate and deploy contract
   return w3.eth.contract(
      abi=contract_interface['abi'],
      bytecode=contract_interface['bin']
   ).deploy()


# load the contract
contract_interface = compile_source_file('./OptionsMarket.sol')
contract_instance = deploy(w3, contract_interface)
print (contract_instance.contractAddress)

   



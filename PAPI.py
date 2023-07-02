#!/usr/bin/python3

import requests
from pyModbusTCP.client import ModbusClient
import mysql.connector

dados = {"brilho": "", "remoto": "", "status": "OK", "MySQL": ""}
dados_teste_papi = [False, True, False, False, False, True, True]


def mysql_check():
    config = {
        'user': 'root',
        'password': 'PAPIServer',
        'host': '10.80.33.47',
        'database': 'Controle_PAPI'
    }

    try:
        conn = mysql.connector.connect(**config)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM Login")

        if len(cursor.fetchall()) > 0:
            dados["MySQL"] = "OK"

        cursor.close()
        conn.close()
    except mysql.connector.Error:
        dados["MySQL"] = "Falha"


def papi_remote_get_data():
    c = ModbusClient(host="10.82.51.13", auto_open=True, auto_close=True)
    regs = c.read_discrete_inputs(0, 7)

    return regs


def check_combinations(papi_data):
    if papi_data:
        dados["remoto"] = papi_data[6]
        if papi_data[1]:
            if papi_data[2]:
                dados["brilho"] = "2"
            elif papi_data[3]:
                dados["brilho"] = "3"
            elif papi_data[4]:
                dados["brilho"] = "4"
            elif papi_data[5]:
                dados["brilho"] = "5"
            else:
                dados["brilho"] = "1"
        else:
            dados["brilho"] = "0"
    else:
        dados["status"] = "Não foi Possível Acessar o PLC"


def get_dados():
    mysql_check()
    check_combinations(papi_remote_get_data())

    return dados


response = requests.post(
    'http://localhost:8000/api/managePAPIStatusData', json=get_dados())
print(response.content)

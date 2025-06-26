import requests
from bs4 import BeautifulSoup
import csv 

url = 'https://pokemondb.net/pokedex/all'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

table = soup.find('table', {'id': 'pokedex'})
rows = table.find_all('tr')


with open('pokemon_info.csv', mode = 'w', newline = '', encoding = 'utf-8') as csvfile:
    writer = csv.writer(csvfile)

    writer.writerow(['#', 'name', 'type1', 'type2', 'BST', 'HP', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed'])

    for row in rows[1:]:

        name = row.select_one('td.cell-name')
        form_name = name.select_one('small.text-muted')

        name = f"{name.select_one('a.ent-name').text.strip()} ({form_name.text.strip()})" if form_name else name.select_one('a.ent-name').text.strip()

        types = [a.text.strip().lower() for a in row.select('td.cell-icon a.type-icon')]
        type1 = types[0]
        type2 = types[1] if len(types) > 1 else ''
        bst = int(row.select_one('td.cell-total').text.strip())

        stats = [int(td.text.strip()) for td in row.select('td.cell-num') if 'cell-total' not in td['class']]


        writer.writerow([stats[0], name, type1, type2, bst] + stats[1:])
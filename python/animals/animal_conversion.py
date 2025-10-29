import csv
from pathlib import Path
# import sqlite3

# connection = sqlite3.connect('../../animal.sql')

# cursor = connection.cursor()

file = Path(__file__).parent / "animal.csv"

with file.open("r") as file:
  csvFile = csv.reader(file)
  for lines in csvFile:
    print(lines)

# contents = csv.reader(file)

# print(contents)


# insert_record = "INSERT INTO Animals (species, subspecies, binomial) VALUES (?, ?, ?);"
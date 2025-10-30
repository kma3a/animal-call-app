import csv
from pathlib import Path
import sqlite3


db = Path(__file__).parents[2] / "animal.sql"

connection = sqlite3.connect(db)

cursor = connection.cursor()

# needed to get the file path so we could open the file
file = Path(__file__).parent / "location.csv"

insert_record = "INSERT INTO Locations (name, GPSNorth, GPSWest) VALUES (?, ?, ?);"

with file.open("r") as file:
  csvFile = csv.reader(file)
  cursor.executemany(insert_record, csvFile),

select_all = "SELECT * FROM Locations;"
rows = cursor.execute(select_all).fetchall()

for r in rows:
  print(r)

connection.commit()

connection.close()
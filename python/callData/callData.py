import csv
from pathlib import Path
import sqlite3
import re


db = Path(__file__).parents[2] / "animal.sql"

connection = sqlite3.connect(db)

cursor = connection.cursor()

# ## get animal ids and save for later
animal_dictionary = {}

def get_animals():
  select_animals = "SELECT id, subspecies FROM Animals;"
  animal_rows = cursor.execute(select_animals).fetchall()
  for animal in animal_rows:
    animal_dictionary[animal[1]] = animal[0]

# ## get location ids and save for later
location_dictionary = {}

def get_locations():
  select_location = "SELECT id, name FROM Locations;"
  location_rows = cursor.execute(select_location).fetchall()
  for location in location_rows:
    location_dictionary[location[1]] = location[0]


def insert_calls(callDataId, animalId, callCount):
  insert_call = "INSERT INTO Calls (callData, animal, callCount) VALUES (?, ?, ?);"
  cursor.execute(insert_call, [callDataId, animalId, callCount])


def get_callData():
  # needed to get the file path so we could open the file
  file = Path(__file__).parent / "callData.csv"

  insert_callData = """INSERT INTO CallData (
                        date, location,  startTime,  
                        endTime, sunsetTime, isMoonVisible, 
                        moonPhase, percentIlluminated, windCodeStart, 
                        windCodeEnd, skyCodeStart, skyCodeEnd, 
                        tempFStart, tempFEnd, 
                        RHStart, RHEnd, microphone )
                      VALUES (
                        ?, ?, ?,
                        ?, ?, ?, 
                        ?, ?, ?, 
                        ?, ?, ?, 
                        ?, ?,
                        ?, ?, ?
                      );"""

  select_callData = "SELECT id FROM CallData WHERE date = ? AND startTime = ? AND location = ?;"
  
  with file.open("r") as file:
    csvFile = csv.DictReader(file)
    for data in csvFile:
      date_new = re.sub(r"(\d+)/(\d+)/(\d+)", r"20\3-\1-\2", data["Date"])
      cursor.execute(insert_callData, [date_new, location_dictionary[data["Location"]], data["Begin Time"], data["End Time"], data["Sunset Time"], 
        data["Is Moon Visible"] == "Y", data["Moon Phase"], data["Percent Illuminated"], data["Wind Code Start"],
        data["Wind Code End"], data["Sky Code Start"], data["Sky Code End"], data["Start Temp F"], data["End Temp F"],
        data["RH Start"], data["RH End"], data["Mic"]]
      )
      id = cursor.execute(select_callData, [date_new, data["Begin Time"], location_dictionary[data["Location"]]]).fetchall()[0][0]
      for animal in animal_dictionary.keys():
        if data[animal] != "":
          insert_calls(id, animal_dictionary[animal], data[animal]) 
      


get_animals()
# print(animal_dictionary)

get_locations()
# print(location_dictionary)

get_callData()

connection.commit()

connection.close()
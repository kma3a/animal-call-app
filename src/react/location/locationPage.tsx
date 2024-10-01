import { useEffect, useState } from 'react';
import { AddItems } from '../addItem/addItems';
import { Animals } from '../../data/animal.schema';
import { List } from '../list/list';

const locationColumns = ["name", "GPSNorth", "GPSWest"];

const LocationPage = () => {
  const [showAdd, setshowAdd] = useState(false);
  const [LocationList, setLocationList] = useState();

  const  togglesetshowAdd =  () => {
    setshowAdd(!showAdd);
  }

  const updateLocationList = (list?: Animals[]): void => {
    const setList = list ?? window?.electron?.sendSync('get-locations')
    setLocationList(setList);
  }
  const addLocation = (newAnimal: object) => {
    updateLocationList(window?.electron?.sendSync('add-location', newAnimal));
    togglesetshowAdd();
  }

  const deleteLocation = (id: number) => {
    updateLocationList(window?.electron?.sendSync('delete-location', id)); 
  }

  const updateLocation = (id: number, param: object) => {
    updateLocationList(window?.electron?.sendSync('update-location', {id: id, param: param})); 
  }

  useEffect(() => {
    updateLocationList(); 
  }, [location.href]);
  
  return <>
      { showAdd ? <AddItems onSubmit={addLocation}  columnList={locationColumns} cancelAction={togglesetshowAdd}/> : <button onClick={togglesetshowAdd}>Add Location</button>}
      { LocationList ? <List list={LocationList} className='locations' onDelete={deleteLocation} onUpdate={updateLocation} columnList={locationColumns}/> : <div> There is currently no locations found</div>}
    </>;
}

export {
  LocationPage,
}
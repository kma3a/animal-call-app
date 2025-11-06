
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

interface BodyRowsProps {
  data: {date: string},
}

interface TableDisplayProps {
  data: {date: string}[],
  animalList: {name: string}[],
}

const TableDisplay = ({data, animalList}: TableDisplayProps) => {

  const BodyRows = ({data}: BodyRowsProps) => {
    return <TableRow>
      <TableCell>{data.date}</TableCell>
      {animalList.map((animal) => <TableCell align="right">{data[animal.name.replaceAll(" ", "")] | 0}</TableCell>)}
  
    </TableRow>;
  }

  return <>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Date
            </TableCell>
            { animalList.map((animal) => <TableCell align="right">{animal.name}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          { data.map((row) => <BodyRows data={row} animalList={animalList}/>) }
        </TableBody>
      </Table>
  </>;
}

export {
  TableDisplay
}
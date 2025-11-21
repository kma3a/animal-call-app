
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import styles from './tableDisplay.styles';

interface BodyRowsProps {
  data: {total: number},
}

interface TableDisplayProps {
  data: {total: number}[],
  animalList: {name: string}[],
  firstCell: {title: string, key: string}
}

const TableDisplay = ({data, animalList, firstCell}: TableDisplayProps) => {

  const BodyRows = ({data}: BodyRowsProps) => {
    return <TableRow>
      <TableCell>{data[firstCell.key]}</TableCell>
      {animalList.map((animal) => <TableCell align="right">{data[animal.name.replaceAll(" ", "")] | 0}</TableCell>)}
      <TableCell>{data.total}</TableCell>
  
    </TableRow>;
  }

  return <>
    <Table sx={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {firstCell.title}
            </TableCell>
            { animalList.map((animal) => <TableCell align="right">{animal.name}</TableCell>)}
            <TableCell>Total</TableCell>
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
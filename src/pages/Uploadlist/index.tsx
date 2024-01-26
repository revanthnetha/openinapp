import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  Link,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  MenuItem,
  Select,
  Chip,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Technology',
  'Fashion',
  'Food',
  'Travel',
  'Sports',
  'Music',
  'Art',
  'Health',
  'Education',
  'Finance',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Uploadlist = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const array = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
        setFileUploaded(true);
      };

      fileReader.readAsText(file);
    }
  };

  const handleChangepop = (event, rowIndex) => {
    const {
      target: { value },
    } = event;
    setPersonName((prevPersonName) => {
      const updatedPersonName = [...prevPersonName];
      updatedPersonName[rowIndex] = typeof value === 'string' ? [value] : value;
      return updatedPersonName;
    });
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <Box bgcolor={'#FFFFFF'} width="100%" height={'100%'} alignSelf={'center'}>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          paddingTop: '10%',
        }}
      >
        <Box
          width={'30px'}
          height={'20px'}
          alignSelf={'center'}
          alignContent={'center'}
          pb={'50px'}
        >
          <img
            src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706260721/Openinapp/Microsoft_Office_Excel__2019_present_1_i3rguc.svg"
            alt="excel"
          />
        </Box>
        <Box
          display={'flex'}
          fontFamily={'Figtree'}
          fontWeight={{ sm: 250, md: 320, lg: 400 }}
          fontSize={{ sm: '14px', md: '16px' }}
          lineHeight={{ sm: '20px', md: '24px' }}
          alignSelf={'center'}
          alignContent={'center'}
          pb={{ base: '30px', md: '100px' }}
        >
          <Typography textAlign={"center"} color={"#999CA0"} pr={"3px"}>
            {fileUploaded
              ? `File successfully uploaded:`
              : "Drop your excel sheet here or "}
          </Typography>
          {fileUploaded ? (
            <span style={{ fontWeight: "bold", color: "#605BFF" }}> {file.name}</span>
          ) : (
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <Link
              style={{ display: 'flex', textTransform: 'none', cursor: "pointer" }}
              onClick={() => document.getElementById('csvFileInput')?.click()}
              underline="none"
            >
              <Link style={{ display: 'flex', textTransform: 'none', cursor: "pointer" }}  underline="none" color={'#605BFF'}>
                browse
              </Link>
              <Input
                type={'file'}
                id={'csvFileInput'}
                accept={'.csv'}
                onChange={handleOnChange}
                style={{ display: 'none' }}
              />
            </Link>
          </form>
           )}
        </Box>
        <Box
          alignSelf={'center'}
          alignContent={'center'}
          fontFamily={'Figtree'}
          fontWeight={{ sm: 420, md: 520, lg: 600 }}
          fontSize={{ sm: '14px', md: '16px' }}
          width={{ sm: '200px', md: '300px', lg: '400px' }}
          height={{ sm: '24px', md: '30px', lg: '40px' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <Button
              style={{
                textTransform: 'none',
                display: 'flex',
                textDecorationColor: 'white',
                backgroundColor: '#605BFF',
                cursor:"pointer"
              }}
              fullWidth
              onClick={(e) => {
                handleOnSubmit(e);
              }}
              
            >
              <img
                src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1706264438/Openinapp/Icon_wpqnnh.png"
                alt="upload"
              />
              <Typography color={'white'}>Upload</Typography>
            </Button>
          </form>
        </Box>
        <br />

        <table style={{ color: 'black', fontFamily: 'Figtree' }}>
          <thead>
            <tr key={'header'}>
              {headerKeys.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {array.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(item).slice(0, 1).map((val) => (
                  <td key={val}>{val}</td>
                ))}
                {Object.values(item).slice(1, 2).map((val) => (
                  <td key={val}>
                    <Link style={{ cursor: 'pointer' }} underline="none">
                      {val}
                    </Link>
                  </td>
                ))}
                {Object.values(item).slice(2, 3).map((val) => (
                  <td key={val}>{val}</td>
                ))}
                <td>
                  <FormControl sx={{ m: 1, minWidth:"200px",maxWidth:"300px" }}>
                    <InputLabel id={`demo-multiple-chip-label-${rowIndex}`}>
                      Select Tags
                    </InputLabel>
                    <Select
                      labelId={`demo-multiple-chip-label-${rowIndex}`}
                      id={`demo-multiple-chip-${rowIndex}`}
                      multiple
                      value={personName[rowIndex] || []}
                      onChange={(event) => handleChangepop(event, rowIndex)}
                      input={
                        <OutlinedInput
                          id={`select-multiple-chip-${rowIndex}`}
                          label="Select Tags"
                        />
                      }
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {Array.isArray(selected) ? (
                            selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))
                          ) : (
                            <Chip key={selected} label={selected} />
                          )}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName[rowIndex] || [], theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </td>
                <td style={{ maxWidth: '100px' }}>
                  {personName[rowIndex] && personName[rowIndex].length > 0 ? (
                    personName[rowIndex].map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        style={{
                          margin: '2px',
                          backgroundColor: '#605BFF',
                          color: 'white',
                          boxSizing: 'border-box',
                        }}
                      />
                    ))
                  ) : (
                    <Typography color="textSecondary">No tags selected</Typography>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
};

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import { useState } from 'react';
import { Button, Input, Textarea, Container, Stack, Grid } from '@mantine/core';

//import { IconSearch } from '@tabler/icons';

//let arr = ["Dağ 1", "Dağ 2", "Dağ 3", "Dağ 4"];



//without return
const kare = (sayi) => sayi*sayi;

let dag = [1,2,3];
let ic=0;

const App = () => {
  const [t_text, setT_text] = useState("");
  const [para, setPara] = useState("");
  const [list, setList] = useState([
    { //object
      id:1,
      title: "Dağ 1",
      par: "Açıklama 1"
    },
    {
      id:2,
      title: "Dağ 2",
      par: "Açıklama 2"
    },
    {
      id:3,
      title: "Dağ 3",
      par: "Açıklama 3"
    },
    {
      id:4,
      title: "Dağ 4",
      par: "Açıklama 4"
    }
  ]);
  const [val, setVal] = useState(11);
  const click = () => {
    console.log("click!", t_text, para);
    setT_text("");
    setPara("");
    const copyList = [
      ...list,
      {
        id: 5,
        title: t_text,
        par: para
      }
    ];
    copyList.push();
    setList(copyList);
  }
  return (
    <Container>
      <h1>Card Creatin Program</h1>
      <Stack>
        <Input.Wrapper label="Input label">
          <Input
          //icon={<IconSearch size={36}/>}
          label="Title"
          placeholder="Your Title Goes Here"
          radius="md"
          value={t_text}
          onChange={(e) => setT_text(e.target.value)}
          />
        </Input.Wrapper>
        

        <Textarea
        placeholder="Your explanatory text Goes Here"
        label="Details"
        value={para}
        onChange={(e) => setPara(e.target.value)}

        //withAsterisk
        />

        <Button variant='outline' onClick={click}>Make a Card with Mantine!</Button>
      </Stack>
      
      <h2>Kartlar</h2>

      <Grid className='Cards'>
        {list.map(({title, par}, i) => (
          <Grid.Col span={4} keys={`index ${i}`}>
            <Card title={title} par={par} i={i}
            click={()=>{
              let copyList =[...list];
              copyList.splice(i,1);
              setList(copyList);
              console.log("klik")
            }}/>
          </Grid.Col>
        ))}
      </Grid>
      
    </Container> 
    );
}

export default App;

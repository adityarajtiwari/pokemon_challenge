import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";
import { Button } from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Grid";
import ModalApp from "./ModalApp";

const gridStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const HomePage = () => {
    const [data, setData] = useState([]);
    const [next, setNext] = useState([]);
    const [prev, setPrev] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
        setNext(data.next);
        setPrev(data.previous);
        setData(data);
    };
    let getNext = async () => {
        const { data } = await axios.get(next);
        setNext(data.next);
        setPrev(data.previous);
        setData(data);
        console.log(data)
    }
    let getPrev = async () => {
        if (prev) {
            const { data } = await axios.get(prev);
            setNext(data.next);
            setPrev(data.previous);
            setData(data);
            console.log(data)
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            {/* for each on data.results */}
            <Button variant="outline" disabled={false} onClick={() => getPrev()}>Prev</Button>
            <Button variant="outline" disabled={false} onClick={() => getNext()}>Next</Button>
            <Grid container spacing={6}>
                {data.results &&
                    data.results.map((item, index) => {
                        let url = item.url.split("pokemon/");
                        url[1] = url[1].replace("/", "");
                        const imagerurl = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${url[1]}.svg`;
                        return (
                            <Grid item xs={3} sx={gridStyle}>
                                <CardBox
                                    key={index}
                                    pokeName={item.name}
                                    id={url[1]}
                                    imagerurl={imagerurl}
                                />
                                <ModalApp id={url[1]} imagerurl={imagerurl} url={item.url} />
                            </Grid>
                        );
                    })}
            </Grid>
            {/* next and prev butoon */}

        </>
    );
};

export default HomePage;

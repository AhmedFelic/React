import React from 'react';

import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Fixture from '../../Components/Fixture/index';
import { TitleBox } from '../../Components/StyledBoxFixture';
import MaterialUIDatePicker from '../../Components/InputDate/index';
import dayjs from 'dayjs';
import { config } from '../../config';

function Fixtures() {
    const [teams, setTeams] = useState([]);
    const [value, setValue] = useState(dayjs(new Date()));
    const [date, setDate] = useState('');

    const handleTeam = (data) => {
        return data.map((el) => ({
            localTeam: el.localTeam.data,
            visitorTeam: el.visitorTeam.data,
            time: el.time.starting_at.time.slice(0, 5),
            date: el.time.starting_at.date,
        }));
    };

    const getData = () => {
        axios
            .get(
                `${config.API_URL}/date/${date}?api_token=${config.API_KEY}&include=localTeam,visitorTeam`
            )
            .then((res) => {
                const data = handleTeam(res.data.data);
                setTeams(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (value?.isValid()) getData();
    }, [date]);

    const handleChange = (newValue) => {
        setValue(newValue);
        setDate(newValue?.format('YYYY-MM-DD'));
    };

    return (
        <>
            <TitleBox>
                <Typography variant='h2'>Fixtures</Typography>
            </TitleBox>

            <MaterialUIDatePicker handleChange={handleChange} value={value} />

            {teams.map((team) => {
                return <Fixture data={team} />;
            })}
        </>
    );
}

export default Fixtures;

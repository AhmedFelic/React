import { Box, Button, Typography, Card, CardMedia } from '@mui/material';
import { nanoid } from 'nanoid/non-secure';

import {
    MainBox,
    InnerBox,
    TeamBox,
    InnerTeamBox,
    StartTimeBox,
    TeamBox2,
    InnerTeamBox2,
} from '../StyledBoxFixture/index';

function Fixture({ data }) {
    const { localTeam, visitorTeam, time } = data;

    return localTeam && visitorTeam ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <MainBox key={nanoid()}>
                <InnerBox>
                    <TeamBox>
                        <InnerTeamBox>
                            <Typography>{localTeam?.name}</Typography>
                        </InnerTeamBox>
                        <Card
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                height: '63%',
                            }}
                            sx={{ maxWidth: 150, paddingTop: 2 }}
                        >
                            <CardMedia
                                component='img'
                                height='51'
                                width='30%'
                                image={localTeam.logo_path}
                                alt='image of local team'
                            ></CardMedia>
                        </Card>
                    </TeamBox>

                    <StartTimeBox>
                        <Typography>{time}</Typography>
                    </StartTimeBox>
                    <TeamBox2>
                        <Card
                            style={{
                                border: 'none',
                                boxShadow: 'none',
                                height: '63%',
                            }}
                            sx={{ maxWidth: 150, paddingTop: 2 }}
                        >
                            <CardMedia
                                component='img'
                                height='51'
                                width='30%'
                                image={visitorTeam.logo_path}
                                alt='image of visitor team'
                            ></CardMedia>
                        </Card>

                        <InnerTeamBox2>
                            <Typography>{visitorTeam?.name}</Typography>
                        </InnerTeamBox2>
                    </TeamBox2>

                    <Box sx={{ position: 'relative' }}>
                        <Button
                            sx={{
                                top: '28%',
                                right: '15%',
                                position: 'absolute',
                            }}
                            variant='contained'
                        >
                            Quick Review
                        </Button>
                    </Box>
                </InnerBox>
            </MainBox>
        </Box>
    ) : (
        <h1>No teams</h1>
    );
}

export default Fixture;

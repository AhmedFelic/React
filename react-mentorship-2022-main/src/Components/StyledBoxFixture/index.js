import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const MainBox = styled(Box, { name: 'mainbox' })({
    display: 'flex',
    justifyContent: 'space-around',
    padding: 1,
    margin: 1,
    bgcolor: 'white',
    borderRadius: 1,
    border: 1,
    borderStyle: 'solid',
    width: '90%',
    marginBottom: 5,
});

export const InnerBox = styled(Box, { name: 'innerbox' })({
    display: 'grid',
    gridTemplateColumns: '1fr 10% 1fr 40%',
    padding: 1,
    margin: 1,
    bgcolor: 'white',
    borderRadius: 1,
    width: '100%',
    height: 85,
});

export const DateBox = styled(Box, { name: 'datebox' })({
    display: 'flex',
    justifyContent: 'center',
    fontSize: 30,
});

export const TeamBox = styled(Box, { name: 'teambox' })({
    display: 'flex',
    justifyContent: 'right',
    padding: 1,
    margin: 1,
    bgcolor: 'white',
    borderRadius: 1,
});

export const InnerTeamBox = styled(Box, { name: 'innerteambox' })({
    paddingTop: 27,
    paddingRight: '3%',
    margin: 1,
    bgcolor: 'white',
    borderRadius: 1,
    width: '70%',
    textAlign: 'right',
});

export const StartTimeBox = styled(Box, { name: 'starttimebox' })({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgcolor: 'white',
    borderRadius: 1,
});

export const TeamBox2 = styled(Box, { name: 'innerTeamBox2' })({
    display: 'flex',
    padding: 1,
    margin: 1,
    marginLeft: 0,
    bgcolor: 'yellow',
    borderRadius: 1,
});

export const InnerTeamBox2 = styled(Box, { name: 'innerteambox2' })({
    paddingTop: 27,
    paddingLeft: '3%',
    margin: 1,
    bgcolor: 'white',
    borderRadius: 1,
    width: '70%',
});

export const TitleBox = styled(Box, { name: 'titlebox' })({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
    marginTop: '2rem',
});

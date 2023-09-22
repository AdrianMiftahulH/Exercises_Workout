import PropTypes from 'prop-types';
import { Footer, Navbar } from "../fragments"
import { Stack } from '@mui/material';

const UserLayout = ({children}) => {
    return (
        <Stack 
        direction="column"
        alignItems='center'
        pt='20px'
        px="50px"
        spacing={1}>
            <Navbar />
            <main style={{ minHeight: "100vh" }}>
                {children}
            </main>
            <Footer />
        </Stack>
    )
}

UserLayout.propTypes = {children: PropTypes.node.isRequired,};

export default UserLayout
import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection } from '../../components';

function Home() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            {/* <InfoSection {...homeObjThree} /> */}

        </>
    );
}

export default Home;
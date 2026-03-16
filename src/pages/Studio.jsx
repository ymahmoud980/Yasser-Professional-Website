import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

const StudioPage = () => {
    return (
        <div style={{ height: '100vh' }}>
            <Studio config={config} />
        </div>
    );
};

export default StudioPage;

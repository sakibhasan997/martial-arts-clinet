import React from 'react';

const SectionTitle = ({heading, subHeading, colors}) => {
    return (
        <div className="mx-auto text-center md:w-1/2 my-10">
            <h3 className="text-3xl font-bold  py-3 ">{heading} <span className='text-red-600'>{colors}</span> </h3>
            <p className="text-gray-600 font-serif italic  ">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;
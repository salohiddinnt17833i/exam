import React from 'react';
import TableItem from '../TableItem';

const Table = () => {
    const data = [
        {
            title: 'Play It Safe',
            artist: 'Julia Wolf',
            album: 'Play It Safe',
            duration: '2:12',
        },
        {
            title: 'Ocean Front Apt.',
            artist: 'ayokay',
            album: 'In the Shape of a Dream',
            duration: '2:12',
        },
        {
            title: 'Free Spirit',
            artist: 'Khalid',
            album: 'Free Spirit',
            duration: '3:02',
        },
        {
            title: 'Remind You',
            artist: 'FRENSHIP',
            album: 'Vacation',
            duration: '4:25',
        },
        {
            title: 'Same Old',
            artist: 'SHY Martin',
            album: 'Same Old',
            duration: '2:56',
        },
        {
            title: 'A Moment Apart',
            artist: 'ODESZA',
            album: 'A Moment Apart',
            duration: '3:54',
        },
        {
            title: 'Run Away',
            artist: 'Manilla Killa, outsideOUTSIDE',
            album: '1993',
            duration: '3:13',
        },
        {
            title: 'Sleepless Nights (feat. Nightly)',
            artist: 'ayokay, Nightly',
            album: 'In the Shape of a Dream',
            duration: '2:12',
        },
        {
            title: 'Wrong Kind Of People',
            artist: 'Baker Grace',
            album: 'Girl, I Know',
            duration: '3:14',
        },
        {
            title: 'Slow Grenade',
            artist: 'Ellie Goulding, Lauv',
            album: 'Brightest Blue',
            duration: '3:37',
        },
    ];
    return (
        <div className="container mx-auto p-4">
            <table className="min-w-full divide-y divide-gray-800">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Album</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date Added</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
                    </tr>
                </thead>
                <tbody className="bg-black divide-y divide-gray-800">
                    {data.map((song, index) => (
                        <tr key={index}>
                            <TableItem></TableItem>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

import React from 'react';
import { useDataLayerValue } from '../../../DataLayer';

// Styled components
import StyledSidebar from './StyledSidebar';

// React icons
import HomeIcon from '../../../react icons/HomeIcon';
import SearchIcon from '../../../react icons/SearchIcon';
import MusicLibraryIcon from '../../../react icons/MusicLibraryIcon';

// React components
import SidebarItems, { SidebarOptions } from './SidebarItems/SidebarItems';

const Sidebar = () => {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <StyledSidebar>
            <img
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
                alt='spotify logo'
            />

            <SidebarItems>
                <SidebarOptions link='/' name='home' Icon={HomeIcon} />
                <SidebarOptions link='/search' name='search' Icon={SearchIcon} />
                <SidebarOptions
                    link='/library/playlists'
                    name='your library'
                    Icon={MusicLibraryIcon}
                    onClick={() => dispatch({ type: 'SET_LIBRARYSTATE', state: 'playlists' })}
                />
            </SidebarItems>
            <SidebarItems title='playlists'>
                {playlists ? (
                    playlists.items.map((playlist) => {
                        return (
                            <SidebarOptions
                                key={playlist.id}
                                link={`/playlist/${playlist.id}`}
                                id={playlist.id}
                                name={playlist.name}
                                onClick={() =>
                                    dispatch({ type: 'SET_PLAYLIST_ID', playlistId: playlist.id })
                                }
                            />
                        );
                    })
                ) : (
                    <SidebarOptions name='No playlists' />
                )}
            </SidebarItems>
        </StyledSidebar>
    );
};

export default Sidebar;

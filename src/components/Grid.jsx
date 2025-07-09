'use client'

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Album from "./Album";
import LoadingDiv from "./LoadingDiv";

const Container = styled.div`
    width: 78%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    gap: 15px;

    @media (max-width: 650px) {
        display: flex;
        overflow-x: scroll;
    }
`;

function Grid({ query, onclick }) {
    const [albums, setAlbums] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        const fetchAccessToken = async () => {
            const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || process.env.SPOTIFY_CLIENT_ID;
            const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || process.env.SPOTIFY_CLIENT_SECRET;

            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
                },
                body: 'grant_type=client_credentials'
            });

            const data = await response.json();
            setToken(data.access_token);
        };

        fetchAccessToken();
    }, []);

    useEffect(() => {
        const fetchAlbums = async () => {
            if (!token) return;
    
            try {
                let response;
                if (query) {
                    response = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=album`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                } else {
                    response = await fetch('https://api.spotify.com/v1/browse/new-releases?offset=0&limit=14&locale=en-US', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                }
    
                if (!response.ok) {
                    const errorMessage = await response.text();
                    throw new Error(`Erro na API: ${errorMessage}`);
                }
                const data = await response.json();
                const albumsData = (query ? data.albums.items : data.albums.items).filter(album => album !== null && album !== undefined);
                
                // 调试日志：记录从API获取的原始数据
                console.log('Raw albums data from Spotify API:', albumsData.slice(0, 3)) // 只显示前3个避免日志过多
                
                const mappedAlbums = albumsData.map(album => {
                    const mappedAlbum = {
                        id: album.id,
                        title: album.name,
                        artist: album.artists[0]?.name,
                        cover: album.images[0]?.url
                    }
                    
                    // 调试日志：记录映射后的专辑数据
                    console.log('Mapped album:', {
                        originalId: album.id,
                        originalIdType: typeof album.id,
                        mappedId: mappedAlbum.id,
                        mappedIdType: typeof mappedAlbum.id,
                        title: mappedAlbum.title
                    })
                    
                    return mappedAlbum
                })
                
                setAlbums(mappedAlbums);
            } catch (err) {
                console.error(err);
            }
        };
    
        fetchAlbums();
    }, [query, token]);
    

    return (
        <>
            {albums.length === 0 ? (
                <LoadingDiv/>
            ) : (
                <Container>
                {albums.map(album => (
                    <Album key={album.id} onClick={() => onclick(album.id)} cover={album.cover} title={album.title} artist={album.artist} id={album.id}/>
                ))}
            </Container>
            )}
        </>
    );
}

export default Grid;

'use client';

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import styled, { css, keyframes } from 'styled-components';
import { IoArrowBack } from 'react-icons/io5';
import NormalInput from './inputs/NormalInput';
import DoubleInput from './inputs/DoubleInput';
import ColorInput from './inputs/ColorInput';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ColorSelector from './ColorSelector';
import CheckInput from './inputs/CheckInput';
import FileInput from './inputs/FileInput';
import FontInput from './inputs/FontInput';
import { IoMdDownload } from 'react-icons/io';
import { MdOutlineRefresh } from 'react-icons/md';
import LoadingDiv from '../LoadingDiv';
import { Palette } from 'color-thief-react';
import CanvasPoster from './CanvasPoster';

const Container = styled.div`
  width: 85%;
  margin-inline: auto;

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const DivBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: min-content;
  margin-top: 100px; /* 增加上边距避免与固定导航栏重叠 */
  cursor: pointer;
  padding: 8px;
  min-height: 44px;

  @media (max-width: 768px) {
    margin-top: 80px;
    padding: 12px 8px;
  }
`;

const ArrowBack = styled(IoArrowBack)`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
`;

const TextBack = styled.h3`
  font-size: 1.3em;
  font-weight: bold;
`;

const ContainerEditor = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: stretch; /* 让左侧图片和右侧面板等高对齐 */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const PosterPreview = styled.img`
  width: 388px;
  height: 548px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    max-width: 350px;
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    max-width: 320px;
  }
`;

const EditorColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%; /* 确保右侧面板占满容器高度 */
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 90%;
  margin-inline: auto;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Tab = styled.div`
  padding: 12px 20px;
  font-size: 1em;
  font-weight: 500;
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  cursor: pointer;
  border-bottom: ${({ $active }) =>
    $active ? '2px solid var(--PosterfyGreen)' : 'none'};
  transition:
    color 0.3s,
    border-bottom 0.3s;
  white-space: nowrap;
  min-height: 44px;
  display: flex;
  align-items: center;

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
    font-size: 0.95em;
    min-height: 48px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
    font-size: 0.9em;
  }
`;

const EditorSettings = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 12px;
  padding-inline: 30px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding-inline: 20px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    padding-inline: 15px;
    gap: 12px;
  }
`;

const TracklistContainer = styled.div`
  padding: 20px 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TracklistTextarea = styled.textarea`
  width: 100%;
  flex: 1;
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  border: none;
  padding: 15px;
  font-size: 14px;
  resize: none;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 300px;
  line-height: 1.5em;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.07);
  }

  @media (max-width: 530px) {
    padding: 10px;
  }
`;

const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-inline: -20px;
  justify-content: end;
  gap: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-inline: 0;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`;

const ButtonDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  width: min-content;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  z-index: 1;
  min-height: 44px;
  white-space: nowrap;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.5s;
    z-index: -1;
  }

  :hover::before {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 15px 24px;
    min-height: 48px;
    font-size: 1.05em;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 16px 20px;
  }
`;

const ButtonText = styled.p`
  font-size: 0.85em;
  margin-inline: 10px;
  font-weight: bold;
`;

const IconDownload = styled(IoMdDownload)`
  font-size: 1.15em;
`;

const IconApply = styled(MdOutlineRefresh)`
  font-size: 1.15em;
  will-change: transform;
  ${({ $spinning }) =>
    $spinning
      ? css`
          animation: ${keyframes`
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                  `} 0.8s linear infinite;
        `
      : css`
          animation: ${keyframes`
                      0% { transform: rotate(0deg); }
                      100% { transform: rotate(360deg); }
                  `} 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        `}
`;

const FakePoster = styled.div`
  width: 560px;
  margin-right: 20px;

  @media (max-width: 450px) {
    width: 95%;
    margin-right: 0;
  }
`;

const ShortcutsInfo = styled.p`
  font-size: 0.75em;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
  margin-right: 20px;
  text-align: right;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 450px) {
    text-align: center;
  }

  @media (max-width: 350px) {
    margin-bottom: 10px;
  }
`;
export default function PosterEditor({ albumID, handleClickBack }) {
  console.log('🎨 PosterEditor received albumID:', albumID, typeof albumID);

  const { t } = useTranslation();
  const previewRef = useRef(null);

  const [albumName, setAlbumName] = useState('');
  const [artistsName, setArtistsName] = useState('');
  const [titleSize, setTitleSize] = useState('200');
  const [artistsSize, setArtistsSize] = useState('110');
  const [tracksSize, setTracksSize] = useState('50');
  const [marginTop, setMarginTop] = useState('');
  const [marginSide, setmarginSide] = useState(160);
  const [marginCover, setMarginCover] = useState(0);
  const [backgroundColor, setbackgroundColor] = useState('#5900ff');
  const [textColor, setTextColor] = useState('#ff9100');
  const [color1, setcolor1] = useState('#ff0000');
  const [color2, setcolor2] = useState('#00ff40');
  const [color3, setcolor3] = useState('#2600ff');
  const [useWatermark, setUseWatermark] = useState(true);
  const [useFade, setUseFade] = useState(true);
  const [showTracklist, setShowTracklist] = useState(false);
  const [albumCover, setAlbumCover] = useState('');
  const [uncompressedAlbumCover, setUncompressedAlbumCover] = useState('');
  const [customFont, setCustomFont] = useState('');
  const [customFontFile, setCustomFontFile] = useState(null);

  const [activeTab, setActiveTab] = useState('information');

  useEffect(() => {
    if (customFontFile) {
      const reader = new FileReader();
      reader.onload = async e => {
        const fontName = 'CustomFont';
        const fontFace = new FontFace(fontName, e.target.result);
        try {
          const font = await fontFace.load();
          document.fonts.add(font);
          setCustomFont(fontName);
        } catch (error) {
          console.error('Erro ao carregar fonte:', error);
        }
      };
      reader.readAsArrayBuffer(customFontFile);
    }
  }, [customFontFile]);

  const [useUncompressed, setUseUncompressed] = useState(false);
  const [fileName, setFileName] = useState('Original');
  const [tracklist, setTracklist] = useState('');

  const [titleRelease, setTitleRelease] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [titleRuntime, setTitleRuntime] = useState('');
  const [runtime, setRuntime] = useState('');

  const [showColorSelector, setShowColorSelector] = useState(false);
  const [colorInputPosition, setColorInputPosition] = useState(null);
  const [currentColorInput, setCurrentColorInput] = useState(null);

  const [userAdjustedTitleSize, setUserAdjustedTitleSize] = useState(false);
  const [initialTitleSizeSet, setInitialTitleSizeSet] = useState(false);

  const handleTitleSizeChange = e => {
    setTitleSize(e.target.value);
    setUserAdjustedTitleSize(true);
  };

  const handleTitleSizeAdjust = (adjustedSize, isInitial) => {
    if (isInitial && !initialTitleSizeSet) {
      setTitleSize(adjustedSize);
      setInitialTitleSizeSet(true);
    } else if (!userAdjustedTitleSize) {
      setTitleSize(adjustedSize);
    }
  };

  const posterData = {
    albumCover,
    uncompressedAlbumCover,
    useUncompressed,
    albumName,
    artistsName,
    titleSize,
    artistsSize,
    tracksSize,
    marginTop,
    marginSide,
    marginCover,
    titleRelease,
    releaseDate,
    titleRuntime,
    runtime,
    backgroundColor,
    textColor,
    useWatermark,
    useFade,
    showTracklist,
    tracklist,
    color1,
    color2,
    color3,
    albumID,
    userAdjustedTitleSize,
    initialTitleSizeSet,
  };

  console.log('📦 PosterData created:', {
    albumCover: posterData.albumCover,
    uncompressedAlbumCover: posterData.uncompressedAlbumCover,
    useUncompressed: posterData.useUncompressed,
    albumName: posterData.albumName,
  });

  const [image, setImage] = useState(null);
  const [generatePoster, setGeneratePoster] = useState(false);
  const [infosLoaded, setInfosLoaded] = useState(false);

  const [spinApplyButton, setSpinApplyButton] = useState(false);

  const handleImageReady = imageUrl => {
    setImage(imageUrl);
    setGeneratePoster(false);
    setSpinApplyButton(false);
  };

  const handleApplyClick = () => {
    setUserAdjustedTitleSize(false);
    requestAnimationFrame(() => {
      setSpinApplyButton(true);
      setGeneratePoster(true);
      if (previewRef.current) {
        window.scrollTo({
          top: previewRef.current.offsetTop - 150,
          behavior: 'smooth',
        });
      }
    });
  };

  const handleFileChange = file => {
    setAlbumCover(URL.createObjectURL(file));
    setUseUncompressed(false);
    setUncompressedAlbumCover('');
    setFileName(file.name);
  };

  const handleDownloadClick = useCallback(() => {
    if (!image) {
      return;
    }
    const link = document.createElement('a');
    link.href = image;
    link.download = `Posterfy - ${albumName}.png`;
    link.click();
  }, [image, albumName]);

  const handleCoverDownloadClick = async () => {
    if (useUncompressed) {
      if (!uncompressedAlbumCover) {
        return;
      }
      const blob = await (await fetch(await uncompressedAlbumCover)).blob();
      const link = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(blob),
        download: `Posterfy - ${albumName} Uncompressed Cover.png`,
      });
      link.click();
      URL.revokeObjectURL(link.href);
    } else {
      if (!albumCover) {
        return;
      }
      const blob = await (await fetch(albumCover)).blob();
      const link = Object.assign(document.createElement('a'), {
        href: URL.createObjectURL(blob),
        download: `Posterfy - ${albumName} Cover.png`,
      });
      link.click();
      URL.revokeObjectURL(link.href);
    }
  };

  function handleColorInputClick(e, colorInputName) {
    const rect = e.target.getBoundingClientRect();
    setColorInputPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setCurrentColorInput(colorInputName);
    setShowColorSelector(true);
  }

  function handleColorSelectorClose() {
    setShowColorSelector(false);
  }

  async function getItunesUncompressedAlbumCover(searchQuery, country = 'us') {
    try {
      const apiUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(searchQuery)}&country=${country}&entity=album&limit=1`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      if (!data.results?.length) {
        console.warn('No album data found.');
        setUseUncompressed(false);
        return '';
      }

      const result = data.results[0];
      const hires = result.artworkUrl100.replace(
        '100x100bb',
        '100000x100000-999'
      );
      const parts = hires.split('/image/thumb/');

      const uncompressedCover =
        parts.length === 2
          ? `https://a5.mzstatic.com/us/r1000/0/${parts[1].split('/').slice(0, -1).join('/')}`
          : '';
      return uncompressedCover;
    } catch (error) {
      console.error('Error fetching album cover:', error.message);
      return '';
    }
  }

  useEffect(() => {
    setTitleRelease(t('EDITOR_ReleaseTitle'));
    setTitleRuntime(t('EDITOR_RuntimeTitle'));
  }, [t]);

  useEffect(() => {
    const fetchAlbumData = async () => {
      console.log('🎵 fetchAlbumData called with albumID:', albumID);

      try {
        const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

        console.log('🔑 Environment variables:', {
          clientId: clientId ? '✅ Set' : '❌ Missing',
          clientSecret: clientSecret ? '✅ Set' : '❌ Missing',
        });

        if (!clientId || !clientSecret) {
          console.error('❌ Spotify API credentials not found');
          return;
        }

        const tokenResponse = await fetch(
          'https://accounts.spotify.com/api/token',
          {
            method: 'POST',
            headers: {
              Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              grant_type: 'client_credentials',
            }),
          }
        );

        const tokenData = await tokenResponse.json();
        const accessToken = tokenData.access_token;

        const albumResponse = await fetch(
          `https://api.spotify.com/v1/albums/${albumID}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const albumData = await albumResponse.json();
        console.log('🎵 Album data received:', albumData);
        console.log('🖼️ Album images:', albumData.images);

        const albumCoverUrl = albumData.images[0]?.url;
        console.log('📸 Setting album cover URL:', albumCoverUrl);

        const formattedArtistsName = albumData.artists
          .map(artist => artist.name)
          .join(', ');
        setAlbumName(albumData.name);
        setArtistsName(formattedArtistsName);
        setAlbumCover(albumCoverUrl);
        setReleaseDate(albumData.release_date);
        setUncompressedAlbumCover(
          await getItunesUncompressedAlbumCover(
            albumData.name + ' ' + formattedArtistsName
          )
        );

        const runtime = albumData.tracks.items.reduce(
          (totalDuration, track) => totalDuration + track.duration_ms,
          0
        );
        const totalSeconds = Math.floor(runtime / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const remainingSeconds = totalSeconds % 60;
        const remainingMinutes = totalMinutes % 60;

        const formattedRuntime =
          totalHours > 0
            ? `${totalHours}h ${remainingMinutes}min ${remainingSeconds}s`
            : `${remainingMinutes}min ${remainingSeconds}s`;
        setRuntime(formattedRuntime);

        const tracklist = albumData.tracks.items.map((track, index) => {
          if (index === 3) {
            setShowTracklist(true);
          }
          return `${index + 1}. ${track.name}`;
        });
        setTracklist(tracklist.join('\n'));

        setInfosLoaded(true);
      } catch (error) {
        console.error('Error trying to fetch album data:', error);
      }
    };

    if (albumID) {
      fetchAlbumData();
    }
  }, [albumID]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        handleApplyClick();
      } else if (event.ctrlKey && event.key === 'd') {
        event.preventDefault();
        handleDownloadClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [image, albumName, handleDownloadClick]);

  return (
    <>
      {!infosLoaded ? (
        <LoadingDiv />
      ) : (
        <Container>
          <Palette
            src={albumCover}
            crossOrigin='anonymous'
            format='hex'
            colorCount={5}
          >
            {({ data }) => {
              useEffect(() => {
                if (data && data.length > 0) {
                  setbackgroundColor(data[0]);
                  setTextColor(data[1]);
                  setcolor1(data[2]);
                  setcolor2(data[3]);
                  setcolor3(data[4]);
                  handleApplyClick();
                }
              }, [data]);
              return null;
            }}
          </Palette>
          <DivBack onClick={handleClickBack}>
            <ArrowBack />
            <TextBack>{t('GoBack')}</TextBack>
          </DivBack>
          <ContainerEditor>
            <CanvasPoster
              onImageReady={handleImageReady}
              posterData={posterData}
              generatePoster={generatePoster}
              onTitleSizeAdjust={handleTitleSizeAdjust}
              customFont={customFont}
            />
            {image ? (
              <PosterPreview src={image} ref={previewRef} />
            ) : (
              <FakePoster ref={previewRef} />
            )}
            <EditorColumn>
              <TabsContainer>
                <Tab
                  $active={activeTab === 'information'}
                  onClick={() => setActiveTab('information')}
                >
                  {t('EDITOR_InformationTab')}
                </Tab>
                <Tab
                  $active={activeTab === 'tracklist'}
                  onClick={() => setActiveTab('tracklist')}
                >
                  {t('EDITOR_TracklistTab')}
                </Tab>
              </TabsContainer>
              {activeTab === 'information' ? (
                <EditorSettings>
                  <NormalInput
                    title={t('EDITOR_AlbumName')}
                    value={albumName}
                    onChange={e => setAlbumName(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_ArtistName')}
                    value={artistsName}
                    onChange={e => setArtistsName(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_TitleSize')}
                    value={titleSize}
                    onChange={handleTitleSizeChange}
                  />
                  <NormalInput
                    title={t('EDITOR_ArtistSize')}
                    value={artistsSize}
                    onChange={e => setArtistsSize(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_TracksSize')}
                    value={tracksSize}
                    onChange={e => setTracksSize(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_MarginTop')}
                    value={marginTop}
                    onChange={e => setMarginTop(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_MarginSide')}
                    value={marginSide}
                    onChange={e => setmarginSide(e.target.value)}
                  />
                  <NormalInput
                    title={t('EDITOR_MarginCover')}
                    value={marginCover}
                    onChange={e => setMarginCover(e.target.value)}
                  />

                  <DoubleInput
                    title={titleRelease}
                    value={releaseDate}
                    onChangeTitle={e => setTitleRelease(e.target.value)}
                    onChangeDate={e => setReleaseDate(e.target.value)}
                  />
                  <DoubleInput
                    title={titleRuntime}
                    value={runtime}
                    onChangeTitle={e => setTitleRuntime(e.target.value)}
                    onChangeDate={e => setRuntime(e.target.value)}
                  />

                  <ColorInput
                    title={t('EDITOR_BackgroundColor')}
                    value={backgroundColor}
                    onClick={e => handleColorInputClick(e, 'backgroundColor')}
                  />
                  <ColorInput
                    title={t('EDITOR_TextColor')}
                    value={textColor}
                    onClick={e => handleColorInputClick(e, 'textColor')}
                  />
                  <ColorInput
                    title={`${t('EDITOR_Color')} 1`}
                    value={color1}
                    onClick={e => handleColorInputClick(e, 'color1')}
                  />
                  <ColorInput
                    title={`${t('EDITOR_Color')} 2`}
                    value={color2}
                    onClick={e => handleColorInputClick(e, 'color2')}
                  />
                  <ColorInput
                    title={`${t('EDITOR_Color')} 3`}
                    value={color3}
                    onClick={e => handleColorInputClick(e, 'color3')}
                  />

                  <CheckInput
                    title={t('EDITOR_Watermark')}
                    value={useWatermark}
                    onChange={newValue => setUseWatermark(newValue)}
                    text={t('EDITOR_WatermarkText')}
                  />
                  <CheckInput
                    title={t('EDITOR_Fade')}
                    value={useFade}
                    onChange={newValue => setUseFade(newValue)}
                    text={t('EDITOR_FadeText')}
                  />
                  <CheckInput
                    title={t('EDITOR_Uncompressed')}
                    value={useUncompressed}
                    onChange={newValue => setUseUncompressed(newValue)}
                    text={t('EDITOR_UncompressedText')}
                  />
                  <CheckInput
                    title={t('EDITOR_Tracklist')}
                    value={showTracklist}
                    onChange={newValue => setShowTracklist(newValue)}
                    text={t('EDITOR_TracklistText')}
                  />
                  <FileInput
                    title={t('EDITOR_Cover')}
                    onChange={handleFileChange}
                    text={fileName}
                  />
                  <FontInput
                    title={t('EDITOR_Font')}
                    text={customFontFile?.name || t('EDITOR_DefaultFont')}
                    onChange={setCustomFontFile}
                  />

                  {showColorSelector &&
                    colorInputPosition &&
                    currentColorInput && (
                      <ColorSelector
                        DefaultColor={
                          currentColorInput === 'backgroundColor'
                            ? backgroundColor
                            : currentColorInput === 'textColor'
                              ? textColor
                              : currentColorInput === 'color1'
                                ? color1
                                : currentColorInput === 'color2'
                                  ? color2
                                  : color3
                        }
                        image={albumCover}
                        predefinedColors={[
                          color1,
                          color2,
                          color3,
                          backgroundColor,
                          textColor,
                        ]}
                        onDone={selectedColor => {
                          switch (currentColorInput) {
                            case 'backgroundColor':
                              setbackgroundColor(selectedColor);
                              break;
                            case 'textColor':
                              setTextColor(selectedColor);
                              break;
                            case 'color1':
                              setcolor1(selectedColor);
                              break;
                            case 'color2':
                              setcolor2(selectedColor);
                              break;
                            case 'color3':
                              setcolor3(selectedColor);
                              break;
                            default:
                              break;
                          }
                          setColorInputPosition(null);
                        }}
                        position={colorInputPosition}
                        onClose={handleColorSelectorClose}
                      />
                    )}
                </EditorSettings>
              ) : (
                <TracklistContainer>
                  <TracklistTextarea
                    value={tracklist}
                    onChange={e => setTracklist(e.target.value)}
                    placeholder={t('EDITOR_TracklistPlaceholder')}
                  />
                </TracklistContainer>
              )}
              <DivButtons>
                <ButtonDiv onClick={handleCoverDownloadClick}>
                  <IconDownload />
                  <ButtonText>{t('EDITOR_DownloadCover')}</ButtonText>
                </ButtonDiv>
                <ButtonDiv onClick={handleDownloadClick}>
                  <IconDownload />
                  <ButtonText>{t('EDITOR_Download')}</ButtonText>
                </ButtonDiv>
                <ButtonDiv onClick={handleApplyClick}>
                  <IconApply $spinning={spinApplyButton} />
                  <ButtonText>{t('EDITOR_Apply')}</ButtonText>
                </ButtonDiv>
              </DivButtons>
              <ShortcutsInfo>
                {t('EDITOR_Shortcuts')}: Ctrl+S ({t('EDITOR_Apply')}), Ctrl+D (
                {t('EDITOR_Download')})
              </ShortcutsInfo>
            </EditorColumn>
          </ContainerEditor>
        </Container>
      )}
    </>
  );
}

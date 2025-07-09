'use client';

/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import waterMarkBlack from '../../assets/waterMarkBlack.png';
import waterMarkWhite from '../../assets/waterMarkWhite.png';

// 🔍 调试图片导入
console.log(
  '🚀 Module loaded - waterMarkBlack:',
  waterMarkBlack,
  typeof waterMarkBlack
);
console.log(
  '🚀 Module loaded - waterMarkWhite:',
  waterMarkWhite,
  typeof waterMarkWhite
);

const CanvasPoster = ({
  onImageReady,
  posterData,
  generatePoster,
  onTitleSizeAdjust,
  customFont,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const generatePosterContent = async () => {
      if (!generatePoster) {
        return;
      }

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = 2480;
      const height = 3508;
      posterData.marginSide = parseInt(posterData.marginSide) || 0;
      posterData.marginTop = parseInt(posterData.marginTop) || 0;
      posterData.marginCover = parseInt(posterData.marginCover) || 0;

      const loadCover = async url => {
        console.log('🖼️ loadCover called with URL:', url);

        if (!url) {
          console.warn('⚠️ No album cover URL provided');
          return;
        }

        const image = new Image();
        image.crossOrigin = 'anonymous';
        console.log('🔄 Setting image src:', url);
        image.src = url;
        return new Promise((resolve, reject) => {
          image.onload = () => {
            console.log('✅ Image loaded successfully:', {
              width: image.width,
              height: image.height,
              src: image.src,
            });

            try {
              console.log('🎯 Drawing image with dimensions:', {
                x: posterData.marginCover,
                y: posterData.marginCover,
                width: width - posterData.marginCover * 2,
                height: width - posterData.marginCover * 2,
              });

              ctx.drawImage(
                image,
                posterData.marginCover,
                posterData.marginCover,
                width - posterData.marginCover * 2,
                width - posterData.marginCover * 2
              );

              console.log('🎨 Image drawn successfully to canvas');

              if (posterData.useFade) {
                console.log('🌅 Applying fade effect');
                const verticalFade = ctx.createLinearGradient(0, 0, 0, 3000);
                const rgb = hexToRgb(posterData.backgroundColor);
                verticalFade.addColorStop(
                  0.5,
                  `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`
                );
                verticalFade.addColorStop(0.8, posterData.backgroundColor);
                ctx.fillStyle = verticalFade;
                ctx.fillRect(0, 0, canvas.width, 2500);
                console.log('✨ Fade effect applied');
              }
              resolve();
            } catch (error) {
              console.error('❌ Error drawing album cover:', error);
              resolve(); // Continue without cover
            }
          };

          image.onerror = error => {
            console.error('❌ Failed to load album cover:', url, error);
            resolve(); // Continue without cover instead of blocking
          };
        });
      };

      const drawWaterMark = async () => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        const rgb = hexToRgb(posterData.backgroundColor);
        const contrastColor = getContrast(rgb);

        // 🔍 调试水印图片导入
        console.log('🖼️ waterMarkBlack:', waterMarkBlack);
        console.log('🖼️ waterMarkWhite:', waterMarkWhite);
        console.log('🎨 contrastColor:', contrastColor);

        image.src =
          contrastColor === 'black' ? waterMarkBlack.src : waterMarkWhite.src;
        console.log('🔗 Final image src:', image.src);
        console.log(
          '📍 Current window.location:',
          typeof window !== 'undefined' ? window.location.href : 'SSR'
        );
        return new Promise(resolve => {
          image.onload = () => {
            ctx.globalAlpha = '0.15';
            ctx.drawImage(image, width - 70 - 500, 50, 500, 134);
            ctx.globalAlpha = '1';
            resolve();
          };
        });
      };

      const drawAlbumInfos = async () => {
        let titleFontSize = posterData.titleSize
          ? parseInt(posterData.titleSize)
          : 230;

        const fontFamily = customFont || 'Montserrat';
        if (
          !posterData.userAdjustedTitleSize &&
          !posterData.initialTitleSizeSet
        ) {
          ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
          let titleWidth = ctx.measureText(posterData.albumName).width;

          while (titleWidth > 2480 - posterData.marginSide * 2) {
            titleFontSize -= 1;
            ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
            titleWidth = ctx.measureText(posterData.albumName).width;
          }

          onTitleSizeAdjust(titleFontSize, true);
        } else {
          ctx.font = `bold ${titleFontSize}px ${fontFamily}`;
        }

        ctx.fillStyle = posterData.textColor;

        if (posterData.showTracklist) {
          ctx.fillText(
            posterData.albumName,
            posterData.marginSide,
            2500 + posterData.marginTop
          );
        } else {
          ctx.fillText(
            posterData.albumName,
            posterData.marginSide,
            2790 + posterData.marginTop
          );
        }

        const artistsFontSize = posterData.artistsSize
          ? parseInt(posterData.artistsSize)
          : 110;
        ctx.font = `bold ${artistsFontSize}px ${customFont || 'Montserrat'}`;

        if (posterData.showTracklist) {
          ctx.fillText(
            posterData.artistsName,
            posterData.marginSide,
            2500 + posterData.marginTop + artistsFontSize * 1.3
          );
        } else {
          ctx.fillText(
            posterData.artistsName,
            posterData.marginSide,
            2820 + posterData.marginTop + artistsFontSize
          );
        }

        ctx.font = `bold 70px ${customFont || 'Montserrat'}`;
        ctx.fillText(posterData.titleRelease, posterData.marginSide, 3310);
        const releaseWidth = ctx.measureText(posterData.titleRelease).width;
        ctx.fillText(
          posterData.titleRuntime,
          releaseWidth + posterData.marginSide + 100,
          3310
        );

        ctx.globalAlpha = 0.7;
        ctx.font = `bold 60px ${customFont || 'Montserrat'}`;
        ctx.fillText(
          posterData.runtime,
          releaseWidth + posterData.marginSide + 100,
          3390
        );
        ctx.fillText(posterData.releaseDate, posterData.marginSide, 3390);
        ctx.globalAlpha = 1;

        ctx.fillStyle = posterData.color1;
        ctx.fillRect(2045 - posterData.marginSide, 3368, 145, 30);
        ctx.fillStyle = posterData.color2;
        ctx.fillRect(2190 - posterData.marginSide, 3368, 145, 30);
        ctx.fillStyle = posterData.color3;
        ctx.fillRect(2335 - posterData.marginSide, 3368, 145, 30);
      };

      const drawTracklist = async () => {
        ctx.fillStyle = posterData.textColor;
        let paddingMusic = posterData.marginSide + 10;
        let maxWidth = 0;
        let paddingColumn = 0;
        const fontSize = posterData.tracksSize
          ? parseInt(posterData.tracksSize)
          : 50;
        ctx.font = `bold ${fontSize}px ${customFont || 'Montserrat'}`;
        const musicSize = fontSize;

        const marginTop = parseInt(posterData.marginTop || 0);
        const rectY = parseInt(posterData.artistsSize)
          ? 2500 + marginTop + parseInt(posterData.artistsSize) * 1.3 + 130
          : 2500 + marginTop + 110 * 1.2 + 130;
        const rectHeight = 500;
        const rectWidth = width - posterData.marginSide * 2;
        const rectX = parseInt(posterData.marginSide);
        const maxTextHeight =
          rectY + rectHeight - 10 - parseInt(posterData.marginTop);

        let textHeight = rectY;

        posterData.tracklist.split('\n').forEach(track => {
          if (textHeight + musicSize * 1.3 >= maxTextHeight) {
            textHeight = rectY;
            paddingMusic = maxWidth + musicSize * 2.5 + paddingColumn;
            if (paddingMusic >= rectX + rectWidth) {
              return;
            }
            paddingColumn = paddingMusic - musicSize * 2.5;
            maxWidth = 0;
          }
          const textWidth =
            ctx.measureText(`${track}`).width + posterData.marginSide;
          if (textWidth > maxWidth) {
            maxWidth = textWidth;
          }
          ctx.fillText(`${track}`, paddingMusic, textHeight);
          textHeight += musicSize * 1.3;
        });
      };

      const hexToRgb = hex => {
        const bigint = parseInt(hex.replace('#', ''), 16);
        return {
          r: (bigint >> 16) & 255,
          g: (bigint >> 8) & 255,
          b: bigint & 255,
        };
      };

      const getContrast = rgb => {
        const luminance = c => {
          const val = c / 255;
          return val <= 0.03928
            ? val / 12.92
            : Math.pow((val + 0.055) / 1.055, 2.4);
        };
        const lum =
          0.2126 * luminance(rgb.r) +
          0.7152 * luminance(rgb.g) +
          0.0722 * luminance(rgb.b);
        return lum > 0.179 ? 'black' : 'white';
      };

      const scannable = async () => {
        const rgb = hexToRgb(posterData.backgroundColor);
        const contrastColor = getContrast(rgb);
        const targetColor = posterData.textColor;

        const svgUrl = `https://scannables.scdn.co/uri/plain/svg/${posterData.backgroundColor.replace('#', '')}/${contrastColor}/640/spotify:album:${posterData.albumID}`;

        const response = await fetch(svgUrl);
        let svgText = await response.text();

        if (contrastColor === 'black') {
          svgText = svgText.replace(/fill="#000000"/g, `fill="${targetColor}"`);
        } else {
          svgText = svgText.replace(/fill="#ffffff"/g, `fill="${targetColor}"`);
        }

        const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
        const updatedSvgUrl = URL.createObjectURL(svgBlob);

        return new Promise(resolve => {
          const image = new Image();
          image.src = updatedSvgUrl;

          image.onload = function () {
            ctx.drawImage(image, 2020 - posterData.marginSide, 3235, 480, 120);
            const imageUrl = canvas.toDataURL('image/png');
            onImageReady(imageUrl);
            resolve();
          };
        });
      };

      const drawBackground = async () => {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = posterData.backgroundColor;
        ctx.fillRect(0, 0, width, height);
      };

      await drawBackground();

      console.log('🎨 CanvasPoster received posterData:', {
        albumCover: posterData.albumCover,
        uncompressedAlbumCover: posterData.uncompressedAlbumCover,
        useUncompressed: posterData.useUncompressed,
      });

      try {
        if (posterData.useUncompressed && posterData.uncompressedAlbumCover) {
          console.log(
            '🔄 Loading uncompressed album cover:',
            await posterData.uncompressedAlbumCover
          );
          await loadCover(await posterData.uncompressedAlbumCover);
        } else if (posterData.albumCover) {
          console.log('🔄 Loading regular album cover:', posterData.albumCover);
          await loadCover(posterData.albumCover);
        } else {
          console.warn('⚠️ No album cover available to load');
        }
      } catch (error) {
        console.error('❌ Error loading album cover:', error);
      }

      await drawAlbumInfos();
      if (posterData.showTracklist) {
        await drawTracklist();
      }
      if (posterData.useWatermark) {
        await drawWaterMark();
      }
      await scannable();
    };

    generatePosterContent();
  }, [generatePoster, posterData, onImageReady, customFont, onTitleSizeAdjust]);

  return (
    <canvas
      ref={canvasRef}
      width={2480}
      height={3508}
      style={{ display: 'none' }}
    />
  );
};

export default CanvasPoster;

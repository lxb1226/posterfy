import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        paragraphHero1: 'Posterfy transforms music passion into visual art.',
        paragraphHero2:
          'Create custom posters for your favorite albums using Spotify API.',
        anchorArt: 'Art.',
        ArtTitle: 'Watch the music\ntake shape',
        ArtParagraph:
          "It's simple, search for your favorite album, select it and let the art flow!",
        SearchPlaceholder: 'Album name...',
        TryTrend: 'Or, try trends',
        MadeBy: 'Made with 🎵 by',
        GoBack: 'Back',
        Loading: 'Loading',
        LoadingText: 'We are fetching the information.',
        Theme: 'Theme',

        FAQ_HowItWorks_Question: 'How does Posterfy work?',
        FAQ_HowItWorks_Answer:
          "To obtain data and images, Posterfy uses Spotify's free API. Once the user selects an album, Posterfy gathers all the data, organizes it visually on a canvas element via JavaScript, and generates a rendered image of the canvas.",
        FAQ_Affiliation_Question: 'Is Posterfy affiliated with Spotify?',
        FAQ_Affiliation_Answer:
          'No, Posterfy is an independent project and is not affiliated with or endorsed by Spotify.',
        FAQ_AlbumSearch_Question:
          'What kind of albums can I search for on Posterfy?',
        FAQ_AlbumSearch_Answer:
          "Posterfy allows you to search for any album available on Spotify’s database, as it pulls data directly from Spotify's free API.",
        FAQ_SaveData_Question:
          'Does Posterfy save my created posters or search history?',
        FAQ_SaveData_Answer:
          'No, Posterfy does not store any user data. Each poster is generated temporarily and is only available for download.',
        FAQ_ReportIssue_Question:
          'How can I report an issue or suggest a feature to Posterfy?',
        FAQ_ReportIssue_Answer:
          "You can report issues or suggest features by accessing the project's GitHub repository, linked at the bottom of the site.",

        EDITOR_ReleaseTitle: 'Release date',
        EDITOR_RuntimeTitle: 'Runtime',
        EDITOR_AlbumName: 'Album name',
        EDITOR_ArtistName: 'Artist name',
        EDITOR_TitleSize: 'Title size',
        EDITOR_ArtistSize: 'Artist size',
        EDITOR_TracksSize: 'Tracks size',
        EDITOR_MarginTop: 'Margin Top',
        EDITOR_MarginSide: 'Margin side',
        EDITOR_MarginCover: 'Margin cover',
        EDITOR_BackgroundColor: 'Background color',
        EDITOR_TextColor: 'Text color',
        EDITOR_Color: 'Color',
        EDITOR_Watermark: 'Watermark',
        EDITOR_WatermarkText: 'Use Watermark',
        EDITOR_Fade: 'Fade',
        EDITOR_FadeText: 'Use fade',
        EDITOR_Tracklist: 'Tracklist',
        EDITOR_TracklistText: 'Show tracklist',
        EDITOR_Apply: 'Apply',
        EDITOR_DownloadCover: 'Cover',
        EDITOR_Download: 'Poster',
        EDITOR_Cover: 'Cover',
        EDITOR_Uncompressed: 'Improved cover',
        EDITOR_UncompressedText: 'Use improved cover',
        EDITOR_Font: 'Custom font',
        EDITOR_DefaultFont: 'Select',
        EDITOR_Shortcuts: 'Shortcuts',
        EDITOR_InformationTab: 'Informations',
        EDITOR_TracklistTab: 'Tracklist',
      },
    },
    pt: {
      translation: {
        paragraphHero1:
          'Posterfy transforma a paixão por música em arte visual.',
        paragraphHero2:
          'Crie pôsters personalizados para seus álbuns favoritos usando a API do Spotify.',
        anchorArt: 'Arte.',
        ArtTitle: 'Veja a música\ntomar forma',
        ArtParagraph:
          'É simples, procure seu álbum favorito, selecione-o e deixe a arte fluir!',
        SearchPlaceholder: 'Nome do álbum...',
        TryTrend: 'Ou, experimente tendências',
        MadeBy: 'Feito com 🎵 por',
        GoBack: 'Voltar',
        Loading: 'Carregando',
        LoadingText: 'Estamos buscando as informações.',
        Theme: 'Tema',

        FAQ_HowItWorks_Question: 'Como o Posterfy funciona?',
        FAQ_HowItWorks_Answer:
          'Para obter dados e imagens, o Posterfy usa a API gratuita do Spotify. Assim que o usuário seleciona um álbum, o Posterfy coleta todos os dados, organiza visualmente em um elemento canvas via JavaScript e gera uma imagem renderizada do canvas.',
        FAQ_Affiliation_Question: 'O Posterfy é afiliado ao Spotify?',
        FAQ_Affiliation_Answer:
          'Não, o Posterfy é um projeto independente e não é afiliado ou apoiado pelo Spotify.',
        FAQ_AlbumSearch_Question:
          'Que tipo de álbuns posso pesquisar no Posterfy?',
        FAQ_AlbumSearch_Answer:
          'O Posterfy permite que você pesquise qualquer álbum disponível no banco de dados do Spotify, pois obtém os dados diretamente da API gratuita do Spotify.',
        FAQ_SaveData_Question:
          'O Posterfy salva meus pôsteres criados ou histórico de buscas?',
        FAQ_SaveData_Answer:
          'Não, o Posterfy não armazena nenhum dado do usuário. Cada pôster é gerado temporariamente e só fica disponível para download.',
        FAQ_ReportIssue_Question:
          'Como posso relatar um problema ou sugerir uma funcionalidade?',
        FAQ_ReportIssue_Answer:
          'Você pode relatar problemas ou sugerir funcionalidades acessando o repositório do projeto no GitHub, que está vinculado na parte inferior do site.',

        EDITOR_ReleaseTitle: 'Lançamento',
        EDITOR_RuntimeTitle: 'Duração',
        EDITOR_AlbumName: 'Nome do álbum',
        EDITOR_ArtistName: 'Nome do artista',
        EDITOR_TitleSize: 'Tamanho do título',
        EDITOR_ArtistSize: 'Tamanho do artista',
        EDITOR_TracksSize: 'Tamanho das faixas',
        EDITOR_MarginTop: 'Margem superior',
        EDITOR_MarginSide: 'Margem lateral',
        EDITOR_MarginCover: 'Margem capa',
        EDITOR_BackgroundColor: 'Cor de fundo',
        EDITOR_TextColor: 'Cor do texto',
        EDITOR_Color: 'Cor',
        EDITOR_Watermark: "Marca d'água",
        EDITOR_WatermarkText: "Usar marca d'água",
        EDITOR_Fade: 'Degradê',
        EDITOR_FadeText: 'Usar degradê',
        EDITOR_Tracklist: 'Músicas',
        EDITOR_TracklistText: 'Mostrar músicas',
        EDITOR_Apply: 'Aplicar',
        EDITOR_DownloadCover: 'Capa',
        EDITOR_Download: 'Poster',
        EDITOR_Cover: 'Capa',
        EDITOR_Uncompressed: 'Capa melhorada',
        EDITOR_UncompressedText: 'Usar capa melhorada',
        EDITOR_Font: 'Fonte personalizada',
        EDITOR_DefaultFont: 'Selecione',
        EDITOR_Shortcuts: 'Atalhos',
        EDITOR_InformationTab: 'Informações',
        EDITOR_TracklistTab: 'Faixas',
      },
    },
    es: {
      translation: {
        paragraphHero1:
          'Posterfy transforma la pasión por la música en arte visual.',
        paragraphHero2:
          'Crea carteles personalizados para tus álbumes favoritos usando la API de Spotify.',
        anchorArt: 'Arte.',
        ArtTitle: 'Mira la música\ntomar forma',
        ArtParagraph:
          'Es simple, busca tu álbum favorito, selecciónalo y deja fluir el arte.',
        SearchPlaceholder: 'Nombre del álbum...',
        TryTrend: 'O, prueba las tendencias',
        MadeBy: 'Hecho con 🎵 por',
        GoBack: 'Volver',
        Loading: 'Cargando',
        LoadingText: 'Estamos buscando la información.',
        Theme: 'Tema',

        FAQ_HowItWorks_Question: '¿Cómo funciona Posterfy?',
        FAQ_HowItWorks_Answer:
          'Para obtener datos e imágenes, Posterfy usa la API gratuita de Spotify. Una vez que el usuario selecciona un álbum, Posterfy recopila todos los datos, los organiza visualmente en un elemento canvas mediante JavaScript y genera una imagen renderizada del canvas.',
        FAQ_Affiliation_Question: '¿Está afiliado Posterfy a Spotify?',
        FAQ_Affiliation_Answer:
          'No, Posterfy es un proyecto independiente y no está afiliado ni respaldado por Spotify.',
        FAQ_AlbumSearch_Question:
          '¿Qué tipo de álbumes puedo buscar en Posterfy?',
        FAQ_AlbumSearch_Answer:
          'Posterfy te permite buscar cualquier álbum disponible en la base de datos de Spotify, ya que obtiene los datos directamente de la API gratuita de Spotify.',
        FAQ_SaveData_Question:
          '¿Posterfy guarda mis carteles creados o historial de búsquedas?',
        FAQ_SaveData_Answer:
          'No, Posterfy no almacena ningún dato del usuario. Cada cartel se genera temporalmente y solo está disponible para descarga.',
        FAQ_ReportIssue_Question:
          '¿Cómo puedo informar un problema o sugerir una función para posterfy?',
        FAQ_ReportIssue_Answer:
          'Puedes informar problemas o sugerir funciones accediendo al repositorio de GitHub del proyecto, vinculado en la parte inferior del sitio.',

        EDITOR_ReleaseTitle: 'Fecha de lanzamiento',
        EDITOR_RuntimeTitle: 'Duración',
        EDITOR_AlbumName: 'Nombre del álbum',
        EDITOR_ArtistName: 'Nombre del artista',
        EDITOR_TitleSize: 'Tamaño del título',
        EDITOR_ArtistSize: 'Tamaño del artista',
        EDITOR_TracksSize: 'Tamaño de canciones',
        EDITOR_MarginTop: 'Margen superior',
        EDITOR_MarginSide: 'Margen lateral',
        EDITOR_MarginCover: 'Margen portada',
        EDITOR_BackgroundColor: 'Color de fondo',
        EDITOR_TextColor: 'Color del texto',
        EDITOR_Color: 'Color',
        EDITOR_Watermark: 'Filigrana',
        EDITOR_WatermarkText: 'Usar marca de agua',
        EDITOR_Fade: 'Degradado',
        EDITOR_FadeText: 'Usar degradado',
        EDITOR_Tracklist: 'Canciones',
        EDITOR_TracklistText: 'Mostrar canciones',
        EDITOR_Apply: 'Aplicar',
        EDITOR_DownloadCover: 'Cubrir',
        EDITOR_Download: 'Póster',
        EDITOR_Cover: 'Portada',
        EDITOR_Uncompressed: 'Portada mejorada',
        EDITOR_UncompressedText: 'Usar portada mejorada',
        EDITOR_Font: 'Fuente personalizada',
        EDITOR_DefaultFont: 'Seleccionar',
        EDITOR_Shortcuts: 'Atajos',
        EDITOR_InformationTab: 'Informaciones',
        EDITOR_TracklistTab: 'Lista de canciones',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

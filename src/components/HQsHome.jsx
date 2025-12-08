
import beatboxAndTuneCover from "../assets/img/beatboxAndTuneCover.png";
// import beatboxAndTuneCover from "https://uploads.mangadex.org/covers/:manga-id/:cover-filename";
import { useState, useEffect } from 'react';
import btnElipseLarge from "../assets/img/botaoElipseGrande.png";
import btnReadNow from "../assets/img/botaoLeiaAgora.png";
import HQContinueReading from "../assets/img/imagemHqContinueALeitura.png";
import btnContinueReading from "../assets/img/botaoContinueALeitura.png";
import btnReadPercentage from "../assets/img/botaoPorcentagemLida.png";
import HQHoverItem from "./HQHoverItem";
import "../index.css";

export default function HQsHome({ user }) {
    
    const [firstCover, setFirstCover] = useState('');
    const [secondCover, setSecondCover] = useState('');
    const [thirdCover, setThirdCover] = useState('');
    const [fourthCover, setFourthCover] = useState('');

    const [firstComicData, setFirstComicData] = useState('');
    const [secondComicData, setSecondComicData] = useState('');
    const [thirdComicData, setThirdComicData] = useState('');
    const [fourthComicData, setFourthComicData] = useState('');

    const [firstComicChapter, setFirstComicChapter] = useState('');
    const [secondComicChapter, setSecondComicChapter] = useState('');
    const [thirdComicChapter, setThirdComicChapter] = useState('');
    const [fourthComicChapter, setFourthComicChapter] = useState('');

    const [loading, setLoading] = useState(true);

    const firstManga = user?.latest?.first;
    const secondManga = user?.latest?.second;
    console.log(secondManga);
    const thirdManga = user?.latest?.third;
    const fourthManga = user?.latest?.fourth;


    const getCovers = async (mangaId) => {

        const apiUrl = `https://api.mangadex.org/cover?limit=10&manga[]=${mangaId}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }

            
            const json = await response.json();
            const coverName = json.data[0].attributes.fileName;
            return 'https://uploads.mangadex.org/covers/'+ mangaId +'/' + coverName;
            // const parsedJson = JSON.parse(json);
            // console.log("Dados de Capas:" + parsedJson[0].attributes.fileName);
            
            
        } catch (error) {
            console.error("Erro ao buscar capas:", error);
        }
    };
    
    const getComicData = async (mangaId) => {

        const apiUrl = `https://api.mangadex.org/manga/${mangaId}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }

            
            const json = await response.json();
            return json;
            
            
        } catch (error) {
            console.error("Erro ao buscar dados do quadrinho:", error);
        }
    };
    
    const getChapter = async (chapterId) => {

        console.log(chapterId);

        const apiUrl = `https://api.mangadex.org/at-home/server/${chapterId}`;

        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }

            
            const json = await response.json();
            return json;
            
            
        } catch (error) {
            console.error("Erro ao buscar dados do quadrinho:", error);
        }
    };

    useEffect(() => {
        const fetchCovers = async () => {
            const firstCoverUrl = await getCovers(firstManga);
            const secondCoverUrl = await getCovers(secondManga);
            const thirdCoverUrl = await getCovers(thirdManga);
            const fourthCoverUrl = await getCovers(fourthManga);
            
            if (firstCoverUrl) {
               setFirstCover(firstCoverUrl);
            }
            if (secondCoverUrl) {
               setSecondCover(secondCoverUrl);
            }
            if (thirdCoverUrl) {
               setThirdCover(thirdCoverUrl);
            }
            if (fourthCoverUrl) {
               setFourthCover(fourthCoverUrl);
            }
        }

        const fetchComicsData = async () => {
            
            const firstComic = await getComicData(firstManga);
            const secondComic = await getComicData(secondManga);
            const thirdComic = await getComicData(thirdManga);
            const fourthComic = await getComicData(fourthManga);

            if (firstComic) setFirstComicData(firstComic);
            console.log(firstComic);
            if (secondComic) setSecondComicData(secondComic);
            if (thirdComic) setThirdComicData(thirdComic);
            if (fourthComic) setFourthComicData(fourthComic);

            const firstComicChapter = await getChapter(firstComic.data.attributes.latestUploadedChapter);
            const secondComicChapter = await getChapter(secondComic.data.attributes.latestUploadedChapter);
            const thirdComicChapter = await getChapter(thirdComic.data.attributes.latestUploadedChapter);
            const fourthComicChapter = await getChapter(fourthComic.data.attributes.latestUploadedChapter);
            if (firstComicChapter) setFirstComicChapter(firstComicChapter);
            if (secondComicChapter) setSecondComicChapter(secondComicChapter);
            if (thirdComicChapter) setThirdComicChapter(thirdComicChapter);
            if (fourthComicChapter) setFourthComicChapter(fourthComicChapter);
            console.log(firstComicChapter);
        }

        const initHomePage = async () => {
            setLoading(true);
            await fetchCovers();
            await fetchComicsData();
            setLoading(false);
        }

        initHomePage();

    }, [firstManga]);

    return (
        <>
        {((!loading) && <section className="images-hqs-home">
                <div className="hqs-top">
                    <div id="hq1-border">
                        <img src={beatboxAndTuneCover} alt="Capa da HQ Beatbox and Tune: Volume 1" />
                        <div className="hq1-buttom1">
                            <img src={btnElipseLarge} alt="" />
                            <span className="hq1-buttom1-text-authors">Foster Gaudio & Wagner Esposito</span>
                            <span className="hq1-buttom1-text-title">Beatbox and Tune: Volume 1</span>
                        </div>
                        <div>
                            <img className="hq1-buttom2" src={btnReadNow} alt="Botão Leia Agora" />
                        </div>
                    </div>
    
                    <div id="hq2-border">
                        <img src={HQContinueReading} alt="Capa do quadrinho Antes do Incal - 13#" />
                        <div className="hq2-buttom1">
                            <img src={btnContinueReading} alt="Botão Continuar Leitura" />
                            <span className="hq2-buttom1-text-title">Antes do Incal - 13#</span>
                            <span className="hq2-buttom1-text-authors">Zoran Janjetov, Alejandro Jodorowski</span>
                        </div>
                        <div className="hq2-buttom2">
                            <img src={btnReadPercentage} alt="Ícone de progresso de leitura" />
                            <span className="hq2-buttom2-text">41%</span>
                        </div>
                    </div>
                </div>
    
                <div className="hqs-bottom">
                    <HQHoverItem id="hq3-border"
                        normal={firstCover} comicData={firstComicData} comicChapter={firstComicChapter} user={user} alt="Capa do primeiro quadrinho"
                    />

                    <HQHoverItem id="hq4-border"
                        normal={secondCover} comicData={secondComicData} comicChapter={secondComicChapter} user={user} alt="Capa do segundo quadrinho"
                    />

                    <HQHoverItem id="hq5-border"
                        normal={thirdCover} comicData={thirdComicData} comicChapter={thirdComicChapter} user={user} alt="Capa do terceiro quadrinho"
                    />

                    <HQHoverItem id="hq6-border"
                        normal={fourthCover} comicData={fourthComicData} comicChapter={fourthComicChapter} user={user} alt="Capa do quarto"
                    />
                </div>
                <div className="bottomSpacing"></div>
    
            </section>)}
            {(loading) && (
                <div className="spinner-container">
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
                </div>
            )}
        </>
    );
}
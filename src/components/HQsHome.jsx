
import beatboxAndTuneCover from "../assets/img/beatboxAndTuneCover.png";
import btnElipseLarge from "../assets/img/botaoElipseGrande.png";
import btnReadNow from "../assets/img/botaoLeiaAgora.png";
import HQContinueReading from "../assets/img/imagemHqContinueALeitura.png";
import btnContinueReading from "../assets/img/botaoContinueALeitura.png";
import btnReadPercentage from "../assets/img/botaoPorcentagemLida.png"
import beastlandsCover from "../assets/img/beastlandsCover.png"
import beastlandsHover from "../assets/img/beastlandsHover.png"
import houseAmokCover from "../assets/img/houseAmokCover.png"
import houseAmokHover from "../assets/img/houseAmokHover.png"
import lifeIsStrangeCover from "../assets/img/lifeIsStrangeCover.png"
import lifeIsStrangeHover from "../assets/img/lifeIsStrangeHover.png"
import theWildCosmosCover from "../assets/img/theWildCosmosCover.png"
import HQHoverItem from "./HQHoverItem";


export default function HQsHome() {


    return (
        <>
            <section className="images-hqs-home">
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
                        normal={beastlandsCover} hover={beastlandsHover} link="" alt="Capa do quadrinho Beastlands"
                    />

                    <HQHoverItem id="hq4-border"
                        normal={houseAmokCover} hover={houseAmokHover} link="" alt="Capa do quadrinho House Amok"
                    />

                    <HQHoverItem id="hq5-border"
                        normal={lifeIsStrangeCover} hover={lifeIsStrangeHover} link="/tela2" alt="Capa do quadrinho Life is Strange"
                    />

                    <HQHoverItem id="hq6-border"
                        normal={theWildCosmosCover} hover={theWildCosmosCover} link="" alt="Capa do quadrinho The Wild Cosmos"
                    />
                </div>

            </section>
        </>
    );
}
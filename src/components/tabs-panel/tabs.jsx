import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Text from "../../components/text-div"
import fotoInvalid from "../../img/invalid.svg"
import fotoSiroti from "../../img/siroti.svg"
import fotoTurma from "../../img/turma.svg"
import fotoVsePloho from "../../img/vsePloho.svg"
import fotoVector from "../../img/Vector.svg"


import "../../scss/index.scss"
import "./tabs.scss"

const MyTabs = () => (
    <Tabs>
        <TabList>
            <Tab>Наша місія</Tab>
            <Tab>Документи</Tab>
            <Tab>Звіти</Tab>
        </TabList>

        <TabPanel>
            <div class="divMission">
                <div class="divMission-content">
                    <Text title={"З чого все почалося..."}
                        titleStyle={"p-PTSan-20"}
                        width={"widthText-500"}
                        label={"Благодійний фонд зареєстрований в травні 2021 року, але фактична робота з пенітенціарними установами ведеться з 2020 року. Цілі і завдання Фонду допомоги ув'язненим: Змінити стійкий стереотип в суспільстві негативного ставлення до людей, які опинилися в місцях позбавлення волі та повернулися з них"}
                        labelStyle={"p-PTSan-W400-15"} />
                </div>
            </div>

            <div class="what-we-do">
                <p class="p-PTSan-25">що ми робимо</p>

                <div class="table">
                    <div class="table-colgroup">
                        <div class="table-col" width="50%"></div>
                        <div class="table-col" width="50%"></div>
                    </div>

                    <div class="table-tbody">
                        <div class="table-tr">
                            <div class="table-td">
                                <img src={fotoInvalid} alt=""></img>
                                <div class="div-table-text">
                                    <label class="p-WS-16">ДОПОМАГАЄМО ЛЮДЯМ З ІНВАЛІДНІСТЮ</label>
                                </div>
                            </div>
                            <div class="table-td">
                                <img src={fotoSiroti} alt=""></img>
                                <div class="div-table-text">
                                    <label class="p-WS-16">ДОПОМАГАЄМО ДІТЯМ - СИРІТАМ</label>
                                </div>
                            </div>
                        </div>
                        <div class="table-tr">
                            <div class="table-td">
                                <img src={fotoTurma} alt=""></img>
                                <div class="div-table-text">
                                    <label class="p-WS-16">ДОПОМАГАЄМО УВ’ЯЗНЕНИМ</label>
                                </div>
                            </div>
                            <div class="table-td">
                                <img src={fotoVsePloho} alt=""></img>
                                <div class="div-table-text">
                                    <label class="p-WS-16">ДОПОМАГАЄМО ЛЮДЯМ, ЯКІ ОПИНИЛИСЯ У СКРУТНОМУ
                                        СТАНОВИЩІ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TabPanel>

        <TabPanel>
            <div class="document-page">
                <div class="document-page-title">
                    <p class="p-WS-W400-18">документи</p>
                </div>
                <div class="document-page-text">
                    <div>
                        <img src={fotoVector} alt=""></img>
                    </div>
                    <div class="document-page-text-text">
                        <p class="p-PTSan-15">завантажити документи у форматі .pdf</p>
                    </div>
                </div>
            </div>
        </TabPanel>
        
        <TabPanel>
            <div class="document-page">
                <div class="document-page-title">
                    <p class="p-WS-W400-18">Зробити звіт</p>
                </div>
                <div class="document-page-text">
                    <div>
                        <img src={fotoVector} alt=""></img>
                    </div>
                    <div class="document-page-text-text">
                        <p class="p-PTSan-15">завантажити звіт за останній рік у форматі .pdf</p>
                    </div>
                </div>
            </div>
        </TabPanel>
    </Tabs>
);

export default MyTabs;
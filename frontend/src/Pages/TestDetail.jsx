import React from "react";
import "../Styles/TestDetail.css";
import { Form, Button } from 'bootstrap-4-react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const TestDetail = () => {
    const options = {
        title: {
            text: 'My chart'
        },
        series: [{
            data: [1, 2, 3]
        }]
    }

    return (
        <div className="content">
            <div className="test_detail_label">
                <h2 style={{ fontFamily: 'Montserrat-Bold' }}>Вы в режиме <h2 style={{ color: '#FF4D00' }}>инженера-испытателя</h2></h2>
                <p>Вы имеете право управлять, создавать и редактировать испытания</p>
            </div>
            <div className="test_container">
                <div className="up_labels_test">
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <h4 style={{ fontFamily: 'Montserrat-SemiBold' }}>Тест №1</h4>
                        <div style={{ marginLeft: 'auto', display: 'flex' }}>
                            <h4 style={{ fontFamily: 'Montserrat-Medium', marginRight: '10px' }}>Статус:</h4>
                            <h4 style={{ color: '#FF4D00', fontFamily: 'Montserrat-Medium' }}>Нет данных</h4>
                        </div>

                    </div>
                    <div>
                        <h4>Продолжительность</h4>
                        <h4>Скважность</h4>
                        <h4>Время предпускового нагрева</h4>
                        <h4>Период импульсного режима работы</h4>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Button id="btn_sign" className="btn_sign" class="btn_sign" style={{ width: 'fit-content', borderRadius: '20px', paddingLeft: '50px', paddingRight: '50px', fontFamily: 'Montserrat-Medium', backgroundColor: '#FF4D00', borderColor: 'white', outline: 'none' }} primary as="input" type="button" value="Старт" />
                        <Button id="btn_sign1" className="btn_sign1" class="btn_sign" style={{ marginLeft: 'auto', width: 'fit-content', paddingLeft: '50px', paddingRight: '50px', borderRadius: '20px', fontFamily: 'Montserrat-Medium', borderColor: '#FF4D00' }} primary outline as="input" type="button" value="Скачать лог" />
                    </div>
                    <div>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
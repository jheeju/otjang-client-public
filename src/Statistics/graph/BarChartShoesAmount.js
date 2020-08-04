import React from 'react';
import * as utils from '../statisticsUtils';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";

export default function BarChartShoesAmount({ wardrobe }) {

    /* 
        THINK
    X - 카테고리
    Y - 구매금액

    카테고리 설정으로 하지 말고 이미 뽑아놓은 데이터를 사용하여 작성 

    X축에는 카테고리, y축은 따로 표시하지 않고 labels 로 금액을 표시할 것 

    */

    // 실제 data 

    // const shoes = wardrobe.shoes;

    // dummy data 

    const shoes = utils.shoes;

    var shoesTypeAmount = [
        { type: 'sneakers', amount: utils.getTypeList(shoes, 'sneakers').length },
        { type: 'leather', amount: utils.getTypeList(shoes, 'leather').length },
        { type: 'sandals', amount: utils.getTypeList(shoes, 'sandals').length },
        { type: 'boots', amount: utils.getTypeList(shoes, 'boots').length },
    ]

    return (
        <VictoryChart>
            <VictoryBar
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 },
                    easing: "bounce"
                }}
                domainPadding={{ x: [60, 60] }}
                alignment="middle"
                barRatio={0.6}
                style={{ data: { fill: 'tomato' } }}
                data={shoesTypeAmount} x={'type'} y={'amount'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                offsetX={65}
                tickFormat={(data) => (`${data}EA`)}
            />


        </VictoryChart>
    )

}
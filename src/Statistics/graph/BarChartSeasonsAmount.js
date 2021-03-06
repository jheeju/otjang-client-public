import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, } from "victory-native";
import * as utils from '../statisticsUtils';
import NoStatisticsData from './NoStatisticsData';
export default function BarChartSeasonsAmount({ wardrobe }) {




    const clothing = wardrobe.clothing;
    const shoes = wardrobe.shoes;
    const accessories = wardrobe.accessories;
    const clothes = clothing.concat(shoes).concat(accessories);



    //  dummy data 

    // const clothes = utils.clothes;

    var seasonsAmount = [
        { category: '봄', amount: utils.getSeasonList(clothes, 'spring').length },
        { category: '여름', amount: utils.getSeasonList(clothes, 'summer').length },
        { category: '가을', amount: utils.getSeasonList(clothes, 'fall').length },
        { category: '겨울', amount: utils.getSeasonList(clothes, 'winter').length }
    ]

    let isExistData = seasonsAmount.find((seasonsAmountObj) => {

        if (seasonsAmountObj.amount !== 0) {
            return true;
        }
    })
    if (!isExistData) {
        return <NoStatisticsData />
    }

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
                data={seasonsAmount} x={'category'} y={'amount'}
            />

            <VictoryAxis crossAxis

                domain={[0.1, 0.5]}
            />
            <VictoryAxis dependentAxis crossAxis

                domain={[0, 4]}
                offsetX={65}
                tickFormat={(data) => (`${data}EA`)}
            />


        </VictoryChart>
    )

}
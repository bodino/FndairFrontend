import { React, useState } from 'react';
import {
    PopupBackground,
    PopupContainer,
    ButtonContainer,
    CloseButton,
    ContentContainer,
    LeftContainer,
    IconContainer,
    Description,
    GraphContainer
  } from '../ui/popup'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';

export default function GraphPopup(props) {
    const [datas, setDatas] = useState();

    async function updateData(){
        await axios
        .get('http://localhost:3001/projects/' + props.address, {})
        .then(function (response) {
          setDatas(response.data);
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    updateData();
    console.log(datas)

    // const price1 = props.prices.slice(props.prices.length - 30, props.prices.length - 1)
    // const date1 = props.dates.slice(props.prices.length - 30, props.prices.length - 1)
    const data = {
        labels: ["Sun", 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
        datasets:[{
            label: 'test data',
            data: [1.2, 1.15, 1.03, 0.98, 0.87, 0.85, 0.84],
            fill: {
                target: 'origin',
                above: 'rgb(0, 80, 124, 0.20)'
            },
            borderColor: 'rgb(0, 80, 124)',
            tension: 0.1
        }]
    }

    var options = {
        responsive: true,
        scales: {
            y: {
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        },
        elements: {
            point: {
                radius: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
    return (props.trigger) ? (
        <PopupBackground>
            <PopupContainer>
                <ButtonContainer>
                    <CloseButton onClick={()=>{props.setTrigger(false)}}>X</CloseButton>
                </ButtonContainer>
                <ContentContainer>
                    <LeftContainer>
                        <IconContainer>
                            <img style={{width:"120px", borderRadius:"50%"}} src={props.icon}/>
                        </IconContainer>
                        <Description>This protocol is really dope and this paragraph should tell you more about what they protocol does. It also needs to be styled correctly</Description>
                    </LeftContainer>
                    <GraphContainer>
                        <Line data={data} options={options} style={{maxHeight: "100%", maxWidth: "95%"}}/>
                    </GraphContainer>
                </ContentContainer>
            </PopupContainer>
        </PopupBackground>
    ) : "";
}
